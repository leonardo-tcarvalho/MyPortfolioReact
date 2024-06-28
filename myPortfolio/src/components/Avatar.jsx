import AvatarImage from '../images/Avatar.png'
import BackgroundImage from "../images/BgImage.jpg"

export function Avatar() {
    return (
        <div className='flex items-end relative w-36 h-36 mt-5 rounded-3xl px-1 shadow-10 bg-cover object-center' style={{backgroundImage: `url(${BackgroundImage})`}}>
            <img className='rounded-2.5xl drop-shadow-10' src={AvatarImage} alt="" />
        </div>
    )
}