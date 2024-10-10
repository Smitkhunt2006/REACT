import { Link, Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                        <div class="container-fluid">
                          <img class="navbar-brand" src="https://assets.kerzner.com/api/public/content/434185142a3644718cad792aff117d47?v=64ffc60c&t=w2880  " alt="API LOGO" width="75" height="65" /> 
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <Link class="nav-link" to="/"><b>Home</b></Link>
                                </li>
                                <li class="nav-item">
                                <Link class="nav-link" to="/HotelDetails"><b><u>Hotel Details</u></b></Link>
                                </li>
                                <li class="nav-item">
                                <Link class="nav-link" to="/CustomerDetails"><b><u>Customer Details</u></b></Link>
                                </li>
                                <li class="nav-item">
                                <Link class="nav-link" to="/rooms"><b><u>Check My Room</u></b></Link>
                                </li>
                            </ul>
                            
                            </div>
                        </div>
                        </nav>
                    </div>
                </div>

                <div>
                    
                </div>
    
                <div className="row">
                    <div className="col m-3">
                        <Outlet />
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Layout;  