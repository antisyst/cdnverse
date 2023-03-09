import { Link } from 'react-router-dom';
import './navigation.styles.scss';
import ImportLogo from '../../icons/import-logo';
import { motion, useScroll } from "framer-motion";



export default function Navigation() {
    const { scrollYProgress } = useScroll();
    return(
        <div className='import-top-content-navigation-params-prototype-element'>
        <div className='top-content-navigation-params-prototype-element'>
         <nav>
            <div className='top-content-navigation-params-prototype-element-nav-item'>
            <Link to="/"><ImportLogo/></Link>
            </div>
            <div className='top-content-navigation-params-prototype-element-nav-item top-content-navigation-params-prototype-element-nav-item_2'>
                <Link to="/libraries#start">Libraries</Link>
                <Link to="/apis">API</Link>
            </div>
         </nav>
         <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      </div>
      </div>
    )
}