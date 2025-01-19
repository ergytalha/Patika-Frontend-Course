import './style.css';

function Receipt({ receipt, data }) {

  if (receipt.length === 0) return null;

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
