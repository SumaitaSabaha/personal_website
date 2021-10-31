import React, {useState} from 'react';
import '../styles/mybutton_styles.css';

    function MyButton(props) {
        const [clicked, setClicked] = useState(false);
    
        function button_clicked() {
            
            setClicked(true);
    
            setTimeout(() => {
                setClicked(false);
            }, 2000);
        }
    return (
        <a href="mailto:hagumiyasumaitasabaha9@gmail.com" >
            <div className= "button-container">
                <div onClick = {button_clicked} className={`my_button ${clicked ? 'clicked' : null}`}>
                    <span>{props.name}</span>
                </div>
                <img src= "./images/Image2.png" alt="" className={`button-image ${clicked ? 'launch_plane' : null}`}/>
            </div>
        </a>
    )
}

export default MyButton;