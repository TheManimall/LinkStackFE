import React, {useContext, useEffect, useState} from 'react';
import { useHttp } from '../hooks/http.hook';
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";

const AuthPage = (props) => {
  const auth = useContext(AuthContext)
  const { loading, error, request, clearError } = useHttp()
  const message = useMessage()
  const [form, setForm] = useState({});

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const handleChange = e => setForm({ ...form, [e.target.name] : e.target.value });

  const registerHandler = async() => {
    try {
      const data = await request('/api/auth/register', 'POST', { ...form })
      message(data.message)
    } catch (e) {

    }
  }

  const loginHandler = async() => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...form })
      auth.login(data.token, data.userId)
      message(data.message)
    } catch (e) {

    }
  }

  return(
  <div className="row">
    <div className="col s6 offset-s3">
      <h1>LinkStack</h1>
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Registration</span>
              <div className="email">
                <span>Email:</span>
                <input
                  type="text"
                  placeholder="Input email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="password">
                <span>Password:</span>
                <input
                  placeholder="Input password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  type="password"
                />
              </div>
            </div>
            <div className="card-action">
              <button
                className="btn yellow darken-4"
                disabled={loading}
                onClick={loginHandler}
              >
                Sign in
              </button>
              <button
                className="btn grey lighten-1 black-text"
                onClick={registerHandler}
                disabled={loading}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)};

export default AuthPage;