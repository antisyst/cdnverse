import './showcase.styles.scss';
import ImportLogo from '../../icons/import-logo';
import { TbApi } from 'react-icons/tb'
import { BiLibrary } from 'react-icons/bi';
import { MotionAnimate } from 'react-motion-animate';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';



export default function Showcase() {
    return(
        <MotionAnimate reset={true}>
        <div className='import-home-component-showcase-prototype-element'>
        <Fade>
            <div className='import-home-component-showcase-prototype-element_item'>
               <Zoom>
                <ImportLogo/>
               </Zoom>
               <Zoom>
                 <h1>All Libraries and APIs in one place :)</h1>
               </Zoom>
                <div className='import-home-component-showcase-prototype-element_item-container'>
                <Zoom>
                    <div className="import-home-component-showcase-prototype-element_item-container_item">
                        <TbApi/>
                        <h1><span>+100</span> <br />API</h1>
                    </div>
                </Zoom>
                <Zoom>
                    <div className="import-home-component-showcase-prototype-element_item-container_item">
                        <BiLibrary/>
                        <h1><span>+100</span><br />Library</h1>
                    </div>
                </Zoom>
                </div>
                <div className='import-home-component-showcase-prototype-element-explore-component'>
                    <a href="#popular">Explore Now</a>
                </div>
            </div>
            </Fade>
        </div>
        </MotionAnimate>
    )
}