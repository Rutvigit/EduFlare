import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/nexticon.png'
import back_icon from '../../assets/backicon.png'
import user_1 from '../../assets/user1.png'
import user_2 from '../../assets/user2.png'
import user_3 from '../../assets/user3.png'
import user_4 from '../../assets/user4.png'


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className='user-info'>
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Jackson Davis</h3>
                                    <span>EduFlare, USA</span>
                                </div>
                            </div>
                            <p>
                                "Studying at Eduflare University has been an incredible experience. The courses are well-structured, the professors are highly knowledgeable, and the resources provided truly support our academic growth. Thanks to the university's focus on hands-on learning. Scoring well here feels like a direct result of the supportive learning environment and the encouragement to push beyond my limits."
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className='user-info'>
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Emma Collins</h3>
                                    <span>EduFlare, USA</span>
                                </div>
                            </div>
                            <p>
                                "EduFlare University has been an exceptional place for my academic journey. The faculty is knowledgeable, supportive, and always willing to go the extra mile to ensure we grasp key concepts. The university's innovative teaching methods and practical approach to learning have truly prepared me for the real world. I'm grateful for the opportunities I've had here."
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className='user-info'>
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Sophia Carter</h3>
                                    <span>EduFlare, USA</span>
                                </div>
                            </div>
                            <p>
                                "Amazing EduFlare University has truly exceeded my expectations. The faculty is incredibly supportive, always going the extra mile to ensure we succeed, while the curriculum is both innovative and practical. The vibrant campus life and diverse student community make learning here a unique and enriching experience."
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className='user-info'>
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Ethan Miller</h3>
                                    <span>EduFlare, USA</span>
                                </div>
                            </div>
                            <p>
                                "Studying at Eduflare University has been a transformative experience. The quality of education is exceptional, with knowledgeable professors who are always eager to support and guide us. Eduflare has empowered me to not just succeed, but to thrive."
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Testimonials
