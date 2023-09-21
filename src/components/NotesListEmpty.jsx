import { string } from "prop-types";

function NotesListEmpty({ page }) {
  return (
    <section className="notes-list-empty">
      <p className="notes-list__empty">
        Tidak ada catatan {page === "archive" ? "di archive" : "di active"}
      </p>
    </section>
  );
}
NotesListEmpty.propTypes = {
  page: string.isRequired
};
export default NotesListEmpty;
