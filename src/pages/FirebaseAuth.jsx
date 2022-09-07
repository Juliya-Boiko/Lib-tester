import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser, logoutUser } from "redux/authSlice";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import swal from 'sweetalert';

export const FirebaseAuth = () => {
  const [account, setAccount] = useState(false);
  const isLogged = useSelector(state => state.auth.isLogged);
  const userEmail = useSelector(state => state.auth.email);
  const dispatch = useDispatch();


  const handleClick = () => {
    setAccount(!account);
  };

  const logoutHandler = () => {
    dispatch(logoutUser());
    swal("Good job!", "You logout!", "warning");
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target.elements;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email.value, form.password.value)
      .then(({ user }) => {
        console.log(user);
        swal("Good job!", "You log in!", "success");
        dispatch(loginUser({
          email: user.email,
          token: user.accessToken,
        }))
      })
      .catch((error) => {
        swal(`${error.message}`, "error");
        //console.log(error.message));
      });
  }; 

  const registerHandler = (e) => {
    e.preventDefault();
    const form = e.target.elements;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email.value, form.password.value)
      .then(({ user }) => {
        console.log(user);
        dispatch(registerUser({
          email: user.email,
          token: user.accessToken,
        }));
        swal("Good job!", "You register!", "success");
      })
      .catch((error) => {
        swal(`${error.message}`, "error");
        //console.log(error.message));
      });
  };

  return (
    <div className="firebase-auth-wrapper">
      {isLogged
        ? <div>
          <p>Welcome, {userEmail} !</p>
          <button type="button" className="firebase-auth-toggle-btn" onClick={logoutHandler}>Logout</button>
        </div>
        : <>
          <button type="button" className="firebase-auth-toggle-btn" onClick={handleClick}>CLICK TO SWITCH FORM</button>
          {account
            ? <div>
              <h2 className="firebase-auth-title ">Login Form</h2>
              <form className="firebase-auth-form" onSubmit={loginHandler}>
                <input type="text" name="email" className="firebase-auth-input"/>
                <input type="text" name="password" className="firebase-auth-input"/>
                <button type="submit" className="firebase-auth-submit-btn">Login</button>
              </form>
            </div>
            : <div>
                <h2 className="firebase-auth-title ">Register Form</h2>
                <form className="firebase-auth-form" onSubmit={registerHandler}>
                  <input type="text" name="email" className="firebase-auth-input"/>
                  <input type="text" name="password" className="firebase-auth-input"/>
                  <button type="submit" className="firebase-auth-submit-btn">Register</button>
                </form>
              </div>
          }
        </>
      }

      <ul className="bg-bubbles">
        <li className="bg-bubbles__item bg-bubbles__item--1"></li>
        <li className="bg-bubbles__item bg-bubbles__item--2"></li>
        <li className="bg-bubbles__item bg-bubbles__item--3"></li>
        <li className="bg-bubbles__item bg-bubbles__item--4"></li>
        <li className="bg-bubbles__item bg-bubbles__item--5"></li>
        <li className="bg-bubbles__item bg-bubbles__item--6"></li>
        <li className="bg-bubbles__item bg-bubbles__item--7"></li>
        <li className="bg-bubbles__item bg-bubbles__item--8"></li>
        <li className="bg-bubbles__item bg-bubbles__item--9"></li>
        <li className="bg-bubbles__item bg-bubbles__item--10"></li>
      </ul>
    </div> 
  );
};

