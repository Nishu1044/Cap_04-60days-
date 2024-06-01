import {createContext, useState} from "react"


// c p c

 export const AuthContext = createContext();


export function AuthContextProvider({children}){
 
const [authDetails, setAuthDetails] = useState({
    isLoggedIn: false,
    token:null
});



function login(token){
  setAuthDetails({
    isLoggedIn: true,
    token:token
  });
};


function logout(){
    setAuthDetails({
        isLoggedIn: false,
        token:null
      });
      
      window.location.href = '/login';



}


    return( <AuthContext.Provider
        value={{authDetails,login,logout}}>{children}
    </AuthContext.Provider>
    )
}