import React, {useState} from "react";

const TrafficLight = () => {

    let [color, setColor] = useState("");

    function changeColor (event) {
        setColor(event.target.name);
    }
        return (
         <div className="d-flex flex-column bg-black justify-content-center rounded" style={{width: "120px"}}>
            <input 
                type="button" 
                name="red" 
                style={{height: "100px", width: "100px"}} 
                onClick={changeColor} 
                className={`${color === 'red' ? 'shadow': 'opacity-50'} rounded-circle bg-danger m-2`}>
            </input>

            <input 
                type="button" 
                name="yellow" 
                style={{height: "100px", width: "100px"}} 
                onClick={changeColor} 
                className={`${color === 'yellow' ? 'shadow': 'opacity-50'} rounded-circle bg-warning m-2`}>
            </input>

            <input 
                type="button" 
                name="green" 
                style={{height: "100px", width: "100px"}} 
                onClick={changeColor} 
                className={`${color === 'green' ? 'shadow': 'opacity-50'} rounded-circle bg-success m-2`}>
            </input>
         </div>
        );
};

export default TrafficLight;