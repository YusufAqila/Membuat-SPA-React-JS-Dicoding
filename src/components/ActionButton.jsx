import React from "react";
import { string, func, node } from "prop-types";
function ActionButton(props) {
  return (
    <button
      className="action"
      type="button"
      title={props.title}
      onClick={props.onSubmit}
    >
      {props.children}
    </button>
  );
}
ActionButton.propTypes = {
  title: string.isRequired,
  onSubmit: func,
  children: node.isRequired
};

export default ActionButton;
