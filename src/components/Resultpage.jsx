import React from 'react'
import './css/Resultpage.css'

export default function Resultpage() {
  return (
    <>
        <div className="container-3">
            <div className="result">
                <h1>Result</h1>
            </div>

            <div className="container-main">
                <div className='quote'>
                    <h3>You need more practice</h3>
                </div>
                    <div className="score-text">
                    <h2>Your score is 20%</h2>
                </div>

                <div className='details-container'>
                    <div className='details'>
                        <p>Total number of questions</p>
                        <p>15</p>
                    </div>
                    <div className="details">
                        <p>Total number of correct answers</p>
                        <p>9</p>
                    </div>
                    <div className="details">
                        <p>Number of correct answers</p>
                        <p>5</p>
                    </div>
                    <div className='details'>
                        <p>Number of incorrect answers</p>
                        <p>4</p>
                    </div>
                </div>
            </div>

            <div className="navigation">
                <button className='Play-again'>Play Again</button>
                <button className='back-to-home'>Back to home</button>
            </div>
        </div>
    </>
  )
}
