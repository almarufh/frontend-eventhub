import Logo from '../../components/header/Logo'
import { IoMdCheckmark } from "react-icons/io";
import { Link } from 'react-router';

function SuccesPassword() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="w-8/10 md:w-6/10 flex items-center flex-col">
            <div className='flex md:hidden pb-32 justify-start w-full'>
              <Logo/>
            </div>

            <div className="w-56 h-56 rounded-full bg-[#33B5701A] flex items-center justify-center">
                <IoMdCheckmark className="text-secondary"/>
            </div>

            <span className='text-2xl font-bold pt-16'>Check your email</span>
            <span className='f-14 text-font-forthy pt-8 pb-24'>We sent a reset link to nesya@koda.com</span>
            <Link to="/auth/signin" className='f-14 text-primary'>Back to sign in</Link>
        </div>
    </div>
  )
}

export default SuccesPassword