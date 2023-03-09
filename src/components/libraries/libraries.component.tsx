import './libraries.styles.scss';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BiCopy } from 'react-icons/bi';
import Fade from 'react-reveal/Fade';




export default function LibrariesShowcase() {
    const cdnLink = {
        "link1" : "https://cdnjs.cloudflare.com/ajax/libs/react-is/18.2.0/umd/react-is.production.min.js",
        "link2" : "https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js",
        "link3" : "https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js",
        "link4" : "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.47/vue.cjs.js",
        "link5" : "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.min.js",
        "link6" : "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.3/js/bootstrap.min.js",
        "link7" : "https://cdnjs.cloudflare.com/ajax/libs/create-react-class/15.7.0/create-react-class.min.js",
        "link8" : "https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.2/d3.min.js",
        "link9" : "https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.4/axios.min.js",
        "link10" : "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.150.1/three.min.js",
        "link11" : "https://cdnjs.cloudflare.com/ajax/libs/typescript/4.9.5/typescript.min.js",
        "link12" : "https://cdnjs.cloudflare.com/ajax/libs/angular/12.2.17/core.umd.min.js",
        "link13" : "https://cdnjs.cloudflare.com/ajax/libs/antd/5.3.0/antd.min.js",
        "link14" : "https://cdnjs.cloudflare.com/ajax/libs/material-ui/4.12.4/index.js",
        "link15" : "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css",
        "link16" : "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        "link17" : "https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css",
        "link18" : "https://cdnjs.cloudflare.com/ajax/libs/reveal.js/4.4.0/reveal.js",
        "link19" : "https://cdnjs.cloudflare.com/ajax/libs/firacode/6.2.0/fira_code.css",
        "link20" : "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.1/chart.min.js",
        "link21" : "https://cdnjs.cloudflare.com/ajax/libs/angular-animate/1.8.3/angular-animate.min.js",
        "link22" : "https://cdnjs.cloudflare.com/ajax/libs/angular-aria/1.8.3/angular-aria.min.js",
        "link23" : "https://cdnjs.cloudflare.com/ajax/libs/angular-cookies/1.8.3/angular-cookies.min.js",
        "link24" : "https://cdnjs.cloudflare.com/ajax/libs/angular-loader/1.8.3/angular-loader.min.js",
        "link25" : "https://cdnjs.cloudflare.com/ajax/libs/angular-message-format/1.8.3/angular-message-format.min.js",
        "link26" : "https://cdnjs.cloudflare.com/ajax/libs/redux/4.2.1/redux.min.js",
        "link27" : "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js",
        "link28" : "https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.6.1/socket.io.js",
        "link29" : "https://cdnjs.cloudflare.com/ajax/libs/angular-i18n/1.8.3/angular-locale_en-us.min.js",
        "link30" : "https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.0.2/mermaid.min.js",
        "link31" : "https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.15.13/index.js",
        "link32" : "https://cdnjs.cloudflare.com/ajax/libs/echarts/5.4.1/echarts.min.js",
        "link33" : "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.5.0/semantic.min.js",
        "link34" : "https://cdnjs.cloudflare.com/ajax/libs/react-router/6.8.2/react-router.production.min.js",
        "link35" : "https://cdnjs.cloudflare.com/ajax/libs/ionic/1.3.2/js/ionic.min.js",
        "link36" : "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js",
        "link37" : "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js",
        "link38" : "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css",
        "link39" : "https://cdnjs.cloudflare.com/ajax/libs/prettier/2.8.4/standalone.js",
        "link40" : "https://cdnjs.cloudflare.com/ajax/libs/kotlin/1.8.10/kotlin.js",
        "link41" : "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js",
        "link42" : "https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.11.7/dayjs.min.js",
        "link43" : "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css",
        "link44" : "https://cdnjs.cloudflare.com/ajax/libs/pixi.js/7.1.4/pixi.min.js",
        "link45" : "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
        "link46" : "https://cdnjs.cloudflare.com/ajax/libs/6to5/3.6.5/browser.js",
        "link47" : "https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js",
        "link48" : "https://cdnjs.cloudflare.com/ajax/libs/vuetify/3.1.8/vuetify.min.js",
        "link49" : "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/leaflet.js",
        "link50" : "https://cdnjs.cloudflare.com/ajax/libs/impress.js/0.5.3/impress.min.js",
        "link51" : "https://cdnjs.cloudflare.com/ajax/libs/video.js/8.2.0/video.min.js",
    }
    return(
        <div className='import-new-router-libraries-prototype-element'>
            <h1 className='import-new-router-libraries-prototype-element-first-content'>Libraries</h1>
            <div className="import-new-router-libraries-prototype-element_container">
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item" id='start'>
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>react-is</h1>
                        <p>★   203k</p>
                        <CopyToClipboard text={cdnLink.link1}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Brand checking of React Elements.
                        <br /> <span>Version: @ 18.2.0</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>react-dom</h1>
                        <p>★	204k</p>
                        <CopyToClipboard text={cdnLink.link2}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>The entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic React, which is shipped as react to npm.
                        <br /> <span>Version: @ 18.2.0</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>react-js</h1>
                        <p>★	206k</p>
                        <CopyToClipboard text={cdnLink.link3}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Brand checking of React Elements.
                        <br /> <span>Version: @ 18.2.0</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>vue-js</h1>
                        <p>★	200k</p>
                        <CopyToClipboard text={cdnLink.link4}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Simple, Fast & Composable MVVM for building interactive interfaces.
                        <br /> <span>Version: @3.2.47</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>bootstrap</h1>
                        <p>★	161k</p>
                        <CopyToClipboard text={cdnLink.link5}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>The most popular front-end framework for developing responsive, mobile first projects on the web.
                        <br /> <span>Version: @5.2.3</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>twitter-bootstrap</h1>
                        <p>★	160k</p>
                        <CopyToClipboard text={cdnLink.link6}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>The most popular front-end framework for developing responsive, mobile first projects on the web.
                        <br /> <span>Version: @5.2.3</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>react-class</h1>
                        <p>★	152k</p>
                        <CopyToClipboard text={cdnLink.link7}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Legacy API for creating React components.
                        <br /> <span>Version: @15.7.0</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>d3-js</h1>
                        <p>★	104k</p>
                        <CopyToClipboard text={cdnLink.link8}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>A JavaScript visualization library for HTML and SVG.
                        <br /> <span>Version: @7.8.0</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>axios</h1>
                        <p>★	99k</p>
                        <CopyToClipboard text={cdnLink.link9}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Promise based HTTP client for the browser and node.js
                        <br /> <span>Version: @1.3.4</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>three.js</h1>
                        <p>★	89k</p>
                        <CopyToClipboard text={cdnLink.link10}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>JavaScript 3D library.
                        <br /> <span>Version: @0.150.1</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>typescript</h1>
                        <p>★	89k</p>
                        <CopyToClipboard text={cdnLink.link11}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>TypeScript is a language for application scale JavaScript development.
                        <br /> <span>Version: @4.9.5</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>angular</h1>
                        <p>★	87k</p>
                        <CopyToClipboard text={cdnLink.link12}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>TypeScript is a language for application scale JavaScript development.
                        <br /> <span>Version: @12.2.17</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>antd</h1>
                        <p>★	85k</p>
                        <CopyToClipboard text={cdnLink.link13}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>An UI design language.
                        <br /> <span>Version: @5.3.0</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>material-ui</h1>
                        <p>★	77k</p>
                        <CopyToClipboard text={cdnLink.link14}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>React components that implement Google's Material Design.
                        <br /> <span>Version: @4.12.4</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>font-awesome</h1>
                        <p>★	71k</p>
                        <CopyToClipboard text={cdnLink.link15}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>The iconic SVG, font, and CSS toolkit.
                        <br /> <span>Version: @6.3.0</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>animate.css</h1>
                        <p>★	68k</p>
                        <CopyToClipboard text={cdnLink.link16}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Plug and play, app-like animations for your websites and web apps.
                        <br /> <span>Version: @4.1.1</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>tailwindcss</h1>
                        <p>★	66k</p>
                        <CopyToClipboard text={cdnLink.link17}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>A utility-first CSS framework for rapidly building custom user interfaces.
                        <br /> <span>Version: @2.2.19</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>reveal.js</h1>
                        <p>★	62k</p>
                        <CopyToClipboard text={cdnLink.link18}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>The HTML Presentation Framework
                        <br /> <span>Version: @4.4.0</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>firacode</h1>
                        <p>★	61k</p>
                        <CopyToClipboard text={cdnLink.link19}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Fira Code: monospaced font with programming ligatures.
                        <br /> <span>Version: @6.2.0</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>chart.js</h1>
                        <p>★	60k</p>
                        <CopyToClipboard text={cdnLink.link20}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Simple HTML5 charts using the canvas element.
                        <br /> <span>Version: @4.2.1</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>angular-anim</h1>
                        <p>★	60k</p>
                        <CopyToClipboard text={cdnLink.link21}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>AngularJS module for CSS-based animations as well as JavaScript-based animations.
                        <br /> <span>Version: @1.8.3</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>angular-aria</h1>
                        <p>★	59k</p>
                        <CopyToClipboard text={cdnLink.link22}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>AngularJS module for common ARIA attributes that convey state about the application for users of assistive technologies.
                        <br /> <span>Version: @1.8.3</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>angular-cook</h1>
                        <p>★	59k</p>
                        <CopyToClipboard text={cdnLink.link23}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>AngularJS module for reading and writing browser cookies.
                        <br /> <span>Version: @1.8.3</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>angular-load</h1>
                        <p>★	59k</p>
                        <CopyToClipboard text={cdnLink.link24}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Module loader for AngularJS modules.
                        <br /> <span>Version: @1.8.3</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>anglr-message</h1>
                        <p>★	58k</p>
                        <CopyToClipboard text={cdnLink.link25}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>AngularJS module extends the AngularJS $interpolate service.
                        <br /> <span>Version: @1.8.3</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>redux</h1>
                        <p>★	60k</p>
                        <CopyToClipboard text={cdnLink.link26}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Predictable state container for JavaScript apps.
                        <br /> <span>Version: @4.2.1</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>jquery</h1>
                        <p>★	57k</p>
                        <CopyToClipboard text={cdnLink.link27}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>JavaScript library for DOM operations.
                        <br /> <span>Version: @3.6.4</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>socket.io</h1>
                        <p>★	58k</p>
                        <CopyToClipboard text={cdnLink.link28}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>node.js realtime framework server.
                        <br /> <span>Version: @4.6.1</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>angular-i18n</h1>
                        <p>★	58k</p>
                        <CopyToClipboard text={cdnLink.link29}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Locales for AngularJS.
                        <br /> <span>Version: @1.8.3</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>mermaid</h1>
                        <p>★	55k</p>
                        <CopyToClipboard text={cdnLink.link30}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Markdownish syntax for generating flowcharts, sequence diagrams, class diagrams and gantt charts.
                        <br /> <span>Version: @10.0.2</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>element-ui</h1>
                        <p>★	53k</p>
                        <CopyToClipboard text={cdnLink.link31}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>A Component Library for Vue.js.
                        <br /> <span>Version: @2.15.13</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>echarts</h1>
                        <p>★	54k</p>
                        <CopyToClipboard text={cdnLink.link32}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>A powerful, interactive charting and data visualization library for browser.
                        <br /> <span>Version: @5.4.1</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>semantic-ui</h1>
                        <p>★	50k</p>
                        <CopyToClipboard text={cdnLink.link33}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Semantic empowers designers and developers by creating a shared vocabulary for UI.
                        <br /> <span>Version: @2.5.0</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>react-router</h1>
                        <p>★	49k</p>
                        <CopyToClipboard text={cdnLink.link34}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>A complete routing library for React.js.
                        <br /> <span>Version: @6.8.2</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>ionic</h1>
                        <p>★	49k</p>
                        <CopyToClipboard text={cdnLink.link35}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Advanced HTML5 Mobile App Framework.
                        <br /> <span>Version: @1.3.2</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>lodash.js</h1>
                        <p>★	48k</p>
                        <CopyToClipboard text={cdnLink.link36}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>A utility library delivering consistency, customization, performance, & extras.
                        <br /> <span>Version: @4.17.21</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>moment.js</h1>
                        <p>★	47k</p>
                        <CopyToClipboard text={cdnLink.link37}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Parse, validate, manipulate, and display dates.
                        <br /> <span>Version: @2.29.4</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>bulma</h1>
                        <p>★	45k</p>
                        <CopyToClipboard text={cdnLink.link38}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Modern CSS framework based on Flexbox.
                        <br /> <span>Version: @0.9.4</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>prettier</h1>
                        <p>★	45k</p>
                        <CopyToClipboard text={cdnLink.link39}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Prettier is an opinionated code formatter.
                        <br /> <span>Version: @2.8.4</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>kotlin</h1>
                        <p>★	45k</p>
                        <CopyToClipboard text={cdnLink.link40}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Standard Library for Kotlin Applications.
                        <br /> <span>Version: @1.8.10</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>pdf.js</h1>
                        <p>★	42k</p>
                        <CopyToClipboard text={cdnLink.link41}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>PDF Reader in JavaScript.
                        <br /> <span>Version: @3.4.120</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>day.js</h1>
                        <p>★	41k</p>
                        <CopyToClipboard text={cdnLink.link42}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>2KB immutable date library alternative to Moment.js with the same modern API.
                        <br /> <span>Version: @1.11.7</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>normalize</h1>
                        <p>★	40k</p>
                        <CopyToClipboard text={cdnLink.link43}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Normalize.css as a node packaged module.
                        <br /> <span>Version: @8.0.1</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>pixi.js</h1>
                        <p>★	39k</p>
                        <CopyToClipboard text={cdnLink.link44}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Pixi.js is a fast lightweight 2D library that works across all devices.
                        <br /> <span>Version: @7.1.4</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>materialize</h1>
                        <p>★	38k</p>
                        <CopyToClipboard text={cdnLink.link45}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Builds Materialize distribution packages.
                        <br /> <span>Version: @1.0.0</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>6to5</h1>
                        <p>★	37k</p>
                        <CopyToClipboard text={cdnLink.link46}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Turn ES6 code into readable vanilla ES5 with source maps.
                        <br /> <span>Version: @3.6.5</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>animejs</h1>
                        <p>★	37k</p>
                        <CopyToClipboard text={cdnLink.link47}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Polyvalent Javascript animation engine.
                        <br /> <span>Version: @3.2.1</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>vuetify</h1>
                        <p>★	37k</p>
                        <CopyToClipboard text={cdnLink.link48}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>Vue.js 2 Semantic Component Framework.
                        <br /> <span>Version: @3.1.8</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>leaflet</h1>
                        <p>★	36k</p>
                        <CopyToClipboard text={cdnLink.link49}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>JavaScript library for mobile-friendly interactive maps.
                        <br /> <span>Version: @1.9.3</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>impress.js</h1>
                        <p>★	35k</p>
                        <CopyToClipboard text={cdnLink.link50}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>It's a presentation framework based on the power of CSS3.
                        <br /> <span>Version: @0.5.3</span>
                    </p>
                </div>
                </Fade>
                <Fade>
                <div className="import-new-router-libraries-prototype-element_container_item">
                    <div className="import-new-router-libraries-prototype-element_container_item_port">
                        <h1>video.js</h1>
                        <p>★	35k</p>
                        <CopyToClipboard text={cdnLink.link51}
                         onCopy={() => alert('ᴄᴅɴ ᴄᴏᴘɪᴇᴅ :)')}>
                         <button><BiCopy/></button>
                        </CopyToClipboard>
                    </div>
                    <p className='content'>An HTML5 and Flash video player with a common API and skin for both.
                        <br /> <span>Version: @8.2.0</span>
                    </p>
                </div>
                </Fade>
            </div>
            <div className="coming-soon-prototype-element">
                <h1>Coming Soon ...</h1>
            </div>
        </div>
    )
}