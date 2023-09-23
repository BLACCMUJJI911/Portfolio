import { TypeAnimation } from "react-type-animation";
import React, { useState } from "react";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Animator, Fade, FadeIn, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, ZoomIn, batch } from "react-scroll-motion";



export default function Intro() {

    const [progress] = useState(84)
    const [buffer] = useState(92)
    const [progress1] = useState(68)
    const [buffer1] = useState(78)
    const [progress2] = useState(60)
    const [buffer2] = useState(77)
    const [progress3] = useState(58)
    const [buffer3] = useState(68)
    const [progress4] = useState(46)
    const [buffer4] = useState(60)

    const ZoomInScroll = batch(Fade(), ZoomIn())


    return (
        <>

            {/* Main Intro Section Start */}

           
{/* <ScrollContainer className="bg-dark">
    <ScrollPage page={5}>
    <Animator animation={batch(Fade(1, .2))}> */}
                <div className="mainIntro-Container container-fluid p-2 rounded">


                            <div className="intro-container p-2 d-flex flex-row gap-5 justify-content-center mt-5">

                                <div className="skills d-flex flex-column gap-5">

                                    <h3 className="text-center">My Skills</h3>

                                    <div className="html">
                                        <b>HTML, CSS</b>

                                        <Box sx={{ width: '100%' }}>
                                            <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
                                        </Box>

                                    </div>

                                    <div className="js">

                                        <b>JavaScript</b>

                                        <Box sx={{ width: '100%' }}>
                                            <LinearProgress variant="buffer" value={progress1} valueBuffer={buffer1} />
                                        </Box>

                                    </div>

                                    <div className="react">
                                        <b>React JS,TS</b>

                                        <Box sx={{ width: '100%' }}>
                                            <LinearProgress variant="buffer" value={progress2} valueBuffer={buffer2} />
                                        </Box>

                                    </div>


                                    <div className="native">
                                        <b>React Native Front-End</b>
                                        <Box sx={{ width: '100%' }}>
                                            <LinearProgress variant="buffer" value={progress4} valueBuffer={buffer4} />
                                        </Box>

                                    </div>

                                    <div className="next">
                                        <b>Next.JS</b>
                                        <Box sx={{ width: '100%' }}>
                                            <LinearProgress variant="buffer" value={progress3} valueBuffer={buffer3} />
                                        </Box>

                                    </div>

                                </div>

                                <div className="intro-container w-50 d-flex flex-column gap-2 p-3">

                                    <TypeAnimation
                                        sequence={[
                                            "I am Mujtaba Bhatti currently studying in Computer Science and It’s my 3rd Year. My age is 22. I’m a beginner React Web Developer with Front-End and with little Back-End skills with Next.JS and my course is still in progress. I can Make Web App that will have database of Firebase and Mongo DB. I can also use React Redux and Axios API fetching. And I can also Design Simple UI for Mobile App with React-Native."
                                            , 500
                                        ]}
                                        wrapper="span"
                                        speed={70}
                                        style={{ fontSize: '1.3em' }}
                                        repeat={Infinity}
                                        className="p-3"
                                    />

                                </div>

                            </div>
                       
                </div>
                {/* </Animator>
                </ScrollPage>
                </ScrollContainer> */}
           
            {/* end of main intro */}

        </>
    )
}