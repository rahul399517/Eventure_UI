"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import eventillustration from "@/app/images/eventillustration.png";
import Image from "next/image";
import concert from "@/app/images/concert.webp";
import Navbar from "@/app/header/page";
const CreateEventPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Navbar */}
    <Navbar/>

      {/* Main Content */}
      <main className="flex-grow-1 py-2">
        <div className="m-1">
          <div className="row">
            {/* Left Section */}
            <div className="col-lg-3 mb-4">
              <div className="bg-gray text-Black p-4 rounded-3 shadow-sm" style={{height:"640px"}}>
                <h3 className="fw-bold">Popular Online Events</h3>
                <p className="mt-3">
                  Being an avid event-goer isn't something you have to give up. Learn new skills, participate in group activities, and host beautiful online or offline events.
                </p>
                <div className="text-center">
                  <Image
                    src={eventillustration}
                    alt="Event Illustration"
                    className="img-fluid mt-3"
                    style={{ borderRadius: "5px" ,height:"400px"}}
                    width={400}
                    height={600}
                  />
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-lg-6">
              <div className="card shadow-lg border-0 rounded-lg">
                <div className="card-header bg-white text-dark text-center py-3">
                  <h4 className="fw-bold mb-0">Create Your Event</h4>
                  <p className="text-muted mb-0">Plan and manage your events with ease</p>
                </div>
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="eventTitle" className="form-label fw-semibold">
                        Event Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="eventTitle"
                        placeholder="Enter event name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="eventCategory" className="form-label fw-semibold">
                        Category
                      </label>
                      <select
                        className="form-select form-select-lg"
                        id="eventCategory"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Select category
                        </option>
                        <option value="conference">Conference</option>
                        <option value="webinar">Webinar</option>
                        <option value="workshop">Workshop</option>
                        <option value="party">Party</option>
                      </select>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="eventStartDate" className="form-label fw-semibold">
                          Start Date
                        </label>
                        <input
                          type="date"
                          className="form-control form-control-lg"
                          id="eventStartDate"
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="eventEndDate" className="form-label fw-semibold">
                          End Date
                        </label>
                        <input
                          type="date"
                          className="form-control form-control-lg"
                          id="eventEndDate"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="eventDescription" className="form-label fw-semibold">
                        Description
                      </label>
                      <textarea
                        className="form-control form-control-lg"
                        id="eventDescription"
                        rows="4"
                        placeholder="Enter event description"
                        required
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-lg"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                      >
                        Continue
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="card shadow-lg border-0 rounded-lg">
                <div
                  className="bg-light p-4 rounded-3 shadow-sm"
                  style={{ height: "640px", overflow: "auto", scrollbarWidth: "thin" }}
                >
                  <h3 className="fw-bold text-center">Live Public Events</h3>
                  <p className="text-center text-muted">
                    Discover exciting events happening right now! Join and explore to connect with others.
                  </p>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Search for public events"
                    />
                  </div>
                  <div className="row g-3">
  {[1, 2, 3, 4].map((event) => (
    <div className="col-md-12" key={event}>
      <div className="card shadow-sm border-0 h-100" style={{ borderRadius: "15px" }}>
        <div className="position-relative">
          <Image
            src={concert}
            alt={`Event ${event}`}
            className="card-img-top"
            style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px", height: "180px", objectFit: "cover" }}
          />
          <div
            className="position-absolute top-0 start-0 bg-white text-dark p-2 fw-bold"
            style={{
              borderBottomRightRadius: "8px",
              fontSize: "14px",
            }}
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
          <h5 className="fw-bold">Music in the Park</h5>
          <p className="text-muted mb-2">Summer Concert Series</p>
          <p className="text-muted small mb-2">
            <i className="bi bi-geo-alt-fill"></i> Central Park, NYC
          </p>
          <div className="d-flex align-items-center mb-3">
            {[...Array(5)].map((_, index) => (
              <Image
                key={index}
                src={concert}
                alt="Attendee"
                className="rounded-circle me-1"
                style={{ width: "25px", height: "25px" }}
              />
            ))}
            <span className="small text-muted ms-2">+1k Going</span>
          </div>
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
              </div>
            </div>
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

export default CreateEventPage;
