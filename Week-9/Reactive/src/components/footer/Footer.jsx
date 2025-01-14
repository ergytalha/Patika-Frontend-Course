import './footer.css'
import Logo from '../../assets/images/logo.png'

const Footer = () => { 
    return ( 
        <>
          <footer>
      <div className="container">
        <div className="footer-top">
          <img src={Logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quod, quae, voluptate, voluptas quia quibusdam
            voluptatibus quos doloribus quidem fugiat. Quisquam voluptatum,
            quod, quae, voluptate, voluptas quia quibusdam voluptatibus quos
            doloribus quidem fugiat.
          </p>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <h3>Information</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">classNamees</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-bottom-content">
            <h3>Helpful Links</h3>
            <ul>
              <li><a href="#">Services</a></li>
              <li><a href="#">Supports</a></li>
              <li><a href="#">Terms & Condition</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
        </>
    )
}

export default Footer;