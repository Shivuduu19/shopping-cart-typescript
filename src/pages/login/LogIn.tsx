import { useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { setLogin } from "./LoginSlice";
import { useAppDispatch } from "../../state/hooks";

export const LogIn = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorMsg, setErrormsg] = useState("");
  const [success, setSuccess] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrormsg("");
  }, [user, pwd]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setSuccess(true);
    setPwd("");
    setUser("");
    dispatch(setLogin(true));
  };
  return (
    <div className="app">
      <>
        {success ? (
          <Navigate to="/" replace={true} />
        ) : (
          <section>
            <p
              ref={errorRef}
              className={errorMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errorMsg}
            </p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                required
                ref={userRef}
                autoComplete="off"
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                value={user}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                onChange={(e) => {
                  setPwd(e.target.value);
                }}
                value={pwd}
                required
              />
              <button>Sign In</button>
            </form>
            <p>
              Need an account?
              <br />
              <span className="line">
                <a href="#">Sign Up</a>
              </span>
            </p>
          </section>
        )}
      </>
    </div>
  );
};
