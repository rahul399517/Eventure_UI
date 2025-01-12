"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import concert from "@/app/images/concert.webp";
import concert1 from "@/app/images/concert1.jpg";
import concert2 from "@/app/images/concert2.jpg";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from "@/app/header/page";

const AllEventsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Navbar */}
    <Navbar/>

      {/* Main Content */}
      <main className="flex-grow-1 py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">All Events</h2>
          <p className="text-center text-muted mb-4">
            Explore a variety of events happening near you and around the world.
          </p>

          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search for events"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          {/* Live Events Section */}
          <h3 className="fw-bold mb-3">Live Events</h3>
          <div id="liveEventsCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
            <div className="carousel-inner">
              {[1, 2, 3].map((event, index) => (
                <div
                  key={event}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="card shadow-sm border-0 h-100 mx-auto" style={{ width: "100%", borderRadius: "15px" }}>
                    <div className="position-relative">
                      <Image
                        src={concert1}
                        alt={`Live Event ${event}`}
                        className="card-img-top"
                        style={{
                          borderTopLeftRadius: "15px",
                          borderTopRightRadius: "15px",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                      <div
                        className="position-absolute top-0 start-0 bg-white text-dark p-2 fw-bold"
                        style={{ borderBottomRightRadius: "8px", fontSize: "14px" }}
                      >
                        <span>01</span> <br /> JAN
                      </div>
                      <div
                        className="position-absolute top-0 end-0 me-2 mt-2"
                        style={{
                          width: "10px",
                          height: "10px",
                          backgroundColor: "red",
                          borderRadius: "50%",
                          animation: "blink 1s infinite",
                        }}
                      ></div>
                    </div>
                    <div className="card-body">
                      <h5 className="fw-bold">Live Event {event}</h5>
                      <p className="text-muted mb-2">Happening Now</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fw-bold">$99.99</span>
                        <button className="btn btn-primary btn-sm">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#liveEventsCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#liveEventsCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* Upcoming Events Section */}
          <h3 className="fw-bold mb-3">Upcoming Public Events</h3>
          <div className="row g-4">
            {[1, 2, 3, 4, 5, 6].map((event) => (
              <div className="col-lg-4 col-md-6" key={event}>
                <div className="card shadow-sm border-0 h-100" style={{ borderRadius: "15px" }}>
                  <div className="position-relative">
                    <Image
                      src={concert2}
                      alt={`Upcoming Event ${event}`}
                      className="card-img-top"
                      style={{
                        borderTopLeftRadius: "15px",
                        borderTopRightRadius: "15px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <div
                      className="position-absolute top-0 start-0 bg-white text-dark p-2 fw-bold"
                      style={{ borderBottomRightRadius: "8px", fontSize: "14px" }}
                    >
                      <span>01</span> <br /> FEB
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="fw-bold">Upcoming Event {event}</h5>
                    <p className="text-muted mb-2">Exciting Event Details</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold">$99.99</span>
                      <button className="btn btn-primary btn-sm">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p className="mb-0">&copy; {new Date().getFullYear()} EventManager. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AllEventsPage;
