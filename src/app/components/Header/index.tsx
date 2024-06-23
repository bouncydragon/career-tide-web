import Link from 'next/link';
import Image from 'next/image';
import { APP_TITLE, LOGIN_BTN, POST_A_JOB } from '@/app/constants';

export default function Header() {
  return (
    <header className='container flex items-center justify-between mx-auto my-4'>
      <Link href='/' className='flex gap-0 items-center'>
        <Image src='/images/job-wave-lg.png' alt='job-wave-logo' width={35} height={35} />
        <span className='font-bold text-lg'>{APP_TITLE}</span>
      </Link>
      <nav className='flex gap-2 *:py-2 *:px-4 *:rounded-md'>
        <Link className='bg-gray-200' href={'/login'}>
          {LOGIN_BTN}
        </Link>
        <Link className='bg-blue-600 text-white' href={'/new-job'}>
          {POST_A_JOB}
        </Link>
      </nav>
    </header>
  );
}
