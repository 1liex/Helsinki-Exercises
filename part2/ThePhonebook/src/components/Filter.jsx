const Filter = ({ persons, setShowPersonInfo }) => {
  const filterHandler = (e) => {
    const personInfo = persons.find((person) => person.name === e.target.value);
    setShowPersonInfo(personInfo);
  };
  return (
    <>
      filter shown with: <input onChange={filterHandler} />
    </>
  );
};

export default Filter;
