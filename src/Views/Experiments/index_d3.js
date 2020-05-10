import React, { useRef, useEffect } from 'react';
// import { select } from d3;

function Experiments() {
    const svgRef = useRef();
      
    return (
        <div>
            <h3>Experiments!!</h3>
            <p>Let's do som D3.js :)</p>
            <svg ref={svgRef}>

            </svg>
        
        </div>
    );
};

export default Experiments;