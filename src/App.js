import { useState, useEffect } from 'react';
import './App.css';
import Person from './Person';
import Individuals from './Individuals';
import Teachers from './Teachers';
import TeacherProp from './TeacherProp';

function App() {

  const [data, setData] = useState()

  const [name, setName] = useState("React");

  const [year, setYear] = useState();


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(data => setData(data))
  }, []);


  function Year() {
    setYear("React");
  };

  function changeName() {
    setName("Vue");

  };

  return (
    <div>
      <h1>What language is this coded in?</h1>

      <p>{year}</p>
      <div class="center">
      <button onClick={Year}>What language?</button>
      </div>
      <p>{name}</p>
      <button onClick={changeName}>What did we learn before react?</button>

      <h1>
        <span>What Javascript languages have we learned so far?</span>
      </h1>
      <dl>{Teachers.map((indivialsTeachers) => {
        return (<TeacherProp
          name={indivialsTeachers.name}
          subject={indivialsTeachers.subject}/>)
      })}</dl>

      <h1>
        <span>All my best friends</span>
      </h1>
      <dl>{Individuals.map((persons) => {
        return (<Person
          name={persons.name}
          age={persons.age}
          personality={persons.personality} />)
      })}</dl>

<h1>Fetching data</h1>
      {data && data.map((user) => <p>{user.name}</p>)}

    </div>
  );
}

export default App;
