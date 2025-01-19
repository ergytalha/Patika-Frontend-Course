import './style.css';

function ReceiptItem({ item, product }) {
  const totalPrice = item.amount * product.price;

  return (
    <div className="receipt-item">
      <span>{product.name}</span> x {item.amount} <span>${totalPrice.toLocaleString()}</span>
    </div>
  );
}

export default ReceiptItem;
