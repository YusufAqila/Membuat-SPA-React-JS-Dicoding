import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getActiveNotes } from "../utils/local-data";
import { string, func } from "prop-types";
import SearchBar from "../components/SearchBar";
import NotesList from "../components/NotesList";
import NotesListEmpty from "../components/NotesListEmpty";
import ActionButton from "../components/ActionButton";
import { HiOutlinePlus } from "react-icons/hi";
function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const navigate = useNavigate();
  function changeSearchQuery(keyword) {
    setSearchParams({ search: keyword });
  }
  return (
    <HomePage
      navigate={navigate}
      searchQuery={searchQuery}
      changeSearchQuery={changeSearchQuery}
    />
  );
}
class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes() || [],
      keyword: this.props.searchQuery || ""
    };
  }
  onKeywordChangeHandler = (searchValue) => {
    this.setState({
      keyword: searchValue
    });
    this.props.changeSearchQuery(searchValue);
  };
  onClickAddButtonHandler = () => {
    this.props.navigate("/notes/new");
  };
  render() {
    // Fitur pencarian dengan memfilter catatan yang mengandung value dari state keyword
    // Saya menggunakan judul dan isi catatan agar fitur pencarian dapat menjangkau lebih luas
    const notes = this.state.notes.filter((note) => {
      return (
        note.title.toLowerCase().includes(this.state.keyword.toLowerCase()) ||
        note.body.toLowerCase().includes(this.state.keyword.toLowerCase())
      );
    });
    return (
      <section className="homepage">
        <h2>Active Notes</h2>
        <SearchBar
          searchValue={this.state.keyword}
          onChange={this.onKeywordChangeHandler}
        />
        {this.state.notes.length > 0 ? (
          <NotesList notes={notes} />
        ) : (
          <NotesListEmpty page="active" />
        )}

        <div className="homepage__action">
          <ActionButton title="Tambah" onSubmit={this.onClickAddButtonHandler}>
            <HiOutlinePlus />
          </ActionButton>
        </div>
      </section>
    );
  }
}
HomePage.propTypes = {
  navigate: func.isRequired,
  searchQuery: string.isRequired,
  changeSearchQuery: func.isRequired
};
export default HomePageWrapper;
