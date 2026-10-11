import { FaArrowLeft } from "react-icons/fa6";
import { CiCalendar} from "react-icons/ci";
import { PiMapPinLight } from "react-icons/pi";
import { GoBookmark, GoClock, GoPeople } from "react-icons/go";
import { MdShare } from "react-icons/md";
import { Link, useParams } from "react-router";
import { getFullEventDetails } from "../../database/data.js";

function DetailEvent() {
  const {id} = useParams()
  const event = getFullEventDetails(id)

  const attendeesCount = event.attendees || 0;
  const capacityCount = event.capacity || 100;
  const percentage = Math.min(Math.round((attendeesCount / capacityCount) * 100), 100);

  function CreateUser () {
    return(
      <div className="flex gap-12 rounded-xl border border-border-header p-16 w-full">
        <div className="border w-40 h-40 rounded-full">
          <img src="#" alt="#" className="" />
        </div>
        <div className="flex flex-col">
          <span className="f-14 text-dark-primary font-semibold">Ahmad Fauzan</span>
          <span className="text-xs text-font-forthy">Staff Enginer, Tokopedia</span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <Link to="/events" className="flex gap-5 items-center py-12 w-9/10">
        <FaArrowLeft className="text-font-forthy" />
        <span className="text-font-forthy f-14">Back to Events</span>
      </Link>
      
      <section className="flex flex-col md:flex-row w-9/10 gap-8 items-satart justify-between">
        <div className="flex  w-full max-w-500 h-full max-h-450 md:w-5/10 overflow-hidden relative round-8">
          <img src={event.image} alt={event.id} className="w-full h-full object-contains" />
        </div>
        
        <div className="w-full md:w-4/10 h-fit flex justify-center">
          <div className="w-full border border-border-header p-20 bg-light round-8 flex flex-col gap-10">
            <span className="text-xs text-font-forthy">Event info</span>

            <div className="flex items-center gap-6">
              <CiCalendar className="text-font-forthy text-base"/>
              <span className='text-xs text-font-forthy'>{`${event.date.day} ${event.date.month} ${event.date.years}`}</span>
            </div>

            <div className="flex items-center gap-6">
              <GoClock className="text-font-forthy text-base"/>
              <span className="text-xs text-font-forthy">{`${event.time.start}-${event.time.end}`}</span>
            </div>

            <div className="flex items-center gap-6">
              <PiMapPinLight className="text-font-forthy text-base"/>
              <span className="text-xs text-font-forthy">{event.location}</span>
            </div>

            <div className="flex items-center gap-6">
              <GoPeople className="text-font-forthy text-base" />
              <span className="text-xs text-font-forthy">{percentage}% full · {event.attendees} spots left</span>
            </div>

            <div className="pt-4">
            <div className='flex justify-between [&_span]:text-xs [&_span]:text-font-forthy mb-6'>
              <span>{event.attendees} attendees</span>
              <span>{event.capacity} capacity</span>
              </div>
              <div className='w-full bg-gray-200 h-4 rounded-full overflow-hidden'>
              <div 
                className='bg-green-500 h-full rounded-full' 
                style={{ width: `${percentage}%` }}
              ></div>       
            </div>
            <div className="py-10">
              <button className='bg-primary hover:bg-primary-dark transition py-10 px-12 f-14 text-white w-full text-center font-medium rounded-lg cursor-pointer'>Join Event</button>
            </div>

            <div className="flex gap-8 items-center justify-between
            [&_div]:flex [&_div]:items-center [&_div]:p-[6px_12px] [&_div]:border-border-header [&_div]:text-font-fivethy [&_div]:f-14 [&_div]:gap-8 [&_div]:w-full [&_div]:border [&_div]:justify-center [&_div]:round-8">
              <div className="">
                <GoBookmark/>
                <span>Save</span>
              </div>
              <div className="">
                <MdShare/>
                <span>Share</span>
              </div>
            </div>
            <div className="flex flex-col w-full gap-12 mt-24 md:mt-50">
              <span className="text-xs text-font-forthy font-semibold">Organized By</span>
              <div className="flex w-full">
                <CreateUser/>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row w-9/10 gap-8 items-satart justify-between">
        <div className="w-full order-2 md:order-1  md:w-6/10 flex flex-col gap-12">
          <div 
            className={`
              flex items-center gap-8 pt-24
              [&_span]:p-[2px_8px] [&_span]:round-8 [&_span]:text-xs [&_span]:font-medium [&_span]:border
            `}>
            <span>Technology</span>
            <span>Programing</span>
            <span>Available</span>
          </div>
          <span className="text-3xl font-bold">{event.title}</span>
          <span className="text-lg font-medium text-dark-primary">About this event</span>
          <span className="f-16 text-font-primary">{event.content}</span>
          <div className="flex flex-col gap-16 pt-12">
            <span className="text-lg font-semibold">Speaker</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CreateUser/>
              <CreateUser/>
            </div>
          </div>
        </div>

        <div className="flex order-1 md:order-2 w-full md:w-4/10">
          {/* <div className="flex flex-col w-full gap-12 mt-24">
            <span className="text-xs text-font-forthy font-semibold">Organized By</span>
            <div className="flex w-full">
              <CreateUser/>
            </div>
          </div> */}
        </div>
      </section>

      <section className="h-200"></section>

    </div>
  )
}
 
export default DetailEvent