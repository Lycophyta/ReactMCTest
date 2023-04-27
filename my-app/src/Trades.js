import React from 'react';
import Inventory from './Inventory';

function Trades({ trades, handleTrade }) {
  return (
    <div className="minecraft-trades-box">
      <h3 className="minecraft-subtitle">Trades</h3>
      {trades.map((trade, index) => (
        <div className="minecraft-trade" key={index}>
          <p className="minecraft-trade-text">
            {trade.input} x {trade.amount} → {trade.output}
          </p>
          <button
            className="minecraft-trade-button"
            onClick={() => handleTrade(trade)}
          >
            Trade
          </button>
        </div>
      ))}
    </div>
  );
}

export default Trades;
