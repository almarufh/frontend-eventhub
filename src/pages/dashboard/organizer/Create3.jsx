import { useState } from "react"
import { LuArrowLeft, LuCheck } from "react-icons/lu"

function Create3() {
  const [radio, setRadio] = useState(false)

  function activRadio() {
    setRadio(!radio)
  }

  return (
    <main className="w-full max-w-7xl flex mx-auto flex-col mt-32 px-16 gap-24 mb-100">
      <section className='px-16 flex flex-col'>
        <span className="text-xl text-zinc-900 font-bold">Speakers & Review</span>
        <span className='f-14 text-zinc-500'>Add speakers and confirm your event details.</span>
      </section>

      <form className="px-16 flex flex-col gap-24">
        <div className="flex flex-col gap-6">
          <label htmlFor="tittle" className='f-14 text-zinc-700'>Speakers (optional)</label>
          <input 
            type="text" 
            id="tittle"
            name="tittle"
            placeholder="Speaker name and title"
            className="mt-6 outline-none border px-12 py-10 round-8 border-zinc-200 f-14" 
          />
        </div>

        <div className="flex flex-col gap-6 bg-white border rounded-xl border-zinc-200">
          <div className="flex items-center justify-between py-12 px-16">
            <span className="text-xs font-medium text-zinc-500">Tittle</span>
            <span className="f-14 text-zinc-900">Go Concurrency Workshop</span>
          </div>

          <div className="flex items-center justify-between py-12 px-16">
            <span className="text-xs font-medium text-zinc-500">Category</span>
            <span className="text-xs text-zinc-600 bg-zinc-100 px-8 py-2 rounded-full">Technology</span>
          </div>

          <div className="flex items-center justify-between py-12 px-16">
            <span className="text-xs font-medium text-zinc-500">Date</span>
            <span className="f-14 text-zinc-900">2026-08-12</span>
          </div>

          <div className="flex items-center justify-between py-12 px-16">
            <span className="text-xs font-medium text-zinc-500">Time</span>
            <span className="f-14 text-zinc-900">12:12 – 14:14 WIB</span>
          </div>

          <div className="flex items-center justify-between py-12 px-16">
            <span className="text-xs font-medium text-zinc-500">Format</span>
            <span className="f-14 text-zinc-900">Bandung</span>
          </div>

          <div className="flex items-center justify-between py-12 px-16">
            <span className="text-xs font-medium text-zinc-500">Capacity</span>
            <span className="f-14 text-zinc-900">121 attendees</span>
          </div>

          <div className="flex items-center justify-between py-12 px-16">
            <span className="text-xs font-medium text-zinc-500">Speakers</span>
            <span className="f-14 text-zinc-900">2 added</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <div className="flex items-center f-14 text-zinc-700 bg-zinc-200 w-fit py-8 px-16 round-8 gap-8 hover:font-bold cursor-pointer">
            <LuArrowLeft/>
            <span>Back</span>
          </div>

          <div className="flex items-center f-14 text-white bg-emerald-500 w-fit py-8 px-16 round-8 gap-8 hover:font-bold cursor-pointer">
            <LuCheck/>
            <span>Publish Event</span>
          </div>
        </div>
      </form>
    </main>
  )
}

export default Create3