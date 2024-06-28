import AvatarImage from '../images/Avatar.png'

export function Avatar() {
    return (
        <div className='flex items-end relative w-36 h-36 mt-5 bg-zinc-600 rounded-3xl px-1 shadow-10'>
            <img className='rounded-2.5xl drop-shadow-10' src={AvatarImage} alt="" />
        </div>
    )
}