import './api-showcase.styles.scss';
import Footer from '../footer/footer.component';
import { TbError404 } from 'react-icons/tb';

export default function ApiShowcase() {
    return(
        <>
            <div className="api-first-showcase-medium-coming-prototype-element">
                <div>
                    <TbError404/>
                </div>
                <div>
                    <h1>Service is not working :(</h1>
                    <h2>Coming Soon ...</h2>
                </div>
            </div>
          <Footer/>
        </>
    )
}