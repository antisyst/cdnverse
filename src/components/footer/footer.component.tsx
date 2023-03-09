import './footer.styles.scss';
import ImportLogo from '../../icons/import-logo';

export default function Footer() {
    return(
        <div className='bottom-component-footer-prototype-element'>
            <div className='bottom-component-footer-prototype-element_container'>
                <div className="bottom-component-footer-prototype-element_container_item">
                    <h1><ImportLogo/> <span>Production®</span></h1>
                </div>
                <div className="bottom-component-footer-prototype-element_container_item bottom-component-footer-prototype-element_container_item_2">
                    <p>Copyright 2023 ©  <span></span><span></span>All Rights Reserved</p>
                    <h3>Developed by <span><a href="">Ramazan Azimli</a></span></h3>
                </div>
            </div>
        </div>
    )
}