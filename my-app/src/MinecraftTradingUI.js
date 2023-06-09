import React, { useState } from 'react';
import './MinecraftTradingUI.css';
import Inventory from './Inventory';
import Trades from './Trades';

function MinecraftTradingUI() {
  const [showInventory, setShowInventory] = useState(true);
  const [showTrades, setShowTrades] = useState(true);
  const [inventory, setInventory] = useState([
    { name: 'Diamond Sword', quantity: 1 },
    { name: 'Golden Apple', quantity: 5 },
    { name: 'Iron Ingot', quantity: 32 },
    { name: 'Redstone Dust', quantity: 64 },
    { name: 'Wheat', quantity: 64 },
    { name: 'Diamond', quantity: 0 },
    { name: 'Enchanted Book', quantity: 0 },
  ]); // starting inventory items
  const [trades, setTrades] = useState([
    { input: 'Wheat', output: 'Emerald', amount: 20 },
    { input: 'Emerald', output: 'Diamond', amount: 1 },
    { input: 'Diamond', output: 'Enchanted Book', amount: 1 },
  ]); // starting list of trades

  const checkInventory = (inputItem) => {
    // check if the player has enough input items for the trade
    const item = inventory.find((item) => item.name === inputItem);
    if (!item || item.quantity < 1) {
      console.error(`Not enough ${inputItem}!`);
      return false;
    }
    return true;
  };

  const handleTrade = (trade) => {
  // check if the player has enough input items for the trade
  if (!checkInventory(trade.input)) {
    return;
  }

  // perform the trade by removing the input item and adding the output item
  setInventory((inv) =>
    inv.map((item) =>
      item.name === trade.input
        ? { ...item, quantity: item.quantity - trade.amount }
        : item
    )
  );

  // Define the output item before the animation
  const outputItem = trades.find((t) => t.input === trade.input).output;

  // Play the animation and update the inventory after a delay
  setShowAnimation(true);
  setTimeout(() => {
    setShowAnimation(false);
    setInventory((inv) =>
      inv.find((item) => item.name === outputItem)
        ? inv.map((item) =>
            item.name === outputItem
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...inv, { name: outputItem, quantity: 1 }]
    );
  }, 1000);
};

  return (
    <div className="minecraft-trading-ui-container">
      <div className="minecraft-trading-ui">
        <h2 className="minecraft-title">Minecraft Trading UI</h2>
        <div className="minecraft-buttons">
          <button className="minecraft-toggle" onClick={toggleInventory}>
            {showInventory ? 'Hide Inventory' : 'Show Inventory'}
          </button>
          <button className="minecraft-toggle" onClick={toggleTrades}>
            {showTrades ? 'Hide Trades' : 'Show Trades'}
          </button>
        </div>
        <div className="minecraft-content">
          <div className="minecraft-inventory-container">
            {showInventory && <Inventory inventory={inventory} />}
          </div>
          <div className="minecraft-trades-container">
            {showTrades && (
              <Trades trades={trades} handleTrade={handleTrade} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MinecraftTradingUI;