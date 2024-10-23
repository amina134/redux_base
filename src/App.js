import { useDispatch, useSelector } from 'react-redux';
import { add } from './redux/PersonSlice';
import PersonList from './components/PersonList';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const personSlices = useSelector(state => state.personSlices);
  console.log("This list of Persons from App component: ", personSlices);
  const Dispatch = useDispatch();

  const addNewPerson = () => {
    const newPerson = {};
    newPerson.id = uuidv4();
    newPerson.name = "Farid";
    Dispatch(add(newPerson));
  };

  return (
    <div className="App">
      <PersonList />
      <button style={{ width: "200px", height: "50px", margin: "10px", backgroundColor: "blanchedalmond", fontSize: "30px", borderRadius: "4px" }} onClick={() => addNewPerson()}>Add Person</button>
    </div>
  );
}

export default App;
