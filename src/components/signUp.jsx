import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/signUp.css";
import ParticleBG from "./particleBG";
import Footer from "./footer";
import { useAuth } from "../app";


function SignUp() {
	const { login } = useAuth();
	const navigate = useNavigate();

	const handleLogin = () => {
        // Call the login function from context
        login();
		navigate('/');
    };

	const [isSignUpMode, setIsSignUpMode] = useState(false);

	const handleSignUpClick = () => {
		setIsSignUpMode(true);
	};

	const handleSignInClick = () => {
		setIsSignUpMode(false);
	};
	return (
		<>
			<ParticleBG />
			<div className={`signUpContainer ${isSignUpMode ? 'sign-up-mode' : ''}`}>
				<div className="forms-container">
					<div className="signin-signup">
						<form action="#" className="sign-in-form formCommon">
							<h2 className="title">Sign in</h2>
							<div className="input-field">
								<i className="fas fa-user"></i>
								<input type="text" placeholder="Username" />
							</div>
							<div className="input-field">
								<i className="fas fa-lock"></i>
								<input type="password" placeholder="Password" />
							</div>
							
							{/* <input type="submit" value="Login" className="btn solid" onClick={handleLogin}/> */}
							<input type="submit" value="Login" className="btn solid" />

							<p className="social-text">Or Sign in with social platforms</p>
							<div className="social-media">
								<a href="/" className="social-icon">
									<i className="fab fa-facebook-f"></i>
								</a>
								<a href="/" className="social-icon">
									<i className="fab fa-twitter"></i>
								</a>
								<a href="/" className="social-icon">
									<i className="fab fa-google"></i>
								</a>
								<a href="/" className="social-icon">
									<i className="fab fa-linkedin-in"></i>
								</a>
							</div>
						</form>
						<form action="#" className="sign-up-form formCommon">
							<h2 className="title">Sign up</h2>
							<div className="input-field">
								<i className="fas fa-user"></i>
								<input type="text" placeholder="Username" />
							</div>
							<div className="input-field">
								<i className="fas fa-envelope"></i>
								<input type="email" placeholder="Email" />
							</div>
							<div className="input-field">
								<i className="fas fa-lock"></i>
								<input type="password" placeholder="Password" />
							</div>
							<input type="submit" className="btn" value="Sign up" />
							<p className="social-text">Or Sign up with social platforms</p>
							<div className="social-media">
								<a href="/" className="social-icon">
									<i className="fab fa-facebook-f"></i>
								</a>
								<a href="/" className="social-icon">
									<i className="fab fa-twitter"></i>
								</a>
								<a href="/" className="social-icon">
									<i className="fab fa-google"></i>
								</a>
								<a href="/" className="social-icon">
									<i className="fab fa-linkedin-in"></i>
								</a>
							</div>
						</form>
					</div>
				</div>

				<div className="panels-container">
					<div className="panel left-panel">
						<div className="content">
							<h3>New here ?</h3>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
								ex ratione. Aliquid!
							</p>
							<button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
								Sign up
							</button>
						</div>
						<img src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="image" alt="SignUpImage" />
					</div>
					<div className="panel right-panel">
						<div className="content">
							<h3>One of us ?</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
								laboriosam ad deleniti.
							</p>
							<button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
								Sign in
							</button>
						</div>
						<img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png" className="image" alt="SignUpImage" />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default SignUp;