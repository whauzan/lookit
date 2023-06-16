import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { SubredditValidator } from '@/lib/validators/subreddit';
import { z } from 'zod';

export async function POST(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new Response('unauthorized', { status: 401 });
    }

    const body = await req.json();
    const { name } = SubredditValidator.parse(body);

    // Check if subreddit already exists
    const subredditExists = await db.subreddit.findFirst({
      where: { name },
    });

    if (subredditExists) {
      return new Response('subreddit already exists', { status: 409 });
    }

    // Create subreddit and associate it with the user
    const subreddit = await db.subreddit.create({
      data: {
        name,
        creatorId: session.user.id,
      },
    });

    // Creator also has to be subscribed
    await db.subscription.create({
      data: {
        userId: session.user.id,
        subredditId: subreddit.id,
      },
    });

    return new Response(subreddit.name);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return new Response(err.message, { status: 422 });
    }

    return new Response('Could not create subreddit', { status: 500 });
  }
}
