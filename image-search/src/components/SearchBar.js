import React, { useState } from 'react';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');
  const { userSubmit } = props;
  function onFormSubmit(event) {
    event.preventDefault();
    userSubmit(term);
  }
  console.log(term);
  return (
    <div className='ui segment'>
      <form onSubmit={onFormSubmit} className='ui form'>
        <div className='field'>
          <label> Enter search text:</label>
          <input
            type='text'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
