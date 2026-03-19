import { useState, useEffect } from "react";
import Filter from "./modules/Filter";
import PersonForm from "./modules/PersonForm";
import Persons from "./modules/Persons";
import personService from "./server/personService";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [phoneNum, setPhoneNum] = useState("");
  const [newName, setNewName] = useState("");
  const [showPersonInfo, setShowPersonInfo] = useState("");

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

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
      <PersonForm
        persons={persons}
        newName={newName}
        phoneNum={phoneNum}
        setPersons={setPersons}
        setNewName={setNewName}
        setPhoneNum={setPhoneNum}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} />
    </div>
  );
};

export default App;
