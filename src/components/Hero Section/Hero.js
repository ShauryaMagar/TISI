/* eslint-disable */
import cover from './images/kids.jpg';
import './Hero.css'
const Hero = () =>{
    return (
        <div className="container-fluid">
            <div className="row justify-content-around">
                <div className="col-md-6 col-sm-10">
                    <img src={cover} className='img-fluid shadow rounded m-2' alt="Kids playing"></img>
                </div>
                <div className="col-md-6 col-sm-10 d-flex align-items-center ">
                    <div className='p-3'>
                        <p className="fw-bold" style={{color:'#4e71b7', fontSize:'3rem'}}>The Indian Sports Initiative</p>
                        <p className="fs-4">India ke har gully mai ek Olympian baitha hai waiting to be discovered</p>
                        <button className="button-28" >
                            About Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Hero;