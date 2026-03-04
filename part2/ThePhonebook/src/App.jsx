import { useState } from "react";
import Filter from "./modules/Filter";
import AddingNewPeople from "./modules/AddingNewPeople";
import Persons from "./modules/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [phoneNum, setPhoneNum] = useState("");
  const [newName, setNewName] = useState("");
  const [showPersonInfo, setShowPersonInfo] = useState("");

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setShowPersonInfo={setShowPersonInfo} />
      <div>
        {showPersonInfo
          ? `${showPersonInfo.name} ${showPersonInfo.number}`
          : "Nothing yet..."}
      </div>
      <h2>add a new</h2>
      <AddingNewPeople
        persons={persons}
        newName={newName}
        phoneNum={phoneNum}
        setPersons={setPersons}
        setNewName={setNewName}
        setPhoneNum={setPhoneNum}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
