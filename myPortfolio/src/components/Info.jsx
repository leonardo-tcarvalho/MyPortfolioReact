import { Email } from '../images/Email';

export function Info() {
    return (
        <div className="w-full mt-5">
            <div className="flex justify-start items-center">
                <div className='flex justify-center items-center w-[3.1rem] h-[3.1rem] border-gradient rounded-xl'>
                    <div className="flex items-center justify-center w-12 h-12 bg-zinc-800 rounded-xl shadow-5">
                        <Email />
                    </div>
                </div>
            </div>
        </div>
    )
}