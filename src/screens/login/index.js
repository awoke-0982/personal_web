import React from 'react'
import './index.css'
import '../../globas/css/index.css'



const Login = () => {
  return (
    <div className="macbook-pro-14-10">
      <div className="macbook-pro-14-10-inner">
        <div className="rectangle-parent">
          <div className="group-child" />
          <div className="group-parent">
            <div className="sign-in-to-parent">
              <div className="sign-in-to">{`Sign in to `}</div>
              <div className="lorem-ipsum-is">{`Lorem Ipsum is simply `}</div>
            </div>
            <div className="welcome">Welcome !</div>
            <div className="component-parent">
              <div className="phone-number-parent">
                <div className="phone-number">Phone Number</div>
                <div className="rectangle-group">
                  <div className="instance-child" />
                  <div className="enter-your-user">Enter your user name</div>
                </div>
              </div>
              <div className="instance-parent">
                <div className="phone-number-parent">
                  <div className="phone-number">Password</div>
                  <div className="rectangle-group">
                    <div className="instance-child" />
                    <div className="enter-your-user">Enter your Password</div>
                  </div>
                </div>
                <img
                  className="invisible-1-icon"
                  alt=""
                  src="/invisible-1.svg"
                />
              </div>
              <div className="group-div">
                <div className="group-item" />
                <div className="rememebr-me">Rememebr me</div>
                <div className="forgot-password">Forgot Password ?</div>
              </div>
              <div className="rectangle-parent1">
                <div className="group-inner" />
                <div className="login">Login</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="group-icon" alt="" src="/group.svg" />
      <img className="macbook-pro-14-10-child" alt="" src="/group-47898.svg" />
    </div>
  );
};



export default Login