'use client';

import { ChevronLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { buttonVariants } from './ui/Button';

const ToFeedButton = () => {
  const pathname = usePathname();

  // if path is /l/mycom, turn into /
  // if path is /l/mycom/post/cligad6jf0003uhest4qqkeco, turn into /l/mycom

  const subredditPath = getSubredditPath(pathname);

  return (
    <a href={subredditPath} className={buttonVariants({ variant: 'ghost' })}>
      <ChevronLeft className="mr-1 h-4 w-4" />
      {subredditPath === '/' ? 'Back home' : 'Back to community'}
    </a>
  );
};

const getSubredditPath = (pathname: string) => {
  const splitPath = pathname.split('/');

  if (splitPath.length === 3) return '/';
  else if (splitPath.length > 3) return `/${splitPath[1]}/${splitPath[2]}`;
  // default path, in case pathname does not match expected format
  else return '/';
};

export default ToFeedButton;
