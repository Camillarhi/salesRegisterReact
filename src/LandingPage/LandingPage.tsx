import landingpage from './landingpage.png'
import "./landingpage.css"

export default function LandingPage(){
    return(
        <>
        <div className="landingpage">
            <img src={landingpage} alt="landingpage" className="landing_page"/>
            <h1 className="landing_title">Landing Page Title</h1>
        </div>
        </>
    )
   
}