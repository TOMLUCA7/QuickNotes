import './SearchBar.css';

const SearchBar = ({ searchNotes, setSearchNotes }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar-input"
        placeholder="Search notes..."
        value={searchNotes}
        onChange={(e) => setSearchNotes(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
