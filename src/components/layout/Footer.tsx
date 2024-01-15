import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <div className='flex justify-around items-center w-full h-12 bg-black text-white'>
      <p>
        &copy; 2024 Designed with magic and{' '}
        <a href='https://github.com/MossPiglets/WizardWorldAPI' target='_blank' rel='noopener noreferrer'>
          Wizard World API
        </a>{' '}
        &spades; Accio Coffee!
      </p>
    </div>
  );
};
