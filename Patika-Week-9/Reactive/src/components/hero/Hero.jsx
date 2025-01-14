import './hero.css'

const Hero = () => { 
    return ( 
      <div>
        <section id="hero">
        <div className="container hero-content">
          <span className="badge">POWERFULL</span>
          <h1>
            Group <br />
            Practice <br />
            With Trainer
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione totam
            itaque odio nulla incidunt perferendis, placeat eum aliquam? Nam
            ratione optio maxime quos, eveniet ipsam sunt tempora? Eaque, fuga.
            Harum cumque obcaecati veniam atque suscipit soluta assumenda eos
            facere voluptate exercitationem
          </p>
          <div className="btn-group">
            <a href="#">Sign Up</a>
            <a href="#">Details</a>
          </div>
        </div>
      </section>
        <section id="stats">
        <div className="container">
          <div className="hero-stats">
            <div className="stats">
              <span>325</span>
              <h3>Course</h3>
            </div>
            <div className="stats">
              <span>405</span>
              <h3>Workout</h3>
            </div>
            <div className="stats">
              <span>305</span>
              <h3>Working Hour</h3>
            </div>
            <div className="stats">
              <span>705</span>
              <h3>Happy Client</h3>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
}

export default Hero; 