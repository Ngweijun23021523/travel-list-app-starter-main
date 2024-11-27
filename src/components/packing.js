import React from "react";

function Item({ item, togglePacked, deleteItem }) {
  const itemPacked = {
    textDecoration: item.packed ? "line-through" : "none",
  };

  return (
    <li style={itemPacked}>
      <span>
        {item.quantity} {item.description}
      </span>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => togglePacked(item.id)}
      />
      <button onClick={() => deleteItem(item.id)} className="delete-button">
        Delete
      </button>
    </li>
  );
}

function PackingList({ items, togglePacked, deleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            togglePacked={togglePacked}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
