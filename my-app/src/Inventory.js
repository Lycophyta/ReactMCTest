function Inventory({ inventory }) {
  return (
    <div className="minecraft-inventory-box">
      <h3 className="minecraft-subtitle">Inventory</h3>
      <ul className="minecraft-list">
        {inventory.map((item, index) => (
          <li className="minecraft-item" key={index}>
            {item.name} x {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Inventory;