function SummaryDashboard({isDark, total}) {
  return (
    <section  className={` ${isDark
            ? "text-ligth"
            : "text-dark-primary"}
            w-full grid grid-cols-2 gap-8 
            md:gap-16 md:grid-cols-4
        `}>
        {total.map((e, key) => {
            const Icons = e.icons
            return (
                <div key={key} className={` ${isDark 
                    ? "" 
                    : ""}
                    border flex flex-col rounded-xl shadow-xl border-border-header p-20
                `}>
                    <div className={` ${isDark 
                        ? "" 
                        : ""}
                        flex items-center justify-between
                    `}>
                        <span className={` ${isDark 
                            ? "" 
                            : ""}
                            text-xs text-font-forthy
                        `}>{e.tittle}</span>
                        <Icons />
                    </div>
                    <span className={` ${isDark 
                        ? "" 
                        : ""}
                        text-2xl font-bold pt-12
                    `}>{e.value}</span>
                    <span className={` ${isDark 
                        ? "" 
                        : ""}
                        text-xs text-font-forthy
                    `}>{e.sub}</span>
                </div>
            )}
        )}
    </section>
  )
}

export default SummaryDashboard