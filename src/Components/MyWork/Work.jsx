import { Button } from "@mui/material"
import quiz from "../../assets/Quiz.png"
import donation from "../../assets/E-Donation.png"
import blog from "../../assets/Blog.png"


export default function Work() {

    return (
        <>
            <div className=" mainWork align-items-center d-flex flex-column">
                
                <h4>My Work</h4>

            <div className="mainWork container-fluid d-flex justify-content-evenly flex-row gap-4">

                


                <div className="card" style={{ width: 20 + "rem" }}>


                    <img src={quiz} className="quiz card-img-top" alt="..." />


                    <div className="card-body">


                        <h5 className="card-title">Simple Quiz App</h5>


                        <p className="card-text">This Quiz App is made with React JS. And It is very simple App, like simple UI and limited 10 questions based on history of Pakistan.</p>
                    </div>

                    <h5 className="text-center">Key Features</h5>

                    <ul className="list-group list-group-flush">


                        <li className="list-group-item">Visit Site.</li>
                        <li className="list-group-item">Choose The Correct Options.</li>
                        <li className="list-group-item">And get your result.</li>


                    </ul>
                    <div className="card-body d-flex justify-content-center">


                        <Button  style={{backgroundColor:"#DFE3EE"}} variant="contained">  <a href="#" className="card-link text-white text-decoration-none">Visit Project</a></Button>



                    </div>
                </div>

                <div className="card" style={{ width: 20 + "rem" }}>


                    <img src={donation} className="donation card-img-top" alt="..." />


                    <div className="card-body">


                        <h5 className="card-title">E-Donation</h5>


                        <p className="card-text">This project is made on HTML, CSS, SCSS, Bootstrap JS and JQuery. Responsive 100% with every devices. It is an Online Donation platform. </p>
                    </div>

                    <h5 className="text-center">Key Features</h5>

                    <ul className="list-group list-group-flush">


                        <li className="list-group-item">Visit Site</li>
                        <li className="list-group-item">Sign-Up & Sign-In as Donor.</li>
                        <li className="list-group-item">Donate what you want to.</li>


                    </ul>
                    <div className="card-body d-flex justify-content-center">


                        <Button style={{backgroundColor:"#DFE3EE"}} variant="contained"> <a href="#" className="card-link text-decoration-none text-white">Visit Project</a></Button>



                    </div>
                </div>

                <div className="card" style={{ width: 20 + "rem" }}>


                    <img src={blog} className="blog card-img-top" alt="..." />


                    <div className="card-body">


                        <h5 className="card-title">Blog</h5>


                        <p className="card-text">This App is made with Next.Js. It is functional with API's method in which Back-End can easily integerate with DataBase. </p>
                    </div>

                    <h5 className="text-center">Key Features</h5>

                    <ul className="list-group list-group-flush">


                        <li className="list-group-item">Visit Site</li>
                        <li className="list-group-item">Sign-Up & Sign-In</li>
                        <li className="list-group-item">Post your Blog</li>


                    </ul>
                    <div className="card-body d-flex justify-content-center">


                        <Button style={{backgroundColor:"#DFE3EE"}} variant="contained">  <a href="#" className="card-link text-white text-decoration-none">Visit Project</a></Button>



                    </div>
                </div>

            </div>
            
            </div>
        </>
    )


}