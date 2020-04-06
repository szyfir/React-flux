import React, { useState, useEffect } from "react";
import { Prompt } from "react-router-dom";
import CourseForm from "./CourseForm";
import courseStore from "../stores/courseStore";
import { toast } from "react-toastify";
import * as courseActions from "../actions/courseActions";
import NotFoundPage from "./NotFoundPage";
import authorStore from "../stores/authorsStore";
import { loadAuthors } from "../actions/authorActions";
function ManageCoursePage(props) {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [authors, setAuthors] = useState(authorStore.getAuhtors());
  const [author, setAuthor] = useState({
    authorId: null,
    name: "",
  });
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      setCourse(courseStore.getCourseBySlug(slug));
    }
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);

  useEffect(() => {
    authorStore.addChangeListener(onAuthorChange);
    if (authors.length === 0) loadAuthors();
    return () => authorStore.removeChangeListener(onAuthorChange);
  }, [authors.length]);

  function onAuthorChange() {
    setAuthors(authorStore.getAuhtors());
  }

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  function handleChange({ target }) {
    console.log(target.name);
    setAuthor({
      ...author,
      [target.name]: target.value,
    });
    setCourse({
      ...course,
      [target.name]: target.value,
    });
  }

  function formIsValid() {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author Id is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function slugIsExisting() {
    if (!course) return props.history.push("/notFoundPage");
    return true;
  }

  function handleSumbit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved.");
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      {slugIsExisting() && (
        <CourseForm
          authors={authors}
          author={author}
          errors={errors}
          course={course}
          onChange={handleChange}
          onSubmit={handleSumbit}
        />
      )}
    </>
  );
}

export default ManageCoursePage;
