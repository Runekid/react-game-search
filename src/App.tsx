import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Istanbul", "Brussels", "Gent", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading="Cities"/>
    </div>
  );
}

export default App;
