import './style.css';

function Receipt({ receipt, data }) {
  // Only show the receipt if money is spent (i.e., total is greater than 0)
  if (receipt.length === 0) return null; // Hide if no items are bought

  return (
    <div className="receipt-container">
      <h2>Your Receipt</h2>
      {receipt.map((item) => (
        <div key={item.id}>
          {data.find((p) => p.id === item.id)?.name} x {item.amount} 
          - ${data.find((p) => p.id === item.id)?.price * item.amount}
        </div>
      ))}
      <h3>Total: ${receipt.reduce((acc, item) => {
        const product = data.find(p => p.id === item.id);
        return acc + item.amount * (product?.price || 0);
      }, 0).toLocaleString()}</h3>
    </div>
  );
}

export default Receipt;
