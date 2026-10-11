import { useNavigate } from "react-router"
import { useEventHub } from "../../hooks/useEventHub"

function Logo ({target}) {
  const {isDark} = useEventHub()
  const navigate = useNavigate()
  return (
    <div
      onClick={()=> {
        navigate("/")
      }}
      className={`${isDark 
        ? "" 
        : "flex items-center gap-8 round-8 pr-32"}
        cursor-pointer
    `}>
      <span
        className={` ${isDark 
          ? "" 
          : "bg-primary text-md p-4 h-28 w-28 my-center round-8 f-14 font-bold text-light"}
      `}>E</span>
      <span
        className={
          `${target === "auth" 
            ? "text-light" 
            : "text-dark" 
          } f-16 font-bold my-center`}
      >EventHub</span>
    </div>
  )
}

export default Logo