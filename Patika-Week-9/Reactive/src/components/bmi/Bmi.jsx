import React, { useState, useEffect } from "react";
import "./bmi.css";
import bmiIMG from "../../assets/images/bmi-index.jpg";

const Bmi = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    const calculateBMI = () => {
      if (height > 0 && weight > 0) {
        const heightInMeters = height / 100;
        const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
        setBmi(calculatedBmi);

        if (calculatedBmi < 18.5) {
          setActiveCategory("underweight");
        } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
          setActiveCategory("normal");
        } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
          setActiveCategory("overweight");
        } else if (calculatedBmi >= 30 && calculatedBmi <= 34.9) {
          setActiveCategory("obese");
        } else {
          setActiveCategory("extremely-obese");
        }
      } else {
        setBmi(null);
        setActiveCategory("");
      }
    };

    calculateBMI();
  }, [height, weight]);

  return (
    <>
      <section id="bmi-calculator">
        <div className="container">
          <div className="bmi-content">
            <div className="bmi-text">
              <h3>BMI Calculator</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, quam quae qui veritatis ut enim placeat dolore.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab a
                dignissimos, quia odio placeat, maxime quo accusamus neque
                quisquam impedit.
              </p>
              <div className="bmi-input">
                <input
                  type="number"
                  placeholder="Your Height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
                <span>cm</span>
                <input
                  type="number"
                  placeholder="Your Weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
                <span>kg</span>
              </div>
            </div>
            <div className="bmi-img">
              <h3 className="bmi-result">
                Your BMI
                <p id="bmi-result">{bmi !== null ? bmi : "--"}</p>
              </h3>
              <img src={bmiIMG} alt="BMI Index" />
              <div className="bmi-arrows">
                <span
                  className={`bmi-arrow1 ${activeCategory === "underweight" ? "active" : ""}`}
                  id="underweight"
                ></span>
                <span
                  className={`bmi-arrow2 ${activeCategory === "normal" ? "active" : ""}`}
                  id="normal"
                ></span>
                <span
                  className={`bmi-arrow3 ${activeCategory === "overweight" ? "active" : ""}`}
                  id="overweight"
                ></span>
                <span
                  className={`bmi-arrow4 ${activeCategory === "obese" ? "active" : ""}`}
                  id="obese"
                ></span>
                <span
                  className={`bmi-arrow5 ${activeCategory === "extremely-obese" ? "active" : ""}`}
                  id="extremely-obese"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bmi;