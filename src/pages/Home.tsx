
import Background from '../assets/Stills/M4.jpg'


function Home() {
  return (
    <div 
    style={{ backgroundImage: `url(${ Background })`}} 
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
        <div className='flex place-items-center h-screen'>
            <h3 className='p-5 bg-white bg-opacity-60 text-black rounded-full'>Welcome to the Phonebook</h3>
        </div>
    </div>
  )
}

export default Home