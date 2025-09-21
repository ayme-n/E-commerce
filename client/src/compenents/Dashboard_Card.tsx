import { Link } from "react-router-dom"
import { useLogout } from "../helpers/useLogout"


const Dashboard_Card = ({img,text,link}:{img:string,text:string,link:string}) => {
  const logout = useLogout()
  return text !== "logout" ?(
    <Link to={`/account${link}`}>
    <div className="flex  flex-col justify-center items-center cursor-pointer border-1 border-gray-200 w-60 h-30 hover:shadow-[0px_0px_11px_0px_rgba(0,_0,_0,_0.1)]">
        <img src={img} width={50} alt="" />
        <span>{text}</span>
    </div>
    </Link>
  )
  : 
  <div className="flex flex-col justify-center items-center cursor-pointer border-1 border-gray-200 w-60 h-30 hover:shadow-[0px_0px_11px_0px_rgba(0,_0,_0,_0.1)]" onClick={logout}>
        <img src={img} width={50} alt="" />
        <span>{text}</span>
  </div>
}

export default Dashboard_Card