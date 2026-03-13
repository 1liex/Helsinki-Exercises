import { useState, useEffect } from "react";
import Filter from "./modules/Filter";
import AddingNewPeople from "./modules/AddingNewPeople";
import Persons from "./modules/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [phoneNum, setPhoneNum] = useState("");
  const [newName, setNewName] = useState("");
  const [showPersonInfo, setShowPersonInfo] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
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
