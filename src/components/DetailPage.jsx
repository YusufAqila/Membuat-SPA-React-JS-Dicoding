import React from "react";
import { showFormattedDate } from "../utils/index";
import parser from "html-react-parser";
import { string } from "prop-types";

function DetailPage({ title, createdAt, body }) {
  return (
    <>
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="detail-page__body">{parser(body)}</div>
    </>
  );
}

DetailPage.propTypes = {
  title: string.isRequired,
  createdAt: string.isRequired,
  body: string.isRequired
};
export default DetailPage;
