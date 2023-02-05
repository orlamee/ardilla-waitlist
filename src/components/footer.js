import { Link } from "react-router-dom";
import fb from "../img/fb.svg";
import insta from "../img/in.svg";
import tw from "../img/tw.svg";

function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <p>© 2023 Ardilla. All right reserved</p>
          </div>
          <div className="col-md-2">
            <div className="d-flex flex-row">
              <Link to="/"><img src={fb} alt="facebook" className="img-fluid me-3" title="Follow us on Facebook" /></Link>
              <Link to="/"><img src={tw} alt="facebook" className="img-fluid me-3" title="Follow us on Instagram" /></Link>
              <Link to="/"><img src={insta} alt="facebook" className="img-fluid me-3" title="Follow us on Twitter" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;