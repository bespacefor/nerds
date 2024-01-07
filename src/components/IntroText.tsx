import { FC } from 'react';

export const IntroText: FC = () => {
  return (
    <>
      <blockquote className='text-2xl font-semibold italic text-center text-slate-900'>
        Books! And cleverness! There are more important things —
        <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block'>
          <span className='relative text-white'>friendship and bravery.</span>
        </span>
      </blockquote>
    </>
  );
};
