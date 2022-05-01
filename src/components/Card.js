import '../styles/Card.css';
import ToggleSwitch from './ToggleSwitch';

function Card({ text, title, onPress = () => { }, isActive = true }) {
    return (
        <div onClick={onPress} className={isActive ? 'container-card' : 'container-card-inactive'}>
            <div className='header-card'>
                <label className='title-card'>{title}</label>
                <ToggleSwitch />
            </div>
            <label className='text-card'>
                {text.length <= 102 ? text : `${text.substring(0, 102)} ...`}
            </label>
        </div>
    );
}

export default Card;