import React from 'react'
import './css/Quizpage.css'


export default function Quizpage() {
  return (
    <>
        <div className="container-2">
            <div className='question'>
                <h1>Question</h1>
                <h5>1 of 15</h5>
            </div>

            <div className="data-values">
            <div className='question-data'>
                <h4>Name the country which is not a part of NATO</h4>
            </div>

            <div className="option-container">
                <p className='option'>India</p>
                <p className='option'>Germany</p>
                <p className='option'>Poland</p>
                <p className='option'>Japan</p>
            </div>
            </div>

            <div className="low-buttons">
                <button className='prev'>Previous</button>
                <button className='next'>Next</button>
                <button className='submit'>Submit</button>
                <button className='quit'>Quit</button>
            </div>
        </div>
    </>
  )
}
