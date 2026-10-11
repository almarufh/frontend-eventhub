import React from 'react'
import { Outlet } from 'react-router'

function EventsLayout() {
  return (
    <main>
        <Outlet/>
    </main>
  )
}

export default EventsLayout