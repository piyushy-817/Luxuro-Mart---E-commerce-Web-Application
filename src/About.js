import { useEffect, useState } from "react"
import { useTheme } from "../utils/ThemeContext"

const About =()=>{
    const [userData , setUserData] = useState([])
    const {isDarkMode} = useTheme()

 useEffect(()=>{
    const fetchingUser = async ()=>{
  const fetchdata = await fetch("https://api.github.com/users/piyushy-817")
   const userInfo = await fetchdata.json()

  setUserData(userInfo)
  console.log(userInfo)
} 
 fetchingUser()

},[])

    return (
        <div className="p-2  p-auto dark:bg-slate-700 text-center">
            <div className="flex justify-center"> <img  className="m-2 rounded-2xl shadow-lg " src={userData.avatar_url}></img></div>
           
            <div className="m-2 dark:text-white  text-3xl font-orbitron ">{userData.name}</div>
            <div className="m-2 dark:text-white ">{userData.bio}</div>
            <div className="m-2 dark:text-white ">{userData.login}</div>
        </div>
    )
}

export default About