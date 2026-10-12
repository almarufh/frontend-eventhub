import { useState } from 'react';
import { CiCalendar } from 'react-icons/ci';
import { FaArrowLeft } from 'react-icons/fa6';
import { GoBookmark, GoClock, GoPeople } from 'react-icons/go';
import { LuMessageSquare } from 'react-icons/lu';
import { MdShare } from 'react-icons/md';
import { PiMapPinLight } from 'react-icons/pi';
import { Link, useParams } from 'react-router';
import CreateDiscussions from '../../components/CreateDiscussions.jsx';
import CreateOrganizer from '../../components/CreateOrganizer.jsx';
import CreateSpeakers from '../../components/CreateSpeakers.jsx';
import CreateBadge from '../../components/dashboard/CreateBadge.jsx';
import { useRedux } from '../../hooks/useRedux.jsx';
import { getCategory } from '../../utils/helper/category';
import formatDateObject from '../../utils/helper/formatDateObject.js';

function DetailEvent() {
  const { id } = useParams();
  const [total, setTotal] = useState(0);

  const { events, categorys } = useRedux();

  const event = events.data.filter((e) => e.id === id)[0];
  const {
    date,
    month,
    years,
    jam: JamStart,
    menit: menitStart,
  } = formatDateObject(parseInt(event.date.start));
  const { jam: jamEnd, menit: menitEnd } = formatDateObject(
    parseInt(event.date.end)
  );
  const attendeesCount = event.attendees || 0;
  const capacityCount = event.capacity || 100;
  const percentage = Math.min(
    Math.round((attendeesCount / capacityCount) * 100),
    100
  );

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <Link
        to="/events"
        className="flex gap-5 items-center py-12 w-full max-w-7xl px-16"
      >
        <FaArrowLeft className="text-font-forthy" />
        <span className="text-font-forthy f-14">Back to Events</span>
      </Link>

      <section className="flex flex-col md:flex-row w-full max-w-7xl px-16 gap-8 items-satart justify-between">
        <div className="flex flex-2 w-full overflow-hidden relative round-8">
          <img
            src={event.image}
            alt={event.id}
            className="w-full h-full object-contains"
          />
        </div>

        <div className="w-full md:w-4/10 h-fit flex justify-center">
          <div className="w-full border border-border-header p-20 bg-light round-8 flex flex-col gap-10">
            <span className="text-xs text-font-forthy">Event info</span>

            <div className="flex items-center gap-6">
              <CiCalendar className="text-zinc-700 f-14" />
              <span className="text-zinc-500 f-14">{`${month} ${date}, ${years}`}</span>
            </div>

            <div className="flex items-center gap-6">
              <GoClock className="text-zinc-700 f-14" />
              <span className="text-xs text-zinc-500">{`${JamStart}:${menitStart} - ${jamEnd}:${menitEnd}`}</span>
            </div>

            <div className="flex items-center gap-6">
              <PiMapPinLight className="text-zinc-700 f-14" />
              <span className="text-xs text-zinc-500">{event.location}</span>
            </div>

            <div className="flex items-center gap-6">
              <GoPeople className="text-zinc-500 f-14" />
              <span className="text-xs text-zinc-500">
                {percentage}% full · {event.attendees} spots left
              </span>
            </div>

            <div className="pt-4">
              <div className="flex justify-between [&_span]:text-xs [&_span]:text-font-forthy mb-6">
                <span>{event.attendees} attendees</span>
                <span>{event.capacity} capacity</span>
              </div>
              <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                <div
                  className="bg-green-500 h-full rounded-full"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <div className="py-10">
                <button className="bg-primary hover:bg-primary-dark transition py-10 px-12 f-14 text-white w-full text-center font-medium rounded-lg cursor-pointer">
                  Join Event
                </button>
              </div>

              <div
                className="flex gap-8 items-center justify-between
            [&_div]:flex [&_div]:items-center [&_div]:p-[6px_12px] [&_div]:border-border-header [&_div]:text-font-fivethy [&_div]:f-14 [&_div]:gap-8 [&_div]:w-full [&_div]:border [&_div]:justify-center [&_div]:round-8"
              >
                <div className="">
                  <GoBookmark />
                  <span>Save</span>
                </div>
                <div className="">
                  <MdShare />
                  <span>Share</span>
                </div>
              </div>
              <div className="flex flex-col w-full gap-12 mt-24 md:mt-50">
                <span className="text-xs text-font-forthy font-semibold">
                  Organized By
                </span>
                <div className="flex w-full">
                  {<CreateOrganizer id={event.organizerId} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row w-full max-w-7xl p-16 gap-8 items-satart justify-between">
        <div className="w-full order-2 md:order-1  md:w-6/10 flex flex-col gap-12">
          <div
            className={`
              flex items-center gap-8 pt-24
              [&_span]:p-[2px_8px] [&_span]:round-8 [&_span]:text-xs [&_span]:font-medium
            `}
          >
            {event.categoryIds.map((id) => {
              const category = getCategory(categorys?.data, id);
              return (
                <CreateBadge
                  key={id}
                  status={category}
                />
              );
            })}
          </div>
          <span className="text-3xl font-bold text-zinc-900">
            {event.title}
          </span>
          <span className="text-lg font-medium text-zinc-900">
            About this event
          </span>
          <span className="f-16 text-zinc-600">{event.description}</span>

          <div className="flex flex-col gap-16 pt-12">
            <span className="text-lg font-semibold text-zinc-900">
              Speakers
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {event.speakerIds.map((speaker) => {
                return (
                  <CreateSpeakers
                    id={speaker}
                    key={speaker}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex flex-col mt-8 gap-8">
            <div className="flex order-1 md:order-2 w-full md:w-4/10 gap-8 items-center text-lg">
              <LuMessageSquare className="text-lg font-semibold" />
              <span className="text-lg font-semibold">Discussion</span>
              <span className="text-zinc-400 f-14">{`(${total})`}</span>
            </div>
          </div>

          <CreateDiscussions
            type="event"
            id={id}
            set={setTotal}
          />
        </div>
      </section>

      <section className="h-200"></section>
    </div>
  );
}

export default DetailEvent;
