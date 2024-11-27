import React, { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import PackingList from "./packing";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [searchTerm, setSearchTerm] = useState(""); // New state for search term

  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function togglePacked(itemId) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function deleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function clearAllItems() {
    setItems([]);
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value); // Update the search term as the user types
  }

  // Filter items based on the search term
  const filteredItems = items.filter((item) =>
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <PackingList
        items={filteredItems}
        togglePacked={togglePacked}
        deleteItem={deleteItem}
      />
      <Stats items={items} />
      <button className="clear-all-button" onClick={clearAllItems}>
        Clear All
      </button>
    </div>
  );
}

export default App;
