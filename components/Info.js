import React from 'react'

export default function Info(){
    return (
        <div className="info-section">
            <img src="Images/PersonalPic.jpg"/>
            <div className="text">
            <h1>Aladdin Elshamy</h1>
            <h2>Frontend Developer</h2>
            <h3>Aladdinelshamy.website</h3>
            <div className="buttons">
                <button><img src="Images/Icon.png"/><p>Email</p></button>
                <button><img src="Images/Vector.png"/><p>LinkedIn</p></button>
            </div>
            </div>
        </div>
    )
}