function CreateUser({data: comunity}) {
  return (
    <>
    {comunity && comunity.map((data)=> {
        return (
            <div className="flex gap-12 rounded-xl border border-border-header p-16 w-full">
            <div className="w-40 h-40 rounded-full overflow-hidden">
                <img src={data.avatar} alt={data.name} className="object-contain" />
            </div>
            <div className="flex flex-col">
                <span className="f-14 text-dark-primary font-semibold">{data.name}</span>
                <span className="text-xs text-font-forthy">{data.role}</span>
            </div>
            </div>
        )
    })}
    </>
  )
}

export default CreateUser