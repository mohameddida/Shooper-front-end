import React from "react"

import { UseUserData } from "../context/userDataContext"

export default async function authLogin(creadentialData, setUserData){

    const csrf = localStorage.getItem('csrftoken')


   const fetch_login = await fetch("http://127.0.0.1:8000/chooper/login", {
        method: 'POST',
       
        credentials: "include",
        
        

        headers: {
            "X-CSRFToken": csrf,
            'Content-Type': 'application/json',
        },



        body: JSON.stringify(creadentialData)
    })

    if(fetch_login.ok){
        const response = await fetch_login.json()
        if(response.status === 200){

            setUserData(response.data)
            localStorage.setItem('token-auth', response.token)



            return {success : true, response_message: ''}


            
        }else{
            return {success: false, response_message: response.message}

        }
    }else{
        throw Error('error when fetching login!')

    }
}