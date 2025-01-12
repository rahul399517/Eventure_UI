"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import concert from "@/app/images/concert.webp";
import Image from "next/image";
import Navbar from "@/app/header/page";

const MyEventsPage = () => {
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
          <h2 className="fw-bold text-center mb-4">My Events</h2>
          <p className="text-center text-muted mb-4">
            Manage the events you've created or joined.
          </p>

          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search my events"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          {/* Created Events Section */}
          <h3 className="fw-bold mb-3">Created Events</h3>
          <div className="row g-4 mb-5">
            {[1, 2, 3].map((event) => (
              <div className="col-lg-4 col-md-6" key={event}>
                <div className="card shadow-sm border-0 h-100" style={{ borderRadius: "15px" }}>
                  <div className="position-relative">
                    <Image
                      src={concert}
                      alt={`Created Event ${event}`}
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
                      <span>15</span> <br /> MAR
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="fw-bold">Created Event {event}</h5>
                    <p className="text-muted mb-2">Your custom event details.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <button className="btn btn-outline-primary btn-sm">Edit</button>
                      <button className="btn btn-danger btn-sm">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Joined Events Section */}
          <h3 className="fw-bold mb-3">Joined Events</h3>
          <div className="row g-4">
            {[1, 2, 3].map((event) => (
              <div className="col-lg-4 col-md-6" key={event}>
                <div className="card shadow-sm border-0 h-100" style={{ borderRadius: "15px" }}>
                  <div className="position-relative">
                    <Image
                      src={concert}
                      alt={`Joined Event ${event}`}
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
                      <span>20</span> <br /> APR
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="fw-bold">Joined Event {event}</h5>
                    <p className="text-muted mb-2">Exciting event you joined.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <button className="btn btn-primary btn-sm">View Details</button>
                      <button className="btn btn-outline-danger btn-sm">Leave</button>
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

export default MyEventsPage;
