import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Provider } from '../config/firebase'


function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Provider.google);
        if( response.user ) {
            location.reload();
        }
    }
    
    const dropDown = () => {
        setIsVisible(!isVisible)
    }
  
    const clicked = () => {
        setIsVisible(false)
    }
  
    return (
    <nav className='flex items-center justify-between flex-wrap bg-gray-700 p-6'>
        <div className='flex items-center flex-shrink-0 text-teal-200 mr-6'>
            <Link to='/' className='font-semibold text-xl tracking-tight'>Digit</Link>
        </div>
        <div className="block">
            <button 
                onClick={dropDown}
                className="flex items-center px-3 py-2 text-gray-400 border rounded border-gray-400 hover:text-white hover:border-white"
            >
                <i className="fas fa-bars"></i>
            </button>
        </div>
        {isVisible ? (
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm lg:flex-grow">
                    <Button className="p-3 m-5 bg-grey-200 justify-center">
                        <div>
                            <Link to='/' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                            text-teal-200 hover:text-white mr-4'>
                                Home
                                </Link>
                        </div>
                    </Button>
                    <Button className="p-3 m-5 justify-center">
                        <div>
                            <Link to='/about' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                            text-teal-200 hover:text-white mr-4'>
                                About
                                </Link>
                        </div>
                    </Button>
                    <Button className="p-3 m-5 justify-center">
                        <div>
                            <Link to='/dashboard' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                            text-teal-200 hover:text-white mr-4'>
                                Dashboard
                                </Link>
                        </div>
                    </Button>
                    <Button className="p-3 m-5 justify-center">
                        <div>
                            <Link to='/contact' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                            text-teal-200 hover:text-white mr-4'>
                                Contact
                                </Link>
                        </div>
                    </Button>
                    {
                        !auth.currentUser ?

                        <Button className='p-3 m-5  justify-center'>
                            <div>
                                <Link to="/" onClick={ () => { signInOnClick() }} className="flex place-items-center mt-4
                                lg:inline-block lg:mg-0 text-teal-200 hover:text-white">
                                    LogIn                                
                                </Link>
                            </div>
                        </Button>
                        :
                        <Button className='p-3 m-5 justify-center'>
                            <div>
                                <Link to="/" onClick={ () => { signOutOnClick() }} className="flex place-items-center mt-4
                                lg:inline-block lg:mg-0 text-teal-200 hover:text-white">
                                    Sign Out                               
                                </Link>
                            </div>
                        </Button>
                    }
                </div>
            </div>
            ) : (
            <></>
            )}
    </nav>
  )
}

export default Navbar
