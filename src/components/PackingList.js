import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onDeleteList,
}) {
  const [sortby, setSortBy] = useState("input");

  let sortedItems;

  if (sortby === "input") sortedItems = items;

  if (sortby === "descritpion")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortby === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortby} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="descritpion">Sort by descritpion</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onDeleteList}>Clear List</button>
      </div>
    </div>
  );
}
