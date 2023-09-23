import { Button } from "@mui/material";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import  mypicc from "../../assets/mypic.png"




export default function NavBar() {

    return (

        <>

            <div className="main-container container-fluid flex-column d-flex">

                {/* Navbar Section Start */}

                <div className="nav-bar d-flex justify-content-between container-fluid p-1 m-2">

                    <div class="parallelogram">
                        M911
                    </div>

                    <ul className="d-flex gap-4 justify-content-end mt-1">

                        <li>Work</li>
                        <li>Skills</li>
                        <li>Projects</li>

                    </ul>

                    <div className="social-icons d-flex gap-1 mt-1">
                        <div className="fb"> <FaFacebookF /> </div>
                        <div className="x"> <FaXTwitter /> </div>
                        <div className="linkedin"> <FaLinkedinIn /> </div>
                    </div>

                </div>

                {/* 
                href="https://www.facebook.com/mujtaba.bhatti.911"
                href="https://twitter.com/BM911_"
                href="https://www.linkedin.com/in/mujtaba-bhatti-a7aa65265/"
                */}

                {/* Navbar Section End */}

                {/* //////////////////////////////////////////// */}

                {/* Front-Info About Start */}

                <div className="about container-fluid mt-5 d-flex flex-row justify-content-center gap-4">

                    <div className="mySelf d-flex flex-column justify-content-center">

                        <h3>Hello!</h3>
                        
                        <h1 className="fw-bold">I'm Mujtaba Bhatti</h1>
                        <p className="title">Freshie MERN Stack Developer</p>
                        <p>From Pakistan</p>

                        <Button className="w-50" variant="contained">Hire Me</Button>

                    </div>

                    <div className="myPic">

                        <img className="pic" src={mypicc} alt="Developer" />


                    </div>

                </div>

            </div>

            {/*  */}


        </>

    )
}