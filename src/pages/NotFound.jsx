import { Link } from 'react-router'

function NotFound() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-black'>
        <span className='text-9xl bg-border-header text-red-500 font-bold border round-8 py-8 px-16'>404</span>
        <Link to="/" className='text-sm text-primary bg-primary8 py-8 px-12 mt-12 round-8 border'>Go to Explore</Link>
    </div>
  )
}

export default NotFound