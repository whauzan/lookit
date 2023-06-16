import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from './ui/Button';
import { getAuthSession } from '@/lib/auth';
import UserAccountNav from './UserAccountNav';
import SearchBar from './SearchBar';

const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <div className="fixed inset-x-0 top-0 z-10 h-fit border-b border-zinc-300 bg-zinc-100 py-2">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between gap-2">
        {/* Logo */}
        <Link href={'/'} className="flex items-center gap-2">
          <div className="block w-12 sm:w-10 md:hidden">
            <Image
              src={'/logo.png'}
              width={100}
              height={100}
              alt="Lookit Logo"
              priority
            />
          </div>
          <div className="hidden w-24 sm:w-20 md:block">
            <Image
              src={'/logo-text.png'}
              width={100}
              height={100}
              alt="Lookit Logo"
            />
          </div>
        </Link>

        {/* Search Bar */}
        <SearchBar />

        {session?.user ? (
          <p>
            <UserAccountNav user={session.user} />
          </p>
        ) : (
          <Link className={buttonVariants()} href={'/sign-in'}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
