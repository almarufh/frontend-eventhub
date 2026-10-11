import { useState } from 'react'
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu'

function Create2() {
  const [radio, setRadio] = useState(false)

  function activRadio() {
    setRadio(!radio)
  }

  return (
    <main className="w-full max-w-7xl flex mx-auto flex-col mt-32 px-16 gap-24 mb-100">
      <section className='px-16 flex flex-col'>
        <span className="text-xl text-zinc-900 font-bold">Date, Location & Capacity</span>
        <span className='f-14 text-zinc-500'>When and where is your event?</span>
      </section>

      <form className="px-16 flex flex-col gap-24">
        <div className="flex flex-col gap-6">
          <label htmlFor="tittle" className='f-14 text-zinc-700'>Event Date</label>
          <input 
            type="text" 
            id="tittle"
            name="tittle"
            className="mt-6 outline-none border px-12 py-10 round-8 border-zinc-200 f-14" 
          />
        </div>

        <div className="flex w-full gap-16">
          <div className="flex flex-col gap-6 w-full">
            <label htmlFor="tittle" className='f-14 text-zinc-700'>Start Time</label>
            <input 
              type="text" 
              id="tittle"
              name="tittle"
              className="mt-6 outline-none border px-12 py-10 round-8 border-zinc-200 f-14" 
            />
          </div>

          <div className="flex flex-col gap-6 w-full">
            <label htmlFor="tittle" className='f-14 text-zinc-700'>End Time</label>
            <input 
              type="text" 
              id="tittle"
              name="tittle"
              className="mt-6 outline-none border px-12 py-10 round-8 border-zinc-200 f-14" 
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="f-14 text-zinc-700">Event Format</span>

          <div className="flex gap-2 items-center bg-zinc-100 p-4 w-fit rounded-lg">
            <div className="flex gap-6">
              <input
                type="radio"
                id="eventformat"
                name="eventformat"
                className="hidden"
              />
              <label
                onClick={activRadio}
                htmlFor="eventformat" 
                className={` ${!radio && "bg-white rounded-xl border border-zinc-200"}
                  f-14 text-zinc-700 py-8 px-16 cursor-pointer
                `}
              >📍 In Person</label>
            </div>

            <div className="flex gap-6">
              <input
                type="radio"
                id="eventformat"
                name="eventformat"
                className="hidden"
              />
              <label 
                onClick={activRadio}
                htmlFor="eventformat" 
                className={` ${radio && "bg-white rounded-xl border border-zinc-200"}
                  f-14 text-zinc-700 py-8 px-16 cursor-pointer
                `}
              >💻 Online</label>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col gap-6">
          <label htmlFor="tittle" className='f-14 text-zinc-700'>Location</label>
          <input 
            type="text" 
            id="tittle"
            name="tittle"
            placeholder='Bandung, West Java'
            className="mt-6 outline-none border px-12 py-10 round-8 border-zinc-200 f-14" 
          />
        </div>

        <div className="flex flex-col gap-6">
          <label htmlFor="tittle" className='f-14 text-zinc-700'>Capacity</label>
          <input 
            type="text" 
            id="tittle"
            name="tittle"
            placeholder='100'
            className="mt-6 outline-none border px-12 py-10 round-8 border-zinc-200 f-14" 
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center f-14 text-zinc-700 bg-zinc-200 w-fit py-8 px-16 round-8 gap-8 hover:font-bold cursor-pointer">
            <LuArrowLeft/>
            <span>Back</span>
          </div>

          <div className="flex items-center f-14 text-white bg-orange-600 w-fit py-8 px-16 round-8 gap-8 hover:font-bold cursor-pointer">
            <span>Continue</span>
            <LuArrowRight/>
          </div>
        </div>
      </form>
    </main>
  )
}

export default Create2