import { string } from "prop-types";
import { showFormattedDate } from "../utils/index";
import parser from "html-react-parser";
function NotesItem({ title, createdAt, body }) {
  return (
    <article className="note-item">
      <h3 className="note-item__title" style={{ textDecoration: "underline" }}>
        {title}
      </h3>
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{parser(body)}</p>
    </article>
  );
}
NotesItem.propTypes = {
  title: string.isRequired,
  createdAt: string.isRequired,
  body: string.isRequired
};
export default NotesItem;
