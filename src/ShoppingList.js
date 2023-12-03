function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
}

export default ShoppingList;
