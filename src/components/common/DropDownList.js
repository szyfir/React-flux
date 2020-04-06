import React from "react";
import PropTypes from "prop-types";

function DropDownList(props) {
  return (
    <div className="field">
      <select
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value={props.authorId || ""}
        className="form-control"
      >
        {props.authors &&
          props.authors.map((author) => {
            return (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            );
          })}
      </select>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
}

DropDownList.propTypes = {
  authorId: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

DropDownList.defaultProps = {
  authors: [],
  error: "",
};

export default DropDownList;
