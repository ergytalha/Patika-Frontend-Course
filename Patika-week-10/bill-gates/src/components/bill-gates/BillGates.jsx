import './style.css'
import bill from '../..//assets/billgates.jpg'

function BillGates() {
  return (
    <>
    <div className="container info-content">
        <img src={bill} alt="" className="bill-img" />
        <h1> Spend Bill Gates Money </h1>
        </div>
    </>
  )
}

export default BillGates