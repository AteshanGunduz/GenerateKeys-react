import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import NewItemForm from "./NewItemForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(value) {
    const newItem = {
      id: uuidv4(),
      text: value
    };
    setItems([...items, newItem]);
  }

  console.log(items);

  return (
    <div>
      {items.length > 0 && <ShoppingList items={items} />}
      <NewItemForm handleAddItem={handleAddItem} />
    </div>
  );
}

export default App;
