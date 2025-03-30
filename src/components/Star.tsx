import star1 from "../images/img/star/Star 3.png"
import star2 from "../images/img/star/Star 4.png"
import star3 from "../images/img/star/Star 5.png"
import star4 from "../images/img/star/Star 6.png"
import star5 from "../images/img/star/Star 7.png"

export default function Star() {
    return (
        <div className="flex items-center gap-0.5">
            <img src={star1} alt="star" className="w-4 h-4" />
            <img src={star2} alt="star" className="w-4 h-4" />
            <img src={star3} alt="star" className="w-4 h-4" />
            <img src={star4} alt="star" className="w-4 h-4" />
            <img src={star5} alt="star" className="w-4 h-4" />
        </div>
    )
}
