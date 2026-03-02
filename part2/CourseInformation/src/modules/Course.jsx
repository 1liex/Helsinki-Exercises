const Course = ({ courses }) => {
  return (
    <>
      {courses.map(course => {
        const total = course.parts.reduce(
          (sum, part) => sum + part.exercises,
          0,
        );
        return (
          <div key={course.id}>
            <h1>{course.name}</h1>
            {course.parts.map(part => {
              return <p key={part.id}>{part.name}</p>;
            })}
            <h4>total of {total}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Course;
