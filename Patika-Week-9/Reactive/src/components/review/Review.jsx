import './review.css'


import client1 from '../../assets/images/client1.jpg'
import client2 from '../../assets/images/client2.jpg'

const Review = () => { 
    return (
        <>
              <section id="review">
      <div className="container">
        <div className="head">
          <h2>REVIEW CLIENT</h2>
          <hr />
          <p>
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classNameical at Hampden-Sydney College.
          </p>
        </div>
        <div className="review-container">
          <div className="review">
            <div className="review-head">
              <img src={client1} alt="" />
              <div className="review-head-content">
                <h2>Diet Expert</h2>
                <h3>CFO</h3>
              </div>
            </div>
            <div className="review-footer">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia, eos a velit, nulla saepe, expedita provident quisquam
                neque fuga laboriosam facere ipsam! Quam quia dolores veniam
                fuga, soluta ipsum magni.
              </p>
              <div className="review-footer-shape-1"></div>
              <div className="review-footer-shape-2"></div>
            </div>
          </div>
          <div className="review">
            <div className="review-head">
            <img src={client2} alt="" />
              <div className="review-head-content">
                <h2>Cardio Trainer</h2>
                <h3>CEO</h3>
              </div>
            </div>
            <div className="review-footer">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                dolores voluptatum aliquid quidem quaerat asperiores architecto
                ratione. Magni cum praesentium fuga voluptatem eius sunt
                quibusdam tenetur! Labore eveniet nobis illum.
              </p>
              <div className="review-footer-shape-1"></div>
              <div className="review-footer-shape-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default Review;