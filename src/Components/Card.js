import cardStar from '../images/star.png'

export default function Card (props) {

    let badgeText 
    if (props.x.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.x.location === "ONLINE") {
        badgeText = "ONLINE"
    } 

    return (
      
    <div className="card--div">
             <img className="card--div_img" src={props.x.coverImg} alt=""></img>
            {badgeText && <p className="card--div_sold-out">{badgeText}</p>}
        <div className="card--div_star">
            <img className="card--div_star-img" src={cardStar} alt=""></img>
            <p className="card--div_star-desc">{props.x.stats.rating}<scan> ({props.x.stats.reviewCount}) • {props.x.country} </scan></p>
        </div>
        <div className="card--div_price">
            <p>{props.x.title}</p>
            <p><b>From ${props.x.price}</b> / person</p>
        </div>
    </div>
    )
}