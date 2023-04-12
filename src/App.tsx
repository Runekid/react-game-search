import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Istanbul", "Brussels", "Gent", "Paris"];

  const handleSelectItem = (item: string) => console.log(item);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
