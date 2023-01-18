import cardStar from '../images/star.png'

export default function Card (props) {
    return (
    <div className="card--div">
             <img className="card--div_img" src={props.img} alt=""></img>
             <p className="card--div_sold-out">{props.status}</p>
        <div className="card--div_star">
            <img className="card--div_star-img" src={cardStar} alt=""></img>
            <p className="card--div_star-desc">{props.rating}<scan> ({props.reviewCount}) • {props.country} </scan></p>
        </div>
        <div className="card--div_price">
            <p>{props.title}</p>
            <p><b>From ${props.price}</b> / person</p>
        </div>
    </div>
    )
}