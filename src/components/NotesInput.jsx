import React from "react";
import { func, object } from "prop-types";
import ActionButton from "./ActionButton";
import { MdCheck } from "react-icons/md";
class NotesInput extends React.Component {
  constructor(props) {
    super(props);
    this.addNewPageInputRef = React.createRef();
    this.state = {
      id: props.notes.id || "",
      title: props.notes.title || "",
      body: props.notes.body || ""
    };
  }
  componentDidMount() {
    this.addNewPageInputRef.current.innerHTML = this.state.body;
  }

  onChangeTitleHandler = (event) => {
    this.setState(() => {
      return {
        title: event.target.value
      };
    });
  };
  onInputBodyHandler = (event) => {
    this.setState(() => {
      return {
        body: event.target.innerHTML
      };
    });
  };
  onSubmitHandler = () => {
    if (this.state.id !== "") {
      this.props.addNoteHandler(this.state);
    } else {
      this.props.addNoteHandler({
        title: this.state.title,
        body: this.state.body
      });
    }
  };
  render() {
    return (
      <>
        <div className="add-new-page__input">
          <input
            className="add-new-page__input__title"
            placeholder="Saya Siapa..."
            value={this.state.title}
            onChange={this.onChangeTitleHandler}
          />
          <div
            className="add-new-page__input__body"
            contentEditable={true}
            data-placeholder="Saya seekor manusia..."
            value={this.state.body}
            onInput={this.onInputBodyHandler}
            ref={this.addNewPageInputRef}
          ></div>
        </div>
        <div className="add-new-page__action">
          <ActionButton
            onSubmit={
              this.state.title.trim() !== "" || this.state.body.trim() !== ""
                ? this.onSubmitHandler
                : () => {}
            }
            title="Simpan"
          >
            <MdCheck />
          </ActionButton>
        </div>
      </>
    );
  }
}
NotesInput.propTypes = {
  addNoteHandler: func.isRequired,
  notes: object.isRequired
};
export default NotesInput;
