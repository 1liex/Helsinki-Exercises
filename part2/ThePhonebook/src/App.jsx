import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./server/personService";
import ShowMessages from "./components/ShowMessages";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [phoneNum, setPhoneNum] = useState("");
  const [newName, setNewName] = useState("");
  const [showPersonInfo, setShowPersonInfo] = useState("");
  const [message, setMessage] = useState(null);
  const [msgColor, setMsgColor] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <ShowMessages msg={message} msgColor={msgColor} />
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
        setMessage={setMessage}
        setMsgColor={setMsgColor}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        setPersons={setPersons}
        setMessage={setMessage}
        setMsgColor={setMsgColor}
      />
    </div>
  );
};

export default App;
