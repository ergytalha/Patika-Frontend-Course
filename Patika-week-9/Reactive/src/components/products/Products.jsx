import './products.css'


import Product1 from '../../assets/images/purchase1.jpg'
import Product2 from '../../assets/images/purchase2.jpg'
import Product3 from '../../assets/images/purchase3.jpg'
import Product4 from '../../assets/images/purchase4.jpg'


const Products = () => {
  return (
    <>
      <section id="products">
        <div className="container">
          <div className="head">
            <h2>PURCHASE FROM US</h2>
            <hr />
            <p>
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classNameical at Hampden-Sydney College.
            </p>
          </div>
          <div className="products-content">
            <div className="product">
              <img src={Product1} alt="" />
              <div className="product-content">
                <h3>Kettlebell / 5kg</h3>
                <h4>
                  <span> 89,99$ </span> / 59,99
                </h4>
                <a href="#" className="product-btn">
                  <i className="bi bi-cart-fill"></i> Add To Cart
                </a>
              </div>
            </div>
            <div className="product">
            <img src={Product2} alt="" />
              <div className="product-content">
                <h3>Kettlebell / 5kg</h3>
                <h4>
                  <span> 89,99$ </span> / 59,99
                </h4>
                <a href="#" className="product-btn">
                  <i className="bi bi-cart-fill"></i> Add To Cart
                </a>
              </div>
            </div>
            <div className="product">
            <img src={Product3} alt="" />
              <div className="product-content">
                <h3>Kettlebell / 5kg</h3>
                <h4>
                  <span> 89,99$ </span> / 59,99
                </h4>
                <a href="#" className="product-btn">
                  <i className="bi bi-cart-fill"></i> Add To Cart
                </a>
              </div>
            </div>
            <div className="product">
            <img src={Product4} alt="" />
              <div className="product-content">
                <h3>Kettlebell / 5kg</h3>
                <h4>
                  <span> 89,99$ </span> / 59,99
                </h4>
                <a href="#" className="product-btn">
                  <i className="bi bi-cart-fill"></i> Add To Cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
