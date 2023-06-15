import Image from 'next/image';
import Link from 'next/link';
import UserAuthForm from './UserAuthForm';

const SignIn = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col items-center space-y-2 text-center">
        <div className="w-24">
          <Image src={'/logo.png'} width={100} height={100} alt="Lookit Logo" />
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="mx-auto max-w-xs text-sm">
          By continuing, you are setting up a Lookit account and agree to our
          User Agreement and Privacy Policy
        </p>

        {/* Sign In Form */}
        <UserAuthForm />

        <p className="px-8 text-center text-sm text-zinc-700">
          New to Lookit?{' '}
          <Link
            href={'/sign-up'}
            className="text-sm underline underline-offset-4 hover:text-zinc-800"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
