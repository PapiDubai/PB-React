
import Background from '../assets/Stills/Galaxy-M4.jpg'

function Contact() {
  return (
    <div 
    style={{ backgroundImage: `url(${ Background })`}} 
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'>
        <div className='flex place-items-center h-screen'>
            <h3 className='p-5 bg-white bg-opacity-75 text-black rounded-full'>About Us</h3>
        </div>
    </div>
  )
}

export default Contact