// import logo from './logo.svg';
import './App.css';
import Expenses from './components/expenses/Expenses';

function App() {
  const expensesList = [
    {
      id: "e1",
      date: new Date(2022, 12, 1),
      title: "Station Clock",
      amount: 5500.00
    },
    {
      id: "e2",
      date: new Date(2022, 12, 2),
      title: "Dinner",
      amount: 500.00
    },
    {
      id: "e3",
      date: new Date(2022, 12, 3),
      title: "Snacks",
      amount: 510.00
    },
    {
      id: "e4",
      date: new Date(2022, 12, 4),
      title: "Microwave",
      amount: 1999.00
    }
  ];


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      

      <Expenses expensesList={expensesList}/>
      <div>
        <h2>Let's get started</h2>
        <p>This is also visible</p>
      </div>
    </div>
  );
}

export default App;
