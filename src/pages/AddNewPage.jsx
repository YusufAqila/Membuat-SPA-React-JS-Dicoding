import React from "react";
import { func } from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import { getNote, addNote, editNote } from "../utils/local-data";
import NotesInput from "../components/NotesInput";

function AddNewPageWrapper() {
  const { id } = useParams();
  const notes = getNote(id) || {};
  const navigate = useNavigate();
  const onAddNoteHandler = (note) => {
    if (id) {
      editNote(note);
    } else {
      addNote(note);
    }

    navigate("/");
  };

  return (
    <AddNewPage
      notes={notes}
      navigate={navigate}
      onAddNoteHandler={onAddNoteHandler}
    />
  );
}
class AddNewPage extends React.Component {
  onAddNoteHandler = (note) => {
    this.props.onAddNoteHandler(note);
  };

  render() {
    return (
      <section className="add-new-page">
        <NotesInput
          addNoteHandler={this.onAddNoteHandler}
          notes={this.props.notes}
        />
      </section>
    );
  }
}
AddNewPage.propTypes = {
  navigate: func.isRequired,
  onAddNoteHandler: func.isRequired
};
export default AddNewPageWrapper;
