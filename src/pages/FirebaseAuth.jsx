import { useState } from "react";

export const FirebaseAuth = () => {
  const [account, setAccount] = useState(false);

  const handleClick = () => {
    setAccount(!account);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target.elements;
    const user = {
      email: form.email.value,
      password: form.password.value,
    };
    console.log(user);
  }; 

  const registerHandler = (e) => {
    e.preventDefault();
    const form = e.target.elements;
    const newUser = {
      email: form.email.value,
      password: form.password.value,
    };
    console.log(newUser);
  };

  return (
    <div className="firebase-auth-wrapper">
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

