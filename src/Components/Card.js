import cardStar from '../images/star.png'

export default function Card (props) {

    let badgeText 
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "ONLINE") {
        badgeText = "ONLINE"
    } else {
   
    }

    return (
      
    <div className="card--div">
             <img className="card--div_img" src={props.img} alt=""></img>
            <p className="card--div_sold-out">{badgeText}</p>
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