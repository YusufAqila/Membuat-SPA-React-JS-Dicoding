import { array } from "prop-types";
import NotesItem from "./NotesItem";
import { Link } from "react-router-dom";

function NotesList({ notes }) {
  return (
    <section className="notes-list">
      {notes.map((note, index) => (
        <Link
          to={`/notes/${note.id}`}
          style={{ textDecoration: "none" }}
          key={index}
        >
          <NotesItem key={note.id} id={note.id} {...note} />
        </Link>
      ))}
    </section>
  );
}
NotesList.propTypes = {
  notes: array.isRequired
};
export default NotesList;
