import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-4">
            Login
          </button>
        </form>
        <p className="text-center mt-3">
          <a href="/forgot-password" className="text-muted">Forgot Password?</a>
        </p>
        <p className="text-center mt-2">
          Don't have an account? <a href="/register">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
