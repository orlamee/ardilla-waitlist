import liner from "../img/liner.svg";

function Banner() {
  return (
    <div className="banner" id="home">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h2>Your portal to more</h2>
            <img src={liner} alt="liner" className="img-fluid" style={{marginLeft: "55px", marginTop: "-30px"}} />
            <h6 className="my-5">Wealth building is possible. You just need the right partner. With better financial tools, Ardilla has made it so much easier for you to start building wealth. Take advantage of the Ardilla platform by signing up with your email address.</h6>
            <div className="row height d-flex justify-content-center align-items-center">
              <div className="col">
                <div className="search">
                  <input type="email" className="form-control" placeholder="someone@example.com"/>
                  <button className="btn btn-primary">Access More <i className="bi bi-caret-right-fill ms-3"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
