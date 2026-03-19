import personService from "../server/personService";
const Persons = ({ persons, setPersons }) => {
  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personService
        .remove(id)
        .then(() => {
          const updatedPersons = persons.filter((person) => person.id !== id);
          setPersons(updatedPersons);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      {persons.map((element) => (
        <div key={element.id}>
          {`${element.name} ${element.number}`}{" "}
          <button onClick={() => handleDelete(element.id, element.name)}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default Persons;
