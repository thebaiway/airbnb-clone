import cardImg from '../images/katie-zaferes.png'
import cardStar from '../images/star.png'

export default function Card () {
    return (
    <div className="card--div">
            <img className="card--div_img" src={cardImg} alt=""></img>
            <p className="card--div_sold-out">SOLD OUT</p>
            <div className="card--div_star">
                <img className="card--div_star-img" src={cardStar} alt=""></img>
                <p className="card--div_star-desc">5.0<scan> (6) • USA </scan></p>
            </div>
            <div className="card--div_price">
            <p>Life lessons with Katie Zaferes</p>
            <p><b>From $136</b> / person</p>
            </div>
    </div>
    )
}