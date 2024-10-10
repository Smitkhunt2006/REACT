import React from 'react'
import { Link , Outlet} from "react-router-dom";

export default function HotelDetail() {
  return (
    <>
   <div className="container">
       <div className="row">
            <div className="col">

            <h1><center>Select Your Country</center></h1>

                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">

    <Link to="/India" className="btn btn-primary mx-4">INDIA</Link>

    <Link to="/USA" className="btn btn-primary mx-4">USA</Link>

    <Link to="/Dubai" className="btn btn-primary mx-4">Dubai</Link>

    <Link to="/Russia" className="btn btn-primary mx-4">Russia</Link>

    <Link to="/Canada" className="btn btn-primary mx-4">Canada</Link>

    <Link to="/China" className="btn btn-primary mx-4">China</Link>

    <Link to="/Australia" className="btn btn-primary mx-4">Australia</Link>

    <Link to="/London" className="btn btn-primary mx-4">London</Link>

    <Link to="/Paris" className="btn btn-primary mx-4">Paris</Link>

    <Link to="/Japan" className="btn btn-primary mx-4">Japan</Link>

                    </div>
                </nav>
           </div>
      </div>
  </div>    

<div>
<img src='https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg' alt="API LOGO" width="600" height="480" /> 

<img src='https://www.gitanviaggi.it/wp-content/uploads/2023/06/USA_New_York_skyline_gitanviaggi_shg.jpg' alt="API LOGO" width="650" height="480" /> 
</div>

<div>
<img src='https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/05/DEST_UAE_DUBAI_SKYLINE_SUNSET_GettyImages-1070127800_Universal.jpg' alt="API LOGO" width="600" height="480" /> 

<img src='https://www.visitrussia.com/images/img/plan-slider/plan-slider-3.jpg' alt="API LOGO" width="650" height="480" /> 
</div>



<div>
<img src='https://hblimg.mmtcdn.com/content/hubble/img/dest_img/mmt/activities/m_Toronto_destination_main_1_l_572_1000.jpg' alt="API LOGO" width="600" height="480" /> 

<img src='https://thumbs.dreamstime.com/b/big-ben-westminster-bridge-river-thames-london-uk-sunny-day-english-symbol-lovely-puffy-clouds-57359222.jpg' alt="API LOGO" width="650" height="480" /> 
</div>

<div>
<img src='https://media.timeout.com/images/106181719/image.jpg' alt="API LOGO" width="600" height="480" /> 

<img src='https://c4.wallpaperflare.com/wallpaper/358/204/54/amazing-city-view-of-melbourne-australia-hd-photos-wallpaper-preview.jpg' alt="API LOGO" width="650" height="480" /> 
</div>
  




   </>
  )
}
