import features from "../img/feat.svg";

function Features() {
  return (
    <div className="features mt-5" id="features">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={features} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="row top">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <div className="feats">
                      <h2>Access to more financial tools</h2>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <div className="feats two">
                      <h2>More investment opportunities</h2>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <div className="feats three">
                      <h2>More<br/>Savings</h2>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <div className="feats four">
                      <h2>Join a passionate wealth building community</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <div className="feats five">
                      <h2>Free financial advice from vetted financial coaches</h2>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <div className="feats six">
                      <h2 style={{color: "#019A34"}}>Build wealth without compromising your belief</h2>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <div className="feats seven">
                      <h2>Pro budgeting<br/>guide</h2>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <div className="feats eight">
                      <h2>Get your unique<br/>San ID</h2>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
