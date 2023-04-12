import "./App.css";
import Button from "./components/Button";


function App() {

  return (
    <div>
      <Button color='secondary' onClick={() => console.log('clicked')}>
        Primary
      </Button>
    </div>
  );
}

export default App;
