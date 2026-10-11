import { LuSearch } from 'react-icons/lu'
import Communities from '../pages/communities/Communities'

function CommunitiesLayout() {
  return (
    <main className='flex flex-col items-center'>
      <section className='w-full flex justify-center bg-dark pt-64 pb-40 md:pt-80'>
        <form className='flex flex-col items-center w-9/10 gap-12'>
          <span className="text-3xl md:text-4xl font-bold text-light text-center">Explore Communities</span>
          <span className="pt-8 f-14 text-font-secondary text-center">Join communities that match your interests and get personalized event recommendations.</span>
          <div className="flex w-full max-w-3xl items-center py-10 px-12 gap-8 rounded-lg bg-thirty">
            <LuSearch className='text-font-secondary'/>
            <input className='f-14 pl-3 flex flex-wrap w-full outline-none' type="text" placeholder='Search events...' />
          </div>
        </form>
      </section>

      <section className='w-full flex flex-col items-center justify-center'>
        <div className="flex flex-col md:flex-row w-full items-start md:items-center gap-8 md:gap-5">

          <div 
            className="border border-border-header w-fit round-8 gap-4 flex 
            [&_span]:text-xs [&_span]:px-12 [&_span]:py-6 [&_span]:round-8"
          >
            <span className="bg-primary text-light">All</span>
            <span className="">Joined</span>
            <span className="">Not Joined</span>
          </div>

          <div className="flex flex-wrap gap-8 py-4 [&_span]:text-xs [&_span]:px-12 [&_span]:py-6 [&_span]:round-8 [&_span]:border [&_span]:border-border-header">
            <span className="bg-primary text-light">All Categories</span>
            <span className="">Technology</span>
            <span className="">Design</span>
            <span className="">Business</span>
            <span className="">Career</span>
            <span className="">Ai</span>
            <span className="">Programming</span>
            <span className="">Music</span>
          </div>

        </div>
      </section>
      <Communities/>
    </main>
  )
}

export default CommunitiesLayout