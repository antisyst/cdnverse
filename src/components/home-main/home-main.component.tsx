import './home-main.styles.scss';
import { AiOutlineStar } from 'react-icons/ai'
import { BiCopy } from 'react-icons/bi';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from 'react-router-dom';
import { MotionAnimate } from 'react-motion-animate';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


export default function HomeMain() {
    const myObj = {
        "link1" : "https://cdnjs.cloudflare.com/ajax/libs/react-is/18.2.0/umd/react-is.production.min.js",
        "link2" : "https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js",
        "link3" : "https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js",
        "link4" : "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.47/vue.cjs.js",
        "link5" : "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.min.js",
        "link6" : "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.3/js/bootstrap.min.js",
        "link7" : "https://cdnjs.cloudflare.com/ajax/libs/create-react-class/15.7.0/create-react-class.min.js",
        "link8" : "https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.2/d3.min.js",
        "link9" : "https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.4/axios.min.js",
        "link10" : "https://cdnjs.cloudflare.com/ajax/libs/typescript/4.9.5/typescript.min.js",
        "link11" : "https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.17/core.umd.min.js",
    };
    return(
        <div className='import-home-main-bottom-showcase-prototype-element' id='popular'>
             <Zoom left>
            <h1 className='import-home-main-bottom-showcase-prototype-element-first-content'>Popular Libraries</h1>
            </Zoom>
            <div className='import-home-main-bottom-showcase-prototype-element-container'>
                <Fade>
                <div className='import-home-main-bottom-showcase-prototype-element-container_item'>
                    <div className='import-home-main-bottom-showcase-prototype-element-container_item-port'>
                        <h1>react-is</h1>
                        <h4>★	203k</h4>
                        <CopyToClipboard text={myObj.link1}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p>Brand checking of React Elements.
                        <br /> <span>Version: <span>@18.2.0</span></span></p>
                </div>
                </Fade>
                <Fade>
                <div className='import-home-main-bottom-showcase-prototype-element-container_item'>
                    <div className='import-home-main-bottom-showcase-prototype-element-container_item-port'>
                        <h1>react-dom</h1>
                        <h4>★	204k</h4>
                        <CopyToClipboard text={myObj.link2}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p>The entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic React, which is shipped as react to npm.
                        <br /> <span>Version: <span>@18.2.0</span></span></p>
                </div>
                </Fade>
                <Fade>
                <div className='import-home-main-bottom-showcase-prototype-element-container_item'>
                    <div className='import-home-main-bottom-showcase-prototype-element-container_item-port'>
                        <h1>react-js</h1>
                        <h4>★	206k</h4>
                        <CopyToClipboard text={myObj.link3}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p>React is a JavaScript library for building user interfaces.
                        <br /> <span>Version: <span>@18.2.0</span></span></p>
                </div>
                </Fade>
                <Fade>
                <div className='import-home-main-bottom-showcase-prototype-element-container_item'>
                    <div className='import-home-main-bottom-showcase-prototype-element-container_item-port'>
                        <h1>vue-js</h1>
                        <h4>★	200k</h4>
                        <CopyToClipboard text={myObj.link4}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p>Simple, Fast & Composable MVVM for building interactive interfaces.
                        <br /> <span>Version: <span>@3.2.47</span></span></p>
                </div>
                </Fade>
                <Fade>
                <div className='import-home-main-bottom-showcase-prototype-element-container_item'>
                    <div className='import-home-main-bottom-showcase-prototype-element-container_item-port'>
                        <h1>bootstrap</h1>
                        <h4>★	161k</h4>
                        <CopyToClipboard text={myObj.link5}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p>The most popular front-end framework for developing responsive, mobile first projects on the web.
                        <br /> <span>Version: <span>@5.2.3</span></span></p>
                </div>
                </Fade>
                <Fade>
                <div className='import-home-main-bottom-showcase-prototype-element-container_item'>
                    <div className='import-home-main-bottom-showcase-prototype-element-container_item-port'>
                        <h1>twitter-bootstrap</h1>
                        <h4>★	160k</h4>
                        <CopyToClipboard text={myObj.link6}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p>The most popular front-end framework for developing responsive, mobile first projects on the web.
                        <br /> <span>Version: <span>@5.2.3</span></span></p>
                </div>
                </Fade>
                <Fade>
                <div className='import-home-main-bottom-showcase-prototype-element-container_item'>
                    <div className='import-home-main-bottom-showcase-prototype-element-container_item-port'>
                        <h1>create-react-class</h1>
                        <h4>★	152k</h4>
                        <CopyToClipboard text={myObj.link7}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p>Legacy API for creating React components.
                        <br /> <span>Version: <span>@15.7.0</span></span></p>
                </div>
                </Fade>
                <Fade>
                <div className='import-home-main-bottom-showcase-prototype-element-container_item'>
                    <div className='import-home-main-bottom-showcase-prototype-element-container_item-port'>
                        <h1>d3</h1>
                        <h4>★	104k</h4>
                        <CopyToClipboard text={myObj.link8}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p>A JavaScript visualization library for HTML and SVG.
                        <br /> <span>Version: <span>@7.8.0</span></span></p>
                </div>
                </Fade>
                <Fade>
                <div className='import-home-main-bottom-showcase-prototype-element-container_item'>
                    <div className='import-home-main-bottom-showcase-prototype-element-container_item-port'>
                        <h1>axios</h1>
                        <h4>★	99k</h4>
                        <CopyToClipboard text={myObj.link9}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p>Promise based HTTP client for the browser and node.js
                        <br /> <span>Version: <span>@1.3.4</span></span></p>
                </div>
                </Fade>
                <Fade>
                <div className='import-home-main-bottom-showcase-prototype-element-container_item'>
                    <div className='import-home-main-bottom-showcase-prototype-element-container_item-port'>
                        <h1>three.js</h1>
                        <h4>★	89k</h4>
                        <CopyToClipboard text={myObj.link9}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p>JavaScript 3D library.
                        <br /> <span>Version: <span>@0.150.1</span></span></p>
                </div>
                </Fade>
                <Fade>
                <div className='import-home-main-bottom-showcase-prototype-element-container_item'>
                    <div className='import-home-main-bottom-showcase-prototype-element-container_item-port'>
                        <h1>typescript</h1>
                        <h4>★	89k</h4>
                        <CopyToClipboard text={myObj.link10}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p>TypeScript is a language for application scale JavaScript development.
                        <br /> <span>Version: <span>@4.9.5</span></span></p>
                </div>
                </Fade>
                <Fade>
                <div className='import-home-main-bottom-showcase-prototype-element-container_item'>
                    <div className='import-home-main-bottom-showcase-prototype-element-container_item-port'>
                        <h1>angular</h1>
                        <h4>★	87k</h4>
                        <CopyToClipboard text={myObj.link11}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p>Angular - the core framework.
                        <br /> <span>Version: <span>@12.2.17</span></span></p>
                </div>
                </Fade>
            </div>
            <div className='more-libraries-attract-button'>
                <Link to='/libraries#start'>more libraries</Link>
            </div>
        </div>
    )
}