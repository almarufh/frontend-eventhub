import { LuCheck } from "react-icons/lu"

function SuccessCreateEvent() {
  return (
    <main className="h-screen w-full flex items-center justify-center">
        <div className="flex flex-col w-fit items-center gap-8">
            <div className="w-64 h-64 rounded-full flex items-center justify-center text-emerald-500 text-xl font-bold bg-emerald-500/10">
                <LuCheck/>
            </div>
            <span className="text-2xl font-bold text-zinc-900">Event Created!</span>
            <span className="f-14 text-zinc-500">Redirecting to your dashboard...</span>
        </div>
    </main>
  )
}

export default SuccessCreateEvent