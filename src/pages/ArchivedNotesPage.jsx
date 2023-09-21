import React from "react";
import { getArchivedNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";
import { string, func } from "prop-types";
import SearchBar from "../components/SearchBar";
import NotesList from "../components/NotesList";
import NotesListEmpty from "../components/NotesListEmpty";
function ArchivedNotesPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  function changeSearchQuery(keyword) {
    setSearchParams({ search: keyword });
  }
  return (
    <ArchivedNotesPage
      searchQuery={searchQuery}
      changeSearchQuery={changeSearchQuery}
    />
  );
}
class ArchivedNotesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      archivedNotes: getArchivedNotes() || [],
      keyword: this.props.searchQuery || ""
    };
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }
  onKeywordChangeHandler = (searchValue) => {
    this.setState({
      keyword: searchValue
    });
    this.props.changeSearchQuery(searchValue);
  };
  render() {
    // Fitur pencarian dengan memfilter catatan yang mengandung value dari state keyword
    // Saya menggunakan judul dan isi catatan agar fitur pencarian dapat menjangkau lebih luas
    const notes = this.state.archivedNotes.filter((note) => {
      return (
        note.title.toLowerCase().includes(this.state.keyword.toLowerCase()) ||
        note.body.toLowerCase().includes(this.state.keyword.toLowerCase())
      );
    });
    return (
      <section className="archives-page">
        <h2>Archive Notes</h2>
        <SearchBar
          searchValue={this.state.keyword}
          onChange={this.onKeywordChangeHandler}
        />
        {this.state.archivedNotes.length > 0 ? (
          <NotesList notes={notes} />
        ) : (
          <NotesListEmpty page="archive" />
        )}
      </section>
    );
  }
}
ArchivedNotesPage.propTypes = {
  searchQuery: string.isRequired,
  changeSearchQuery: func.isRequired
};
export default ArchivedNotesPageWrapper;
