import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, Provider } from '../config/firebase'

interface Props {
    children: React.ReactNode;
}

const AuthChecker = ( { children }: Props) => {
    const navigate = useNavigate();
    // This will just check if the user is logged in, is so , it returns the children 
    //(Which are passed as props - it's just whatever component is either protected or not)
    //otherwise it sends them to the login route
    useEffect(() =>{
        if (!auth.currentUser) {
            navigate("../")
            signInWithPopup(auth, Provider.google)
        }
    })
  return (
    <>{children}</>
  )
}

export default AuthChecker