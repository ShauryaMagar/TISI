import './Navbar.css'
import Logo from './TISI.png';
const Navbar = () =>{
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">

                    <a class="navbar-brand" href="#">
                        <img src={Logo} alt="Logo" width="110" height="110" class="d-inline-block align-text-top"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item p-4">
                                <a class="nav-link active" style={{color:'#4e71b7'}} aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item p-4">
                                <a class="nav-link" style={{color:'#4e71b7'}} href="#">About</a>
                            </li>
                            <li class="nav-item p-4">
                                <a class="nav-link" style={{color:'#4e71b7'}} href="#">Team</a>
                            </li>
                            <li class="nav-item p-4">
                                <a class="nav-link" style={{color:'#4e71b7'}} href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;