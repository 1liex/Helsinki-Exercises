const AddingNewPeople = ({
  persons,
  newName,
  phoneNum,
  setPersons,
  setNewName,
  setPhoneNum,
}) => {
  const addNewNametHandler = (e) => {
    e.preventDefault();

    const nameExists = persons.some((person) => person.name === newName);

    if (nameExists) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPersonObject = { name: newName, number: phoneNum, id: persons.length + 1};
      setPersons(persons.concat(newPersonObject));

      setNewName("");
      setPhoneNum("");
    }
  };
  return (
    <>
      <form onSubmit={addNewNametHandler}>
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

export default AddingNewPeople;
