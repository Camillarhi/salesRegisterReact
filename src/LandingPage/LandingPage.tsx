import "./landingpage.css"
import landingpage from './landingpage.jpeg'

export default function LandingPage(props:landingPageProps){
    return(
        <>
        <div className="landingpage">
            <img src={landingpage} alt="landingpage" className="landing_page"/>
            <h1 className="landing_title">Welcome</h1>
            <a  href='/login' className="btn btn-outline-dark btn-rounded btn-fw landing_button" onClick={props.onClick} >Launch</a>
        </div>
        </>
    )
   
}


interface landingPageProps{
    onClick?():void; 
}