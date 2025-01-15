import './contact.css'

const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="head">
            <h2>CONTACT US</h2>
            <hr />
            <p>
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classNameical at Hampden-Sydney College.
            </p>
          </div>
          <div className="contact-content">
            <div className="contact-left">
              <div className="contact-info">
                <div className="contact-box">
                  <h3>Mobile Number</h3>
                  <p>+135 773 321 4442</p>
                </div>
                <div className="contact-box">
                  <h3>Email Address</h3>
                  <p>info@fitness.com</p>
                </div>
              </div>
              <div className="contact-form">
                <h3>Make An Appoinment</h3>
                <form action="">
                  <input
                    className="form-input"
                    type="name"
                    placeholder="Your Name"
                  />
                  <input
                    className="form-input"
                    type="name"
                    placeholder="Your Email"
                  />
                  <textarea
                    className="form-input"
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </form>
              </div>
            </div>
            <div className="contact-right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.1781513215647!2d-70.5610013833202!3d41.45498955260397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1str!2str!4v1735586218085!5m2!1str!2str"
                width="600"
                height="470"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
