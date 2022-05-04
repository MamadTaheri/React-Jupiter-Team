import { Link } from 'react-router-dom';
import '../styles/Card.css';
import ToggleSwitch from './ToggleSwitch';

function Card({ text, title, onPress = () => { }, isActive = true }) {
    return (
        <Link to={`/cards/${title}`}> <div onClick={onPress} className={isActive ? 'container-card' : 'container-card-inactive'}>
            <div className='header-card'>
                <label className='title-card'>{title}</label>
                <ToggleSwitch />
            </div>
            <label className='text-card'>
                {text.length <= 102 ? text : `${text.substring(0, 102)} ...`}
            </label>
        </div>
        </Link>
    );
}

export default Card;

{/* <div className="card" style={{ width: "18rem" }}>
    <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
    </div>
</div> */}