const Persons = ({ persons }) => {
  return (
    <>
      {persons.map((element) => (
        <div key={element.id}>{`${element.name} ${element.number}`}</div>
      ))}
    </>
  );
};

export default Persons;
