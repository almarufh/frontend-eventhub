import { LuMailPlus } from "react-icons/lu"
import { Outlet } from "react-router"

function NotificationLayout() {
    return (
        <>
        <main className="w-full mt-8 border-b border-zinc-200 py-24">
            <section className="w-full max-w-5xl mx-auto px-16 flex items-center justify-between">
                <div className="flex flex-col">
                    <div className="flex items-center gap-8">
                        <span className="text-2xl font-bold">Notifications</span>
                        <span className="bg-orange-600 text-white py-2 px-8 rounded-full text-xs">3</span>
                    </div>
                    <span className="text-zinc-500 f-14">Stay up to date with your events and communities.</span>
                </div>
                <div className="flex items-center gap-8 py-6 px-12 border border-zinc-200 round-8 f-14 text-zinc-700">
                    <LuMailPlus/>
                    <span className="">Mark all as read</span>
                </div>
            </section>

            <section className="w-full max-w-5xl mx-auto px-16 flex items-center justify-start gap-8 mt-16">
                <span className="bg-orange-600 text-white text-xs py-6 px-12 round-8">All</span>
                <span className="border border-zinc-200 text-zinc-600 text-xs py-6 px-12 round-8">Unread (3)</span>
            </section>
        </main>
        <Outlet/>
        </>
    )
}

export default NotificationLayout