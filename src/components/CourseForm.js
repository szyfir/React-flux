import React from "react";
import TextInput from "./common/TextInput";
import DropDownList from "./common/DropDownList";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        name="title"
        value={props.course.title}
        onChange={props.onChange}
        label="Title"
        error={props.errors.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <DropDownList
          id="author"
          name="authorId"
          onChange={props.onChange}
          authorId={props.author.authorId}
          authors={props.authors}
          error={props.errors.authorId}
        />

        {/* <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            value={props.course.authorId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
          {props.errors.authorId && (
            <div className="alert alert-danger">{props.errors.authorId}</div>
          )}
        </div> */}
      </div>

      <TextInput
        id="category"
        type="text"
        name="category"
        value={props.course.category}
        label="Category"
        onChange={props.onChange}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
