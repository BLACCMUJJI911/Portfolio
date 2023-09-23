import { Animator, Fade, FadeIn, Move, ScrollContainer, ScrollPage, batch } from "react-scroll-motion";
import Intro from "./Components/Intro/Intro";
import Work from "./Components/MyWork/Work";

export default function App(){

  


  return(
    <>
{/* <ScrollContainer>
  <ScrollPage page={4}>
    <Animator animation={batch(Move(1,0))}> */}

    <Intro/>

    {/* </Animator>
  </ScrollPage>
</ScrollContainer> */}
    <Work/>

    </>
  )
}