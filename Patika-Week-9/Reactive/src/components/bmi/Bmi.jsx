import './bmi.css'
import bmiIMG from '../../assets/images/bmi-index.jpg'

const Bmi = () => {
  return (
    <>
      <section id="bmi-calculator">
        <div className="container">
          <div className="bmi-content">
            <div className="bmi-text">
              <h3>BMI Calculator</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, quam quae qui veritatis ut enim placeat dolore. Odio
                officia, dicta error facere voluptatem vel? Nam tempora possimus
                eum tenetur error?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a
                dignissimos, quia odio placeat, maxime quo accusamus neque
                quisquam impedit dicta velit eum eveniet facilis eligendi sapiente
                nesciunt ex corrupti.
              </p>
              <div className="bmi-input">
                <input id="height" type="number" placeholder="Your Height" />
                <span>cm</span>
                <input id="weight" type="number" placeholder="Your Weight" />
                <span>kg</span>
              </div>
            </div>
            <div className="bmi-img">
              <h3 className="bmi-result">
                Your BMI
                <p id="bmi-result"></p>
              </h3>

              <img src={bmiIMG} alt="" />
              <div className="bmi-arrows">
                <span className="bmi-arrow1" id="underweight"></span>
                <span className="bmi-arrow2" id="normal"></span>
                <span className="bmi-arrow3" id="overweight"></span>
                <span className="bmi-arrow4" id="obese"></span>
                <span className="bmi-arrow5" id="extremely-obese"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Bmi; 