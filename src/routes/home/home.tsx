import Navigation from "../../components/navigation/navigation.component";
import Showcase from "../../components/showcase/showcase.component";
import { MotionAnimate } from 'react-motion-animate';
import HomeMain from "../../components/home-main/home-main.component";
import Footer from "../../components/footer/footer.component";

function Home() {
    return(
        <>
            <Navigation/>
            <Showcase/>
            <HomeMain/>
            <Footer/>
        </>
    )
  }

  export default Home;