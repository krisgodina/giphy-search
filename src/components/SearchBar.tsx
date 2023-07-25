import { FunctionComponent, useState } from 'react';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

export const SearchBar: FunctionComponent<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <div className="search-bar-inner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="search-icon"
          viewBox="0 0 512 512"
        >
          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c31.5-36.5 50.6-82.7 50.6-134C422.6 93.1 329.5 0 222.8 0S23 93.1 23 208s93.1 208 199.8 208c51.3 0 97.5-19.2 133.9-50.8v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l9.7-9.7c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.8-57.2 128-128 128z" />
        </svg>

        <input
          type="search"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="search-input"
          placeholder="Search Gifs..."
          required
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </div>
    </form>
  );
};
