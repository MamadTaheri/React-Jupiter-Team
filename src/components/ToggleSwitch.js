import { useState } from "react";
import '../styles/ToggleSwitch.css';



function ToggleSwitch() {
    const [isToggled, setIsToggled] = useState(false);
    const onToggle = () => setIsToggled(!isToggled);
 
    return (


        <div className='content-switch' >
            <label className="toggle-switch">
                <input type="checkbox" checked={isToggled} onChange={onToggle} />
                <span className="switch" />
            </label>
            <label
                className={isToggled ? 'txt-switch-active' : "txt-switch-inactive"}
            >
                {isToggled ? "Allowed" : "Blocked"}
            </label>
        </div>
    );
}

export default ToggleSwitch;