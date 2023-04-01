import './Vision.css'
const Vision = () => {
    return(
        <>
            <section id="services" class="services">
            <hr/>
                <div class="container mt-5">

                    <div class="section-title" data-aos="fade-up">
                    <h2>Vision</h2>
                    <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fug</p>
                    </div>

                    <div class="row justify-content-around">
                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                        <div class="icon"><i class="bi bi-person-circle"></i></div>
                        <h4 class="title"><a href="">Leading Self</a></h4>
                        <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                        <div class="icon"><i class="bi bi-people-fill"></i></div>
                        <h4 class="title"><a href="">Leading Others</a></h4>
                        <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                        <div class="icon"><i class="bi bi-flag-fill"></i></div>
                        <h4 class="title"><a href="">Leading Nation</a></h4>
                        <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                        </div>
                    </div>

                    </div>

                </div>
            </section>
        </>
    );
}

export default Vision;