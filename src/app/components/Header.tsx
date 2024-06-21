import Link from 'next/link';

export default function Header() {
  return (
    <header className='container flex items-center justify-between py-4 px-6 mx-auto'>
      <Link href='/'>Career Tide</Link>
      <nav className='flex gap-2 *:py-2 *:px-4 *:rounded-md'>
        <Link className='bg-gray-200' href={'/login'}>
          Login
        </Link>
        <Link className='bg-blue-600 text-white' href={'/new-job'}>
          Post a job
        </Link>
      </nav>
    </header>
  );
}
