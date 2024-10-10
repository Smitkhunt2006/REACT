import React from 'react';

function Home() {
  return (  
    <div>
        
      {/* Hero Section */}
      <header className="hero text-center" style={{ background: "url('https://example.com/hotel.jpg') center center/cover no-repeat", height: "30vh", color: "black" }}>
        <div className="container d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
          <div>
            <h1 className="display-4 fw-bold">Welcome to Luxury Hotel</h1>
            <p className="lead">Experience unparalleled comfort and luxury at our 5-star hotel.</p>
            <a href="/HotelDetails" className="btn btn-outline-primary btn-lg">Book Now</a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5"><u>Our Services</u></h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://mybeautifuladventures.com/wp-content/uploads/2018/06/Airport-Transfer-Service.jpeg" className="card-img-top" alt="Transports" />
                <div className="card-body">
                  <h5 className="card-title">Transports Service</h5>
                  <p className="card-text">Relax and rejuvenate with our world-class Transportion services.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://www.marinabaysands.com/content/dam/marinabaysands/restaurant-categories/fine-dining/fine-dining-1920x1080-1.jpg" className="card-img-top" alt="Restaurant" />
                <div className="card-body">
                  <h5 className="card-title">Resturant Facilities</h5>
                  <p className="card-text">Enjoy gourmet meals prepared by our top chefs in a luxurious setting.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/SkyPark_Infinity_Pool_%28view_from_deckchair%29.jpg/1200px-SkyPark_Infinity_Pool_%28view_from_deckchair%29.jpg" className="card-img-top" alt="Pool" />
                <div className="card-body">
                  <h5 className="card-title">Infinity Pool</h5>
                  <p className="card-text">Take a dip in our stunning infinity pool overlooking the city skyline.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://images.squarespace-cdn.com/content/v1/5696733025981d28a35ef8ab/954e09df-1889-4c41-906d-e857673711d9/new+123+1.jpg" className="card-img-top" alt="Room 2" />
                <div className="card-body">
                  <h5 className="card-title">Fitness Facilities</h5>
                  <p className="card-text"> Hotels may have a fitness center or gym.</p>  
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://www.uctoday.com/wp-content/uploads/2024/04/How-to-Compare-Conference-Room-Management-Technology.jpeg" className="card-img-top" alt="Room 2" />
                <div className="card-body">
                  <h5 className="card-title">Meeting Area</h5>
                  <p className="card-text"> Hotels may have a Meeting Area</p>  
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://cdn.sanity.io/images/4tunwi1p/production/5e49f58fb95f10471a963957eabbd80fb6a8d95b-2560x1707.jpg?w=1600&h=1067&auto=format" className="card-img-top" alt="Room 2" />
                <div className="card-body">
                  <h5 className="card-title">Garden Facilities</h5>
                  <p className="card-text"> Hotels may have a Garden Facilities.</p>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Showcase Section */}
      <section id="rooms" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5"><u>Our Rooms</u></h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://www.momondo.in/rimg/himg/64/e3/2c/expedia_group-16672-8427e6-938060.jpg?width=968&height=607&crop=true" className="card-img-top" alt="Room 1" />
                <div className="card-body">
                  <h5 className="card-title">Deluxe Room</h5>
                  <p className="card-text">Experience comfort and style in our deluxe rooms with a city view.</p>
                  <a href="#" className="btn btn-primary">View Details</a>
                </div>
              </div>
            </div>
  
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://image-tc.galaxy.tf/wijpeg-8ncxjl009abgs25xovml7by60/executive-suite-living-room-1920-x-1080_wide.jpg?crop=0%2C0%2C1920%2C1080&width=1200" className="card-img-top" alt="Room 2" />
                <div className="card-body">
                  <h5 className="card-title">Executive Suite</h5>
                  <p className="card-text">Stay in luxury with our spacious executive suites featuring modern decor.</p>
                  <a href="#" className="btn btn-primary">View Details</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img src="https://www.thetranshotel.com/images/editor/images/presidential2.jpg" className="card-img-top" alt="Room 3" />
                <div className="card-body">
                  <h5 className="card-title">Presidential Suite</h5>
                  <p className="card-text">Indulge in our prestigious presidential suite, offering the best in comfort.</p>
                  <a href="#" className="btn btn-primary">View Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://assets.kerzner.com/api/public/content/434185142a3644718cad792aff117d47?v=64ffc60c&t=w2880" className="img-fluid" alt="Hotel" />
            </div>
            <div className="col-md-6">
              <h2>About Our Hotel</h2>
              <p>Welcome to Luxury Hotel, where comfort meets elegance. Our hotel offers an unforgettable experience
                with world-class amenities, exceptional service, and luxurious accommodations.</p>
              <p>Located in the heart of the city, we are committed to providing our guests with the ultimate
                hospitality experience.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p>&copy; 2024 Luxury Hotel. All rights reserved.</p>
          <p>123 Hotel Ave, New York, NY 10001 | Phone: +1 234 567 890 | Email: info@luxuryhotel.com</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
