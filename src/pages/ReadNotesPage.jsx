import React from "react";
import {
  getNote,
  archiveNote,
  unarchiveNote,
  deleteNote
} from "../utils/local-data";
import { useParams, useNavigate } from "react-router-dom";
import { string, func } from "prop-types";
import DetailPage from "../components/DetailPage";
import ActionButton from "../components/ActionButton";
import { MdOutlineArchive, MdOutlineUnarchive } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi";
function ReadNotesPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <ReadNotesPage activeId={id} navigate={navigate} />;
}
class ReadNotesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.activeId)
    };
  }
  onEditNoteHandler = () => {
    this.props.navigate(`/notes/edit/${this.state.note.id}`);
  };
  onArchiveNoteHandler = () => {
    archiveNote(this.props.activeId);
    this.props.navigate("/");
  };
  onUnArchiveNoteHandler = () => {
    unarchiveNote(this.props.activeId);
    this.props.navigate("/archives");
  };
  onDeleteNoteHandler = () => {
    deleteNote(this.props.activeId);
    this.props.navigate("/");
  };
  render() {
    return (
      <section className="detail-page">
        <DetailPage {...this.state.note} />
        <div className="detail-page__action">
          <ActionButton onSubmit={this.onEditNoteHandler} title="Edit">
            <HiOutlinePencil />
          </ActionButton>
          {this.state.note.archived ? (
            <ActionButton
              onSubmit={this.onUnArchiveNoteHandler}
              title="Aktifkan"
            >
              <MdOutlineUnarchive />
            </ActionButton>
          ) : (
            <ActionButton onSubmit={this.onArchiveNoteHandler} title="Arsipkan">
              <MdOutlineArchive />
            </ActionButton>
          )}

          <ActionButton onSubmit={this.onDeleteNoteHandler} title="Hapus">
            <FiTrash />
          </ActionButton>
        </div>
      </section>
    );
  }
}
ReadNotesPage.propTypes = {
  activeId: string.isRequired,
  navigate: func.isRequired
};

export default ReadNotesPageWrapper;
