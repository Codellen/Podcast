import React from 'react'
import { useSelector } from 'react-redux'
import {signOut } from "firebase/auth";
import { auth } from '../firebase';
import Header from '../Components/Header'
import Button from '../Components/Button';
function Profile() {

    const userStore = useSelector((state)=> state.user.user)

    const handelLogout = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });

    }
    //console.log(selector)
    if(!userStore){
    
      return <p>Loading....</p>
    }
  return (
    <div>
        <Header></Header>
      <h1>{userStore.Name}</h1>
      <h1>{userStore.Email}</h1>
      <h1>{userStore.UID}</h1>
       
       <Button text={"Logout"} onClick={handelLogout}></Button>
      
    </div>
  )
}

export default Profile
