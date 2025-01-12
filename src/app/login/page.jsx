import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
const LoginPage = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7 col-sm-10">
            <div className="card shadow-lg border-0 rounded-lg">
              <div className="card-header bg-primary text-white text-center py-4">
                <h2 className="fw-bold">Event Manager</h2>
                <p className="mb-0">Login to manage and view your events</p>
              </div>
              <div className="card-body">
                <form>
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
                    <label
                      htmlFor="password"
                      className="form-label fw-semibold"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                      />
                      <label
                        className="form-check-label fw-semibold"
                        htmlFor="rememberMe"
                      >
                        Remember Me
                      </label>
                    </div>
                    <a href="#" className="text-primary text-decoration-none">
                      Forgot Password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 mt-4 fw-bold"
                  >
                    Login
                  </button>
                </form>
                <div className="text-center mt-4">
                  <p className="text-muted">or</p>
                  <button className="btn btn-outline-secondary btn-lg w-100">
                    Guest Login
                  </button>
                </div>
              </div>
              <div className="card-footer text-center bg-light py-3">
                <p className="mb-0">
                  Don’t have an account?{" "}
                  <Link
                    href={'/signup'}
                    style={{ color: "var(--primary)", textDecoration: "none" }}
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
