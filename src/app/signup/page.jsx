"use client"
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
const SignupPage = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7 col-sm-10">
            <div className="card shadow-lg border-0 rounded-lg">
              <div className="card-header bg-success text-white text-center py-4">
                <h2 className="fw-bold">Event Manager</h2>
                <p className="mb-0">Sign up to create and manage your events</p>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label fw-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="fullName"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-semibold">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="password"
                      placeholder="Create a password"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label fw-semibold">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="confirmPassword"
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success btn-lg w-100 mt-4 fw-bold"
                  >
                    Sign Up
                  </button>
                </form>
                <div className="text-center mt-4">
                  <p className="text-muted mb-0">Already have an account?</p>
                  <Link
                    href={'/login'}
                    style={{ color: "var(--primary)", textDecoration: "none" }}
                  >
                    Login here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
