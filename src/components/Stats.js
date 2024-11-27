import React from "react";

function Stats({ items }) {
  const totalitems = items.length;
  const packeditems = items.filter((item) => item.packed).length;
  const percentage = totalitems === 0 ? 0 : (packeditems / totalitems) * 100;

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You have got everything packed!</em>
      ) : (
        <em>
          You have {totalitems} items in the list. You already packed {packeditems}{" "}
          items ({percentage.toFixed(2)}% packed).
        </em>
      )}
    </footer>
  );
}

export default Stats;
