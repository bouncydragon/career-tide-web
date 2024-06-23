import { APP_CALL_HEADING, SEARCH_BTN } from '@/app/constants';

export default function Index() {
  return (
    <section className='container my-16'>
      <h1 className='text-4xl font-bold text-center'>{APP_CALL_HEADING}</h1>
      {/*<p className='text-center text-gray-600 mt-2'>*/}
      {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut*/}
      {/*  labore et dolore magna aliqua. Consequat interdum varius sit amet mattis vulputate.*/}
      {/*</p>*/}
      <form action='' className='flex gap-2 mt-4 max-w-md mx-auto'>
        <input
          type='search'
          className='border border-gray-400 w-full py-2 px-3 rounded-md'
          placeholder='Search for a job...'
        />
        <button className='bg-blue-600 text-white py-2 px-4 rounded-md'>{SEARCH_BTN}</button>
      </form>
    </section>
  );
}
