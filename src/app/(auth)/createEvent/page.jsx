"use client"
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateEventScreen = () => {
  const [currentScreen, setCurrentScreen] = useState("Create Event");

  const renderScreen = () => {
    switch (currentScreen) {
      case "Create Event":
        return (
          <div>
            <h2 className="fw-bold text-center mb-4">Create Event</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label fw-semibold">
                  Event Title
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="title"
                  placeholder="Enter the event title"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label fw-semibold">
                  Description
                </label>
                <textarea
                  className="form-control form-control-lg"
                  id="description"
                  rows="4"
                  placeholder="Enter a brief description of the event"
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label fw-semibold">
                  Event Date
                </label>
                <input
                  type="date"
                  className="form-control form-control-lg"
                  id="date"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="time" className="form-label fw-semibold">
                  Event Time
                </label>
                <input
                  type="time"
                  className="form-control form-control-lg"
                  id="time"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="venue" className="form-label fw-semibold">
                  Venue
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="venue"
                  placeholder="Enter the venue"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label fw-semibold">
                  Category
                </label>
                <select className="form-select form-select-lg" id="category" required>
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="Conference">Conference</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Meetup">Meetup</option>
                  <option value="Webinar">Webinar</option>
                  <option value="Social Event">Social Event</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary btn-lg w-100 mt-3 fw-bold">
                Create Event
              </button>
            </form>
          </div>
        );
      case "All Events":
        return (
          <div>
            <h2 className="fw-bold text-center mb-4">All Events</h2>
            <p className="text-center">Display all events here...</p>
          </div>
        );
      case "My Events":
        return (
          <div>
            <h2 className="fw-bold text-center mb-4">My Events</h2>
            <p className="text-center">Display events created by the user...</p>
          </div>
        );
      case "Profile":
        return (
          <div>
            <h2 className="fw-bold text-center mb-4">Profile</h2>
            <p className="text-center">Display user profile details...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="d-flex justify-content-around mb-4">
            <button
              className={`btn ${currentScreen === "Create Event" ? "btn-primary" : "btn-outline-primary"} btn-lg`}
              onClick={() => setCurrentScreen("Create Event")}
            >
              Create Event
            </button>
            <button
              className={`btn ${currentScreen === "All Events" ? "btn-primary" : "btn-outline-primary"} btn-lg`}
              onClick={() => setCurrentScreen("All Events")}
            >
              All Events
            </button>
            <button
              className={`btn ${currentScreen === "My Events" ? "btn-primary" : "btn-outline-primary"} btn-lg`}
              onClick={() => setCurrentScreen("My Events")}
            >
              My Events
            </button>
            <button
              className={`btn ${currentScreen === "Profile" ? "btn-primary" : "btn-outline-primary"} btn-lg`}
              onClick={() => setCurrentScreen("Profile")}
            >
              Profile
            </button>
          </div>
          <div className="card shadow-lg border-0 rounded-lg p-4">
            {renderScreen()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEventScreen;
