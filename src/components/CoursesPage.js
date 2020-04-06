import React, { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";
import authorStore from "../stores/authorsStore";
import { loadAuthors } from "../actions/authorActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [authors, setAuthors] = useState(authorStore.getAuhtors());

  useEffect(() => {
    courseStore.addChangeListener(onCourseChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onCourseChange);
  }, []);

  useEffect(() => {
    authorStore.addChangeListener(onAuthorChange);
    if (authorStore.getAuhtors().length === 0) loadAuthors();
    return () => authorStore.removeChangeListener(onAuthorChange);
  }, []);

  function onCourseChange() {
    setCourses(courseStore.getCourses());
  }

  function onAuthorChange() {
    setAuthors(authorStore.getAuhtors());
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>

      {/* <input type="submit" value="Delete" className="btn btn-danger">
        Delete Course
      </input> */}
      <CourseList
        authors={authors}
        courses={courses}
        deleteCourse={deleteCourse}
      />
    </>
  );
}

export default CoursesPage;
