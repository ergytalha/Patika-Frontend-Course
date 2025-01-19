import './style.css';

function Amount({ money, total }) {

  if (total <= 0 && money <= 0) return null; 

  return (
    <div className="amount-div">
      <h1 className="amount">${money.toLocaleString()}</h1>
    </div>
  );
}

export default Amount;
