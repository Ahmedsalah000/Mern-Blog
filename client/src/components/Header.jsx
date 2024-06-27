import { Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <Navbar className='border-b-2'>
        <Link to='/'>
            <span className="self-center whitespace-nowrap text-xl text-red-500 font-semibold dark:text-white">
                Blog
            </span>
        </Link>

        </Navbar>
    )
}
