  import React, { useState } from "react";

  // Initial packing items
  const initialItems = [
    { id: 1, description: "Shirt", quantity: 5, packed: false },
    { id: 2, description: "Pants", quantity: 2, packed: false },
  ];



  function Logo() {
    return <h1>My Travel List</h1>;
  }

  function Form({ handleAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setquantity] = useState(1);
  


    function handleSubmit(event) {
      event.preventDefault();
      const newitem={
        id: Math.floor(Math.random()*10000),
        description,
        quantity,
        packed:false,
      }
      handleAddItems(newitem);
      setDescription("");
      setquantity(1);
    }

    function onChange(event) {
      setDescription(event.target.value);
    }

    function onChangeNumber(event) {
      setquantity(event.target.value);
    }


    

    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need to pack?</h3>
        <select id="quantity" value={quantity} onChange={onChangeNumber}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <input type="text" placeholder="Item"  value={description} onChange={onChange}/>

        <button type="submit">Add</button>
      </form>
    );
  }

  function Item({item , togglePacked, deleteItem}) {
    const itemPacked = {
      textDecoration: item.packed ? "line-through" : "none",
    };

    return (
      
      <li style={itemPacked}>
        {item.quantity} {item.description} 
        <input 
            type="checkbox" 
            checked={item.packed} 
            onChange={() => togglePacked(item.id)} 
        />
        <button onClick={() => deleteItem(item.id)} className="delete-button">Delete</button>
      </li>
    );}

  function PackingList({items, togglePacked,deleteItem}) {
    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item key={item.id} item={item} togglePacked={togglePacked} deleteItem={deleteItem}/>
          ))}
        </ul>
      </div>
    );
  }

  function Stats({items}) {
    const totalitems=items.length;
    const packeditems=items.filter((item) => item.packed).length;
    const percentage=(packeditems/totalitems)*100

    return (
      <footer className="stats">
        <em>You have {totalitems} items in the list. You already packed {packeditems} items {percentage}% packed .</em>
      </footer>
    );
  }

  function App() {
    const [items, setitems] = useState(initialItems); 

    function handleAddItems(items) {  
      setitems((previtems) => [...previtems, items]);
    }

    function  togglePacked(itemId) {
      setitems((previtems) =>
        previtems.map((item) =>
          item.id === itemId ? { ...item, packed: !item.packed } : item
        )
      );
    }


    
    function deleteItem(id) {
      setitems((prevItems) => prevItems.filter((item) => item.id !== id));
    }
    return (
      <div className="app">
        <Logo />
        <Form handleAddItems={handleAddItems} />
        <PackingList  items={items} togglePacked={togglePacked} deleteItem={deleteItem}/>
        <Stats items={items} />
      </div>
    );
  }

  export default App;
