import { useEffect, useState } from "react";
import BillGates from "./components/bill-gates/BillGates";
import Amount from "./components/amount";
import Product from "./components/product/Product";
import data from "./data/data.json";
import "./App.css";
import Receipt from "./components/receipt/Receipt";

function App() {
  const [money, setMoney] = useState(100000000000); 
  const [receipt, setReceipt] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      receipt.reduce((acc, item) => {
        const product = data.find((product) => product.id === item.id);
        return acc + item.amount * (product?.price || 0);
      }, 0)
    );
  }, [receipt]);

  useEffect(() => {
    setMoney(100000000000 - total);
  }, [total]);

  return (
    <>
      <BillGates />
      <Amount total={total} money={money} />
      <div className="card-container">
        <div className="cards">
          {data.map((product) => (
            <Product
              key={product.id}
              data={product}
              receipt={receipt}
              setReceipt={setReceipt}
              money={money}
            />
          ))}
        </div>
      </div>
      {/* Only render the Receipt if money has been spent (total > 0) */}
      {total > 0 && <Receipt receipt={receipt} data={data} />}
    </>
  );
}

export default App;
