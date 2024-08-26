import "./App.css";
import useCounter from "./hooks/useCounter";
import PeopleList from "./PeopleList";

function App() {
  const number = useCounter();
  return (
    <div className="App">
      <header className="App-header">
        {number} <PeopleList />
        <PeopleList />
      </header>
    </div>
  );
}

export default App;
