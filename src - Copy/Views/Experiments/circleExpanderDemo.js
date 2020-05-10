import React, { useState } from "react";
import Slider from "./slider";

var circleProps = {
    points: [3,6,9,13.5,20.25],
    pointsString: "3,6,8,13.5,20.25",
    factor: 2,
}

var startPoints = [2,6,9,13.5,20.25];

function CircleExpanderDemo() {

    const [factor, setFactor] = useState(4);
    const [points, setPoints] = useState(circleProps.points); 
    
    const xOffset = 10, yOffset = 10;

    circleProps.sliderUpdated = (newVal) => {
        circleProps.factor = newVal;
        setFactor(circleProps.factor);
    }   

    function delimit(str) {
        // determine Delimeter
        return str.split(/[ ,]+/);
    }

    const pointsListChanged = (x) => {
        console.log(x);
        x = delimit(x);
        circleProps.points = x.map(v => { if (v !== "") return parseInt(v); });
        setPoints(circleProps.points);
    }   

    return (
        <div>
            <input type="text" value={circleProps.points} onChange={e => (pointsListChanged(e.target.value))}/> 

            <Slider {...circleProps} />
            <svg style={{width: '800px', height: '500px'}}>
                {circleProps.points.map(val => (
                    <circle r={val * (1 + circleProps.factor / 8 )} cx={val*circleProps.factor + xOffset} cy={val*circleProps.factor + yOffset}></circle>
                    ))}
            </svg>
        </div>
    )
}

export default CircleExpanderDemo;