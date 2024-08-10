import { Button } from 'flowbite-react';

import { FaGithubSquare } from 'react-icons/fa';

export default function CallToAction() {
    return (
        <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
            <div className="flex-1 justify-center flex flex-col">
                <h2 className='text-3xl font-bold'>
                    This Is My GitHub
                </h2>
                <p className='text-gray-500 my-2'>
                    Checkout for more JavaScript Projects
                </p>
                <Button gradientDuoTone='greenToBlue' className='rounded-tl-xl rounded-bl-none'>
                    <a
                        className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href="https://github.com/Ahmedsalah000"
                        target="_blank"
                    >
                        <FaGithubSquare />
                    </a>
                </Button>
            </div>
            <div className="p-7 flex-1">
                <img src="https://cdn.servermania.com/kb/KB-MERN-Featured.jpg" />
            </div>
        </div>
    )
}