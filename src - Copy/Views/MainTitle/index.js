import React from 'react';
import logo from './Flat_Coffee_Beans_Leaf-512.png'

function MainTitle() {

    const styles = {   
        content: {
          width: "100%",
          backgroundColor: "rgba(56, 29, 15, 0.9)",
        }
    };

    return (
        <div className='main-title' style={styles.content}>
            <h1>HomeRoast® UK</h1>
        </div>
    );
};

export default MainTitle;