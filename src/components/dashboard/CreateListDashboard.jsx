import formatDateObject from '../../utils/helper/formatDateObject'
import CreateBadge from './CreateBadge'
import { HiDotsHorizontal } from 'react-icons/hi'

function CreateListDashboard({data, type}) {
    console.log(type)
  return (
    <>
    {data.map((e, idx)=> {
        const {day, month, years} = formatDateObject(e.date)
        return (
            <div
                key={idx}
                className="bg-white border border-zinc-200 py-12 px-16 flex items-center justify-between w-full round-8">
                <div className="flex gap-16 items-center">
                  <div className="w-48 h-40 border border-border-header round-8 overflow-hidden">
                    <img src="#" alt="" className="object-cover"/>
                  </div>
                  <div className="flex flex-col">
                    <span className="f-14 font-medium">{e.tittle}</span>
                    <span className="text-xs text-zinc-400">{`${month.slice(0,3)} ${day}, ${years} · ${e.location} `}</span>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  {type !== "communities" && <span className="text-zinc-500 text-xs">{`${e.attendee}/${e.capacity}`}</span>}
                  <CreateBadge status={e.status}/>
                  <div className="text-xl text-zinc-400 flex items-center justify-center">
                    <HiDotsHorizontal/>
                  </div>
                </div>
            </div>
        )
    })}
    </>
  )
}

export default CreateListDashboard