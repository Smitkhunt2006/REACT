import React from 'react'
import { Link, useNavigate } from "react-router-dom";
export default function Canada() {
 // const navigate = useNavigate();
 return (
  <>
  <div>
    <Link className="btn btn-info mx-4" to="/HotelDetails" >Back</Link>
    <Link to="/room/add" className="btn btn-primary">Booking Now</Link>
  </div>

  <br />

  <div>
  <section id="rooms" className="py-5 bg-light">
      <div>
      <div className="container">
        <h2 className="text-center mb-5"><u>Canada Hotel</u></h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <img src="https://www.momondo.in/rimg/himg/64/e3/2c/expedia_group-16672-8427e6-938060.jpg?width=968&height=607&crop=true" className="card-img-top" alt="Room 1" />
              <div className="card-body">
                <h5 className="card-title">Deluxe Room</h5>
                <p className="card-text">Experience comfort and style in our deluxe rooms with a city view.</p>
                <a href="/room/add" className="btn btn-primary">BOOK NOW</a>
              </div>
            </div>
          </div>
      </div>

      <br />
      <hr/>
      <br />

      <div>
      <div className="col-md-4">
            <div className="card shadow-sm">
              <img src="https://image-tc.galaxy.tf/wijpeg-8ncxjl009abgs25xovml7by60/executive-suite-living-room-1920-x-1080_wide.jpg?crop=0%2C0%2C1920%2C1080&width=1200" className="card-img-top" alt="Room 2" />
              <div className="card-body">
                <h5 className="card-title">Executive Suite</h5>
                <p className="card-text">Stay in luxury with our spacious executive suites featuring modern decor.</p>
                <a href="/room/add" className="btn btn-primary">BOOK NOW</a>
              </div>
            </div>
          </div>
      </div>

      <br />
      <hr/>
      <br />

      <div>
      <div className="col-md-4">
            <div className="card shadow-sm">
              <img src="https://www.thetranshotel.com/images/editor/images/presidential2.jpg" className="card" alt="Room 3" />
              <div className="card-body">
                <h5 className="card-title">Presidential Suite</h5>
                <p className="card-text">Indulge in our prestigious presidential suite, offering the best in comfort.</p>
                <a href="/room/add" className="btn btn-primary">BOOK NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <br />
      <hr/>


    </section>

  </div>
  
  </>
  )
}
