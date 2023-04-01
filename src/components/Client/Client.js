/* eslint-disable */
import TFIL from './Images/TFI.jpg';
import './Client.css';
const Client = () => {
    return (
        <div className='container-fluid mt-5'>
        <hr/>
            <div className='row'>
                <div style={{textAlign:'center'}}>
                    <p className='fs-2 fw-bold secTitle'>Our Supporters</p>
                </div>
            </div>
            <div className='row justify-content-around' style={{}}>
                <div className='col-md-3 col-sm-5 client-section'>
                    <img src={TFIL} className='client-img rounded border' alt='logo'/>
                </div>
                <div className='col-md-3 col-sm-5 client-section'>
                    <img src={TFIL} className='client-img rounded border' alt='logo'/>
                </div>
                <div className='col-md-3 col-sm-5 client-section'>
                    <img src={TFIL} className='client-img rounded border' alt='logo'/>
                </div>
                <div className='col-md-3 col-sm-5 client-section'>
                    <img src={TFIL} className='client-img rounded border' alt='logo'/>
                </div>
            </div>
        </div>
    )
}

export default Client