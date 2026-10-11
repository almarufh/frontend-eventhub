import { useEffect } from "react";
import { useRedux } from "../hooks/useRedux";

function CreateDiscussions({type, id, set}) {
  const {
    users,
    discussions
  } = useRedux()

  let discussion = discussions?.data?.filter(data => data?.from?.type === "community" && data?.from?.id === id)
  if (type === "event") {
    discussion = discussions.data.filter(data => data?.from?.type === "event" && data?.from?.id === id)
  } 

  let userIds = discussion ? discussion.filter(data => data.userId) : null

  let user = []
  
  if(userIds) {
    userIds.forEach(e => {
      users.data.forEach(data => {
        if(data.id === e.userId) {
          user.push(data)
        }
      })
    })
  }

  useEffect(()=>{
    set(discussion.length)
  }, [discussion, set])
  
  return(
    <>
    {discussion && 
    discussion.map(data => {
      const profile = user.find(res => data.userId === res.id)
      return (
        <div 
          key={data.id}
          className="flex gap-12 items-start"
        >
          <div className="w-24 h-24 overflow-hidden rounded-full">
            <img src={profile.image} alt={profile.name} className="object-cover" />
          </div>
          <div className="flex flex-col bg-white border border-zinc-200 rounded-xl py-12 px-16">
            <span className="f-14 font-semibold text-zinc-900">{profile.name}</span>
            <span className="f-14 text-zinc-600">{data.message}</span>
          </div>
        </div>
      )
    })
    }
    </>
  )
}

export default CreateDiscussions