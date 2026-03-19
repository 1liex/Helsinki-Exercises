import personService from "../server/personService";
const PersonForm = ({
  persons,
  newName,
  phoneNum,
  setPersons,
  setNewName,
  setPhoneNum,
}) => {
  const updatePerson = (id) => {
    const updateObject = {
      name: newName,
      number: phoneNum,
    };

    personService.update(id, updateObject).then((response) => {
      setPersons(
        persons.map((person) => (person.id !== id ? person : response)),
      );
    });

    clerarForm();
  };

  const addPerson = () => {
    const newObject = {
      name: newName,
      number: phoneNum,
      id: String(persons.length + 1),
    };

    personService.create(newObject).then((respons) => {
      setPersons(persons.concat(respons));
    });
    clerarForm();
  };
  const HandleFormSubmit = (e) => {
    e.preventDefault();

    const existingPerson = persons.find((person) => person.name === newName);

    if (
      existingPerson &&
      window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`,
      )
    ) {
      updatePerson(existingPerson.id);
    } else {
      addPerson();
    }
  };

  const clerarForm = () => {
    setNewName("");
    setPhoneNum("");
  };

  return (
    <>
      <form onSubmit={HandleFormSubmit}>
        <div>
          name:{" "}
          <input
            onChange={(e) => setNewName(e.target.value)}
            value={newName}
            required
          />
        </div>
        <div>
          number:{" "}
          <input
            onChange={(e) => setPhoneNum(e.target.value)}
            value={phoneNum}
            required
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
