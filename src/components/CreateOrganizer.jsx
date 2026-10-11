import { useSelector } from "react-redux";

function CreateOrganizer ({id}) {
    const speaker = useSelector(state => state.users.data).find(user => user.id === id)
    return(
      <div className="flex gap-12 rounded-xl border border-border-header p-16 w-full">
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <img src={speaker?.image} alt={speaker?.name} className="object-cover" />
        </div>
        <div className="flex flex-col">
          <span className="f-14 text-zinc-900 font-semibold">{speaker?.name}</span>
          <span className="text-xs text-zinc-500">{`${speaker?.profesionals?.job}, ${speaker?.profesionals?.office}`}</span>
        </div>
      </div>
    )
}

export default CreateOrganizer