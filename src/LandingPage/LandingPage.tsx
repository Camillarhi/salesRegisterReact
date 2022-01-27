import landingpage from './landingpage.jpeg'
import "./landingpage.css"

export default function LandingPage(){
    return(
        <>
        <div className="landingpage">
            <img src={landingpage} alt="landingpage" className="landing_page"/>
            <h1 className="landing_title">Welcome To My Playground</h1>
        </div>
        </>
    )
   
}