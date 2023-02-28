import { useState, useRef } from 'react';

function Search(props) {
  const { setCurrentMovieType = Function.prototype, totalItems = 0 } = props;

  const [search, setSearch] = useState('matrix');
  const [type, setType] = useState('all');

  const searchRef = useRef();

  const handleChangeStateData = () => {
    setCurrentMovieType(search, type);
    searchRef.current.focus();
  };

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      handleChangeStateData();
    }
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    setCurrentMovieType(search, event.target.dataset.type);
    searchRef.current.focus();
  };

  return (
    <div className='row'>
      <div className='input-field'>
        <input
          id='email_inline'
          placeholder='search'
          type='search'
          ref={searchRef}
          className='validate'
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={handleKey}
          autoFocus
        />
        <button className='btn search-btn' onClick={handleChangeStateData}>
          Search
        </button>
      </div>
      <div>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='all'
            onChange={handleFilter}
            checked={type === 'all'}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='movie'
            onChange={handleFilter}
            checked={type === 'movie'}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='series'
            onChange={handleFilter}
            checked={type === 'series'}
          />
          <span>Series only</span>
        </label>
        <label>
          <input
            className='with-gap'
            name='type'
            type='radio'
            data-type='episode'
            onChange={handleFilter}
            checked={type === 'episode'}
          />
          <span>Episodes only</span>
        </label>
        <span className='teal-text lighten-1'>Total found: {totalItems}</span>
      </div>
    </div>
  );
}

export default Search;
