import { func, string } from "prop-types";

function SearchBar({ onChange, searchValue }) {
  const onChangeHandler = (event) => {
    onChange(event.target.value);
  };

  return (
    <section className="search-bar">
      <input
        type="text"
        value={searchValue}
        onChange={onChangeHandler}
        placeholder="Cari Catatan..."
      />
    </section>
  );
}
SearchBar.propTypes = {
  onChange: func.isRequired,
  searchValue: string.isRequired
};
export default SearchBar;
