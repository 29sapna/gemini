import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets'; // Ensure this path is correct and assets are available
import { Context } from '../../context/Context';

const Main = () => {
    const {
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput,
        input
    } = useContext(Context);

    return (
        <div className='main'>
            <div className='nav'>
                <p>Agentic AI</p>
                <img src="https://img.freepik.com/free-vector/spring-background-with-girl-floral-wreath_23-2147620260.jpg?t=st=1735569972~exp=1735573572~hmac=9a1c088cfd25b1a7ef99a67cfd0bb3276d21ebb008dd4e00bf0cf0d0e35a0781&w=826" alt='User Icon' />
            </div>
            <div className='main-container'>
                {!showResult ? (
                    <>
                        <div className='greet'>
                            <p><span>Hello, Sapna.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className='cards'>
                            <div className='card'>
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt='Compass Icon' />
                            </div>
                            <div className='card'>
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt='Bulb Icon' />
                            </div>
                            <div className='card'>
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt='Message Icon' />
                            </div>
                            <div className='card'>
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt='Code Icon' />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='result'>
                        <div className='result-title'>
                            <img src="https://img.freepik.com/free-vector/spring-background-with-girl-floral-wreath_23-2147620260.jpg?t=st=1735569972~exp=1735573572~hmac=9a1c088cfd25b1a7ef99a67cfd0bb3276d21ebb008dd4e00bf0cf0d0e35a0781&w=826" alt='User Icon' />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className='result-data'>
                            <img src={assets.gemini_icon} alt='Gemini Icon' />
                            {loading ? (
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}
                <div className='main-bottom'>
                    <div className='search-box'>
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type='text'
                            placeholder='Enter a prompt here'
                        />
                        <div className='search-icons'>
                            <img src={assets.gallery_icon} alt='Gallery Icon' />
                            <img src={assets.mic_icon} alt='Mic Icon' />
                            {input?<img
                                onClick={() => onSent(input)}
                                src={assets.send_icon}
                                alt='Send Icon'
                            />:null}
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gemini may display inaccurate info, including about people, so double-check its responses.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
