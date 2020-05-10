import React, { useState } from "react";
import Slider from "./slider";
import AngleSlider from "./angleSlider";

var circleProps = {
    title: "expansion factor",
    points: [1.78,2.67,4,6,9,13.5,20.25,30.375,45.56,68.344],
    pointsString: "1.78,2.67,4,6,9,13.5,20.25,30.375,45.56,68.344]",
    factor: 2,
}

const svgWidth = 800;
const xWidth = 800;
const yHeight = 380;

function CircleExpanderDemo() {

    const [factor, setFactor] = useState(2);
    const [points, setPoints] = useState(circleProps.points); 
    const [yAngle, setAngle] = useState(0.75); 
    
    const xOffset = xWidth / 4, yOffset = 50, sizeFactor = 0.6, fillOpacity = 0.9;

    const expansionUpdated = (newVal) => {
        setFactor(newVal);
    }   

    const angleUpdated = (newAngle) => {
        setAngle(newAngle);
    };

    function getMin() { 
        var min = circleProps.points.length > 0 ? circleProps.points[0] : 0;
        circleProps.points.forEach((p) => {
            min = p > min ? min : p;
        });
        return min; 
    };

    function getMax() { 
        var max = circleProps.points.length > 0 ? circleProps.points[0] : 0;
        circleProps.points.forEach((p) => {
            max = p > max ? p : max;
        });
        return max; 
    };

    function getMean() { 
        if (circleProps.points.length == 0) return 0;
        var total = 0;
        circleProps.points.forEach((p) => { total += p; });
        return total / circleProps.points.length; 
    };

    function delimit(str) {
        // determine Delimeter
        return str.split(/[ ,]+/);
    };

    const pointsListChanged = (newPoints) => {
        setPoints(newPoints);
        newPoints = delimit(newPoints);
        circleProps.points = newPoints.filter(v => { return v !== ""; }).map(m => { return parseFloat(m); });
    };

    function scaler(v) {
        var colourScale = [0,255];
        var sMin = colourScale[0];
        var sMax = colourScale[1];
        var l = getMin();
        var h = getMax();
        var percentage = (v - l) / (h - l);
        let scaleBand = (percentage * (sMax - sMin)) + sMin;
        return scaleBand;
    }

    function color(c) {
        var factor = scaler(c);
        var R =  factor;  // "Woody":(255 - factor); "Stinger": factor; "GreenTrees":(255 - factor) / 3;
        var G = factor / 1.5;
        var B = (255 - factor) / 2.5;
        return "rgba("+(R)+","+G+","+B+","+fillOpacity+")";
    };

    return (
        <div>
            <input type="text" value={points} onChange={e => (pointsListChanged(e.target.value))}/> 
            <div>
            <div>Min: {getMin()}</div>
            <div>Max: {getMax()}</div>
            <div>Mean: {getMean()}</div>
            </div>
            <div class="sliders">
                <Slider expansionUpdated={expansionUpdated} />
                <AngleSlider angleUpdated={angleUpdated} />
            </div>
            <div class="svg-render">
                <svg style={{width: 800, height: 480}}>
                    {circleProps.points.map(val => (
                        <circle fill={color(val)} r={val * sizeFactor * (1 + factor / 8 )} cx={(val*factor) + xOffset} cy={val*factor * yAngle + yOffset}></circle>
                    ))}
                    {circleProps.points.map(val => (
                        <circle fill={color(val)} r={val * sizeFactor * (1 + factor / 8 )} cx={xWidth - (val*factor + xOffset)} cy={val*factor * yAngle + yOffset}></circle>
                    ))}
                    {circleProps.points.map(val => (
                        <circle fill={color(val)} r={val * sizeFactor * (1 + factor / 8 )} cx={val*factor + xOffset} cy={yHeight - val*factor * yAngle + yOffset}></circle>
                    ))}
                    {circleProps.points.map(val => (
                        <circle fill={color(val)} r={val * sizeFactor * (1 + factor / 8 )} cx={xWidth - (val*factor + xOffset)} cy={yHeight - val*factor * yAngle + yOffset}></circle>
                    ))}
                </svg>
            </div>
        </div>
    )
}

export default CircleExpanderDemo;