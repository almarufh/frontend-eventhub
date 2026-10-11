import { IoClose } from 'react-icons/io5'
import { LuTicket } from 'react-icons/lu'
import { useNavigate } from 'react-router'

function NotLogin({modal}) {
  const navigate = useNavigate()
  return (
    <main className="inset-0 z-60 fixed h-screen w-full bg-black/10 px-36 flex items-center justify-center">
        <div className="flex w-full max-w-md bg-light mx-auto p-12 flex-col border border-border-header rounded-xl">
          <div className="flex justify-between items-center">
            <span className='f-16 py-32'>Sign in to continue</span>
            <div className="hover:text-font-error cursor-pointer"
                onClick={()=> {
                  modal.setModalAuth(false)
            }}>
              <IoClose
                className=''/>
            </div>
          </div>
          <div className="bg-primary8 p-24 flex w-fit round-8 mx-auto my-32">
              <LuTicket />
          </div>
          <span className='f-14 text-dark-primary px-8 mb-32'>Create a free account to register for events, save favourites, join communities, and get personalised recommendations.</span>
          <div className="flex gap-8 items-center justify-end mb-12">
            <span
                onClick={()=> {
                  modal.setModalAuth(false)
            }} className='px-16 f-14 text-dark font-medium py-8 round-8 bg-border-header'>Keep browsing</span>
            <span 
              onClick={()=> {
                navigate("/auth/signin")
              }}
              className='px-16 f-14 text-light font-medium py-8 round-8 bg-primary'>Sign-In</span>
          </div>
        </div>
    </main>
  )
}

export default NotLogin