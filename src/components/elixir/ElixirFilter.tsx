import { ChangeEvent, FC, useState } from 'react';

interface ElixirFilterProps {
  onFilterChange: (difficulty: string) => void;
}

export const ElixirFilter: FC<ElixirFilterProps> = ({ onFilterChange }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const difficultyChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const difficultyValue = event.target.value;
    setSelectedDifficulty(difficultyValue);
    onFilterChange(difficultyValue);
  };

  return (
    <div className='flex justify-between items-center'>
      <label className='italic font-bold' htmlFor='difficulty'>
        Sort by difficulty &#x21E8;
      </label>
      <select
        id='difficulty'
        className='rounded-md py-2 px-4 outline-0 w-full text-white bg-gray-300'
        value={selectedDifficulty}
        onChange={difficultyChangeHandler}
      >
        <option value=''>All Difficulties</option>
        <option value='Unknown'>Unknown</option>
        <option value='Advanced'>Advanced</option>
        <option value='Moderate'>Moderate</option>
        <option value='Beginner'>Beginner</option>
        <option value='OrdinaryWizardingLevel'>Ordinary Wizarding Level</option>
        <option value='OneOfAKind'>One Of A Kind</option>
      </select>
    </div>
  );
};
