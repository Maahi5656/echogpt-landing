import React from 'react'

import { GoPaperAirplane } from "react-icons/go";

export default function Dashboard() {
    return (
        <>
            <div className="cardBox">
                <div className="card">   
                    <div>
                        <div className="numbers">Chat</div>
                        <div className="cardName">Ask Anything</div>
                    </div>
                    <div className="iconBox">
                        <i className="fas fa-comment" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <div className="numbers">Write</div>
                        <div className="cardName">Create Content</div>
                    </div>
                    <div className="iconBox">
                        <i className="fas fa-solid fa-copy" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <div className="numbers">Translate</div>
                        <div className="cardName">Learn Languages</div>
                    </div>
                    <div className="iconBox">
                        <i className="fas fa-solid fa-language" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <div className="numbers">Analyze</div>
                        <div className="cardName">Get Insights</div>
                    </div>
                    <div className="iconBox">
                        <i className="fas fa-regular fa-book-open"></i>
                    </div>
                </div>
            </div>    
            <div className="details">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h2>Good Morning, Joe</h2>
                        <p>What would you like to do today?</p>
                        <br />
                        <div className='chatDiv'>
                            <form action="">
                                <textarea placeholder='Ask A Question...' name="" id=""></textarea> 
                                <div className='uploadButton'>
                                    <button type="submit" className='submitButton'>
                                        <GoPaperAirplane />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    )
}
