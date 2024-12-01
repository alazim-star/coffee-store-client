

import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../FireBase/fireBase.init';
import { createContext, useState } from 'react';



export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
const[user,setUser]=useState(null)
const [loading,setLoading]=useState(true)

// create User //sign up
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)

}

// sign in 

const signInUser=(email,password)=>{
   setLoading(true)
 return signInWithEmailAndPassword(auth,email,password)

}







const userInfo={
    user,
    loading,
    createUser,
    signInUser,

}



    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;