import personService from "../server/personService";
const Persons = ({ persons, setPersons, setMessage, setMsgColor }) => {
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
          setMessage(`info of ${name} has already been removed from server`);
          setMsgColor("red");
          setTimeout(() => {
            setMessage(null);
            setMsgColor(null);
          }, 3000);
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
