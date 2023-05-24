import imgfeatures from './images/imgfeatures-archive 6.png';
import frontImg from './images/imgfeatures-archive 6 -front.png';
import rightImg from './images/imgfeatures-archive 6 -right.png';
import logo from './images/img-new-logo-low-quality.png'
import googlelogo from './images/iconfinder_Google_1298745 1.svg'
import applelogo from './images/applelogo2.png'
import playstore from './images/playstore.svg'

import './Style.css'

const Registration = () => {


    return ( 
        <div className="main">
            <div className="left-pane">
                <h1>Social media shared today, tomorrow <br />
                or by location</h1>
                <div className="elipse">
                    <img  src={imgfeatures} alt="" />
                    <img src={rightImg} alt="" />
                    
                </div>

                <div className="frontimg">
                    <img src={frontImg} alt="" />
                </div>
                
                
               <div className="footer">
                    <div></div>
                    <div></div>
                    <div></div>
               </div>
            </div>

            <div className="right-pane">
                <div className="logo">
                    <img src={logo} alt="PyramidLogo" />
                    <h1>Capzul</h1>
                </div>
                
                <div className="header">
                    <h2>Create Account</h2>
                    <p>for business, band or celebrity.</p>
                </div>

                <div className="input-fields">
                    <form>
                        <div>
                            <label>First name</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label>Last name</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label>Email or phone number</label>
                            <input type="text" />
                        </div>

                        <div>
                            <label>Date of birth <span>(MM/DD/YY)</span></label>
                            <input type="date" required />
                        </div>

                       <div>
                            <label>Password</label>
                            <input type="Text" />
                       </div>

                       <div>
                            <label>Confirm password</label>
                            <input type="text" />
                       </div>

                   
                        <div className="subfield">
                            <label> 
                                <input type="checkbox" />
                                Remember me
                            </label>
                        </div>

                        <div>
                        <span className="blue">Forgot password?</span>
                        </div>
                        
                        
                        <div className="subfield">
                            <label> 
                                <input type="checkbox" />
                                I agree to all the <span>Terms</span> and <span>Privacy policy</span>
                            </label>
                        </div>

                        <div></div>

                        <button>Create account</button>
                        <button> <span><img src={googlelogo} alt="google logo" /></span> <span>Sign-in with google</span></button>
                        
                        
                    </form>

                    <p>Don't have an account? <span>Log in</span></p>

                    <footer>
                        <div className="googleplay">
                            <img src={playstore} alt="" />
                            <p><span>GET IT ON</span> <br /> Google Play</p>
                        </div>

                        <div className="googleplay">
                            <img src={applelogo} alt="" />
                            <p><span>Download on the</span> <br />Apple store</p>
                        </div>
                    </footer>
                </div>

            </div>
        </div>
    );
}
 
export default Registration;
