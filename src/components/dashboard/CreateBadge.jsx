function CreateBadge({ status }) {
  const create = [
    {
      status: 'Active',
      color: 'text-emerald-600',
      bg: 'bg-emerald-100',
    },
    {
      status: 'registered',
      color: 'text-emerald-600',
      bg: 'bg-emerald-100',
    },
    {
      status: 'almost-full',
      color: 'text-emerald-600',
      bg: 'bg-emerald-100',
    },
    {
      status: 'active',
      color: 'text-emerald-600',
      bg: 'bg-emerald-100',
    },
    {
      status: 'suspended',
      color: 'text-red-600',
      bg: 'bg-red-100',
    },
    {
      status: 'full',
      color: 'text-red-600',
      bg: 'bg-red-100',
    },
    {
      status: 'attendee',
      color: 'text-zinc-600',
      bg: 'bg-zinc-100',
    },
    {
      status: 'organizer',
      color: 'text-orange-600',
      bg: 'bg-orange-100',
    },
    {
      status: 'technology',
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      status: 'ai',
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      status: 'backend',
      color: 'text-indigo-600',
      bg: 'bg-indigo-100',
    },
    {
      status: 'frontend',
      color: 'text-sky-600',
      bg: 'bg-sky-100',
    },
    {
      status: 'mobile',
      color: 'text-teal-600',
      bg: 'bg-teal-100',
    },
    {
      status: 'devops',
      color: 'text-cyan-600',
      bg: 'bg-cyan-100',
    },
    {
      status: 'cybersecurity',
      color: 'text-rose-600',
      bg: 'bg-rose-100',
    },
    {
      status: 'science',
      color: 'text-emerald-600',
      bg: 'bg-emerald-100',
    },
    {
      status: 'ui/ux',
      color: 'text-pink-600',
      bg: 'bg-pink-100',
    },
    {
      status: 'blockchain',
      color: 'text-amber-600',
      bg: 'bg-amber-100',
    },
    {
      status: 'management',
      color: 'text-violet-600',
      bg: 'bg-violet-100',
    },
    {
      status: 'database',
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      status: 'assurance',
      color: 'text-lime-600',
      bg: 'bg-lime-100',
    },
    {
      status: 'source',
      color: 'text-green-600',
      bg: 'bg-green-100',
    },
    {
      status: 'leadership',
      color: 'text-yellow-600',
      bg: 'bg-yellow-100',
    },
  ];
  return (
    <>
      {create.map((e, idx) => {
        if (e.status === status?.toLowerCase()) {
          return (
            <div
              key={idx}
              className={`flex items-center justify-center
                    `}
            >
              <span
                className={`${e.color} ${e.bg}
                      py-2 px-8 text-xs font-medium rounded-full h-fit w-fit
                    `}
              >
                {status}
              </span>
            </div>
          );
        }
      })}
    </>
  );
}

export default CreateBadge;
