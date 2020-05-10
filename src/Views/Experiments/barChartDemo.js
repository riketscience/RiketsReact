import React, { useState } from "react";
import Slider from "./slider";
import AngleSlider from "./angleSlider";

var circleProps = {
    points: [1.78,2.67,4,6,9,13.5,20.25,30.375,45.56]
}

const xWidth = 800;
const yHeight = 380;

function BarchartDemo() {

    const [factor, setFactor] = useState(2);
    const [points, setPoints] = useState(circleProps.points); 
    const [yAngle, setAngle] = useState(0.75); 
    
    const xOffset = 2, yOffset = 2, sizeFactor = 0.6, fillOpacity = 0.9;

    const expansionUpdated = (newVal) => { setFactor(newVal); }   
    const angleUpdated = (newAngle) => { setAngle(newAngle); };

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

    function colorScale(v) {
        var min = 0;
        var max = 250;
        var l = getMin();
        var h = getMax();
        var percentage = (v - l) / (h - l);
        let scaleBand = (percentage * (max - min)) + min;
        return scaleBand;
    }

    function heightScale(v, min, max) {
        var l = getMin();
        var h = getMax();
        var percentage = (v - l) / (h - l);
        let scaleBand = (percentage * (max - min)) + min;
        return scaleBand;
    }

    function color(c) {
        var factor = colorScale(c, 0, 255);
        var R =  factor;  // "Woody":(255 - factor); "Stinger": factor; "GreenTrees":(255 - factor) / 3;
        var G = factor / 1.5;
        var B = (255 - factor) / 2.5;
        return "rgba("+(R)+","+G+","+B+","+fillOpacity+")";
    };

    const svgWidth = 796;
    const svgHeight = 476;

    function getHeight(v) {
        var max = getMax();
        return svgHeight - (v * svgHeight / max);
    }

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
                    <rect stroke="#F00" fill="transparent" x="2" y="2" width={svgWidth} height={svgHeight}></rect>
                    {circleProps.points.map((val, index) => (
                        <rect fill={color(val)} x={xOffset + (index*svgWidth/circleProps.points.length)} y={getHeight(val)+ yOffset} width={svgWidth/circleProps.points.length} height={svgHeight - getHeight(val)}></rect>
                    ))}
                </svg>
            </div>
        </div>
    )
}

export default BarchartDemo;