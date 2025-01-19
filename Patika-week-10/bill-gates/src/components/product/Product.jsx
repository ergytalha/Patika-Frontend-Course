import "./style.css";

function Product({ data, receipt, setReceipt, money }) {
  const receiptItem = receipt.find((item) => item.id === data.id);

  const handleBuy = () => {
    const canAfford = money >= data.price;
    if (!canAfford) {
      alert("Insufficient funds!");
      return;
    }

    if (receiptItem) {
      receiptItem.amount += 1;
      setReceipt([...receipt.filter((item) => item.id !== data.id), receiptItem]);
    } else {
      setReceipt([
        ...receipt,
        {
          id: data.id,
          amount: 1,
        },
      ]);
    }
  };

  const handleSell = () => {
    if (!receiptItem || receiptItem.amount === 0) return;

    const updatedReceipt = receipt.map((item) =>
      item.id === data.id
        ? { ...item, amount: item.amount - 1 }
        : item
    );

    if (receiptItem.amount === 1) {
      setReceipt(updatedReceipt.filter((item) => item.amount > 0));
    } else {
      setReceipt(updatedReceipt);
    }
  };

  const handleChangeAmount = (e) => {
    const newAmount = Number(e.target.value);
    const difference = newAmount - (receiptItem ? receiptItem.amount : 0);


    if (newAmount >= 0) {
      if (receiptItem) {
        receiptItem.amount = newAmount;
        setReceipt([...receipt.filter((item) => item.id !== data.id), receiptItem]);
      } else {
        setReceipt([
          ...receipt,
          {
            id: data.id,
            amount: newAmount,
          },
        ]);
      }
    }
  };

  return (
    <div className="card">
      <img src={data.img} alt={data.name} />
      <h3>{data.name}</h3>
      <h6>${data.price}</h6>
      <div className="btn-content">
        <button disabled={!receiptItem} onClick={handleSell} className="btn btn-sell">
          Sell
        </button>
        <input
          type="number"
          className="item-input"
          value={receiptItem ? receiptItem.amount : 0}
          onChange={handleChangeAmount}
          min="0"
        />
        <button onClick={handleBuy} className="btn btn-buy">
          Buy
        </button>
      </div>
    </div>
  );
}

export default Product;
