import { LuBell, LuCalendar, LuMessageSquare, LuSend, LuUser, LuUsers } from "react-icons/lu";

const notifications = [
  {
    id: 1,
    title: "Go Concurrency Workshop starts in 2 days",
    description: "Don't forget — your registered event is on Aug 22 at 09:00 in Bandung.",
    time: "2h ago",
    isUnread: true,
    icon: LuCalendar,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    id: 2,
    title: "Registration confirmed",
    description: "You're registered for Frontend Craft Conference on Oct 12, 2026.",
    time: "3h ago",
    isUnread: true,
    icon: LuBell,
    iconBg: "#DCFCE7",
    iconColor: "#16A34A",
  },
  {
    id: 3,
    title: "New event in Bandung Go Community",
    description: 'Rizky posted "Advanced Go Modules Workshop" — happening Sep 30.',
    time: "1d ago",
    isUnread: true,
    icon: LuUser,
    iconBg: "#EEF2FF",
    iconColor: "#4F46E5",
  },
  {
    id: 4,
    title: "Update: AI Product Design Summit",
    description: "New speaker added: Kevin Lim from Google. Updated schedule posted.",
    time: "2d ago",
    isUnread: false,
    icon: LuSend,
    iconBg: "#FFE4E6",
    iconColor: "#F43F5E",
  },
  {
    id: 5,
    title: "Reply to your discussion",
    description: "Ahmad Fauzan replied to your question in Go Concurrency Workshop.",
    time: "3d ago",
    isUnread: false,
    icon: LuMessageSquare,
    iconBg: "#F3E8FF",
    iconColor: "#9333EA",
  },
  {
    id: 6,
    title: "Jakarta AI & ML Club: Member milestone",
    description: "Your community just hit 2,000 members! Thanks for being part of it.",
    time: "4d ago",
    isUnread: false,
    icon: LuUsers,
    iconBg: "#EFF6FF",
    iconColor: "#2563EB",
  },
  {
    id: 7,
    title: "Product Management Masterclass — 1 week away",
    description: "Your saved event is on Sep 18 at 10:00, Online.",
    time: "5d ago",
    isUnread: false,
    icon: LuCalendar,
    iconBg: "#FEF3C7",
    iconColor: "#D97706",
  },
];

export default function AllNotifications() {
  return (
    <main className="w-full mt-24">
      <section className="flex flex-col mx-auto w-full max-w-5xl">
        {notifications.map((item) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              className="flex items-start gap-16 py-16 px-24"
            >
              <div
                className={` ${item.iconBg} ${item.iconColor}
                  w-36 h-36 rounded-xl flex items-center justify-center
                `}
              >
                <IconComponent />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="f-14 font-semibold text-zinc-900">
                    {item.title}
                  </p>
                  <span className="text-xs text-zinc-400">
                    {item.time}
                  </span>
                </div>
                <p className="text-xs text-zinc-500">
                  {item.description}
                </p>
              </div>

              {item.isUnread && (
                <span className="w-8 h-8 rounded-full bg-orange-600 mt-6" />
              )}
            </div>
          );
        })}
      </section>
    </main>
  );
}