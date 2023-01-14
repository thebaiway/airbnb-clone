import heroImg from '../images/photo-grid.png'

export default function Hero () {
    return (
        <div>
            <div className="hero--div">
                <div className="hero--img_div">
                    <img src={heroImg} alt="" className="hero--img"></img>
                </div>
                <div className="hero-desc_div">
                    <h1 className="hero--title">Online Experiences</h1>
                    <p className="hero--para">Join unique interactive activities led by one-of-a-kind hosts-- all without leaving home.</p>
                </div>
            </div>
        </div>
    )
}