/* eslint-disable */
import './About.css';
import Sports from './sports.png'
;const About = () =>{
    return(
        <>
                <section id="about" class="about">
                <hr/>
                    <div class="container">

                        <div class="section-title" data-aos="fade-up">
                        <h2>About Us</h2>
                        </div>

                        <div class="row content">
                        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="150">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                            </p>
                            <ul>
                            <li><i class="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                            <li><i class="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                            <li><i class="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                            </ul>
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
                            <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <a href="#" class="btn-learn-more">Learn More</a>
                        </div>
                        </div>

                    </div>
                </section>
                <section id="counts" class="counts">
                    <div class="container">
                        <div class="row">
                        <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
                            <img src={Sports} alt="" class="img-fluid"/>
                        </div>
                        <div class="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
                            <div class="content d-flex flex-column justify-content-center">
                            <div class="row">
                                <div class="col-md-6 d-md-flex align-items-md-stretch">
                                <div class="count-box">
                                    <i class="bi bi-emoji-smile"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="1" class="purecounter">100</span>
                                    <p><strong>Happy Students</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                                </div>
                                </div>

                                <div class="col-md-6 d-md-flex align-items-md-stretch">
                                <div class="count-box">
                                    <i class="bi bi-journal-richtext"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" class="purecounter">30</span>
                                    <p><strong>Schools</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                                </div>
                                </div>

                                <div class="col-md-6 d-md-flex align-items-md-stretch">
                                <div class="count-box">
                                    <i class="bi bi-clock"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" class="purecounter">14</span>
                                    <p><strong>Professionals trained</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                                </div>
                                </div>

                                <div class="col-md-6 d-md-flex align-items-md-stretch">
                                <div class="count-box">
                                    <i class="bi bi-award"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter">30</span>
                                    <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                    </div>
                    </section>
        </>
    )
}

export default About;