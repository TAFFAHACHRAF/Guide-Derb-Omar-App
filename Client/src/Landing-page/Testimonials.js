import React from "react";
import test1 from "./assets/svgs/test-img-1.svg"
import star from "./assets/svgs/star.svg"
import test2 from "./assets/svgs/test-img-2.svg"
import test3 from "./assets/svgs/test-img-3.svg"
import "./css/style.css" 
import "./css/style.css.map"

function Testimonials(){
    return(
        <section className="section2" id="testimonials">
            <div className="testimonials">
                <h1>Trusted by Thousands of Happy Customer</h1>
                <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
                <div className="testimonials__container">
                    <div className="testimonial">
                        <div className="card">
                            <div className="card-header">
                                <div className="person-info">
                                    <img src={test1} alt="img testimonial 1" />
                                    <div className="person-name">
                                        <h4>Viezh Robert</h4>
                                        <p>Warsow, Poland</p>
                                    </div>
                                </div>
                                <div className="rate">
                                    <p>
                                        <span>4.5</span>
                                        <img src={star} alt="star img" />
                                    </p>
                                </div>
                            </div>
                            <div className="card-body">
                                <p>
                                    “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                            <div className="person-info">
                                <img src={test2} alt="img testimonial 1" />
                                <div className="person-name">
                                    <h4>Yessica Christy</h4>
                                    <p>Shanxi, China</p>
                                </div>
                            </div>
                            <div className="rate">
                                <p>
                                    <span>4.5</span>
                                    <img src={star} alt="star img" />
                                </p>
                            </div>
                            </div>
                            <div className="card-body">
                            <p>
                                “I like it because I like to travel far and still can connect with high speed.”.
                            </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                            <div className="person-info">
                                <img src={test3} alt="img testimonial 1" />
                                <div className="person-name">
                                    <h4>Kim Young Jou</h4>
                                    <p>Seoul, South Korea</p>
                                </div>
                            </div>
                            <div className="rate">
                                <p>
                                    <span>4.5</span>
                                    <img src={star} alt="star img" />
                                </p>
                            </div>
                            </div>
                            <div className="card-body">
                            <p>
                                “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                            </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <div className="person-info">
                                    <img src={test1} alt="img testimonial 1" />
                                    <div className="person-name">
                                        <h4>Viezh Robert</h4>
                                        <p>Warsow, Poland</p>
                                    </div>
                                </div>
                                <div className="rate">
                                    <p>
                                        <span>4.5</span>
                                        <img src={star} alt="star img" />
                                    </p>
                                </div>
                            </div>
                            <div className="card-body">
                                <p>
                                    “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="control-testimonial">
                        <div className="dotes">
                                <div className="dote dote-1 active"></div>
                                <div className="dote dote-2"></div>
                                <div className="dote dote-3"></div>
                                <div className="dote dote-4"></div>
                        </div>
                        <div className="left-right">
                            <button className="left"> <i className="fa-solid fa-arrow-left-long" color="#F53855" ></i></button>
                            <button className="right"> <i className="fa-solid fa-arrow-right-long"  color="#F53855"></i></button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Testimonials