import { useEffect, useState } from 'react';
import { FaBookmark, FaCheck } from 'react-icons/fa';
import { GoPeople } from 'react-icons/go';
import { LuCalendar } from 'react-icons/lu';
import { PiMapPinLight } from 'react-icons/pi';
import { Link } from 'react-router';
import { useRedux } from '../../hooks/useRedux';
import {
  joinEvent,
  leaveEvent,
  saveEvent,
  unsaveEvent,
} from '../../redux/slice/events';
import getDateTime from '../../utils/getDateTime';
import CreateBadge from '../dashboard/CreateBadge';

function CardEvent({ event, isDark }) {
  const {
    events: {
      events: { joined, saved },
    },
    dispatch,
  } = useRedux();

  const [save, setSave] = useState(false);
  const [join, setJoin] = useState(false);

  const handleSave = () => {
    if (save) {
      dispatch(unsaveEvent(event.id));
      setSave(false);
    }
    if (!save) {
      dispatch(saveEvent(event.id));
      setSave(true);
    }
  };

  const handleJoin = () => {
    if (join) {
      dispatch(leaveEvent(event.id));
      setJoin(false);
    }
    if (!join) {
      dispatch(joinEvent(event.id));
      setJoin(true);
    }
  };

  useEffect(() => {
    saved.map((eventSaved) => {
      if (event.id === eventSaved.id) {
        setSave(true);
      }
    });
    joined.map((eventJoined) => {
      if (event.id === eventJoined.id) {
        setJoin(true);
      }
    });
  }, []);

  const { minute, hour, day, month, year } = getDateTime(event.start_time);
  const attendee = event.attendee;
  const capacity = event.capacity;
  const percentage = Math.min(Math.round((attendee / capacity) * 100), 100);
  return (
    <article
      className={` ${isDark ? '' : 'border-zinc-200 bg-white'}
            flex flex-col justify-between border shadow-sm h-full rounded-lg overflow-hidden
        `}
    >
      <Link to={`/events/${event.id}`}>
        <div
          className={`
                    w-full h-176 overflow-hidden relative
                `}
        >
          <img
            src={event.image}
            alt={event.title}
            className={`
                        w-full h-full object-cover
                    `}
          />
          <div
            className={`
                            absolute bottom-12 left-12 flex gap-4
                        `}
          >
            {event.categorys.map((category, index) => {
              return (
                <CreateBadge
                  key={index}
                  status={category}
                />
              );
            })}
          </div>
        </div>

        <div
          className={`
                    flex flex-col gap-12 p-16 grow justify-between
                `}
        >
          <span
            className={`
                        font-bold f-16 text-zinc-900 line-clamp-2
                    `}
          >
            {event.title}
          </span>
          <div
            className={`
                        pt-8 flex flex-col gap-6 text-zinc-500 text-xs
                    `}
          >
            <div className={`flex items-center gap-6`}>
              <LuCalendar />
              <span>{`${month}, ${day} ${year} · ${hour}:${minute} WIB`}</span>
            </div>

            <div className={`flex items-center gap-6`}>
              <PiMapPinLight />
              <span>{event.location}</span>
            </div>

            <div className={`flex items-center gap-6`}>
              <GoPeople />
              <span>{`${event.attendee}/${event.capacity} attendees`}</span>
            </div>
          </div>

          <div className={`pt-4`}>
            <div
              className={`flex justify-between [&_span]:text-xs [&_span]:text-font-forthy mb-6`}
            >
              <span>{event.attendee} attendees</span>
              <span>{event.capacity} capacity</span>
            </div>

            <div
              className={`w-full bg-gray-200 h-6 rounded-full overflow-hidden`}
            >
              <div
                className={`bg-green-500 h-full rounded-full`}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </Link>

      <div
        className={`flex gap-8 p-16 items-center
            `}
      >
        <div
          className={` ${join ? 'bg-secondary' : 'bg-primary'} hover:bg-primary-dark transition py-10 px-12 f-14 text-white w-full text-center font-medium rounded-lg cursor-pointer flex items-center justify-center`}
          onClick={handleJoin}
        >
          {join ? (
            <div className="flex items-center justify-center gap-8">
              <FaCheck />
              <span className="">Registered</span>
            </div>
          ) : (
            <span className="">Join Event</span>
          )}
        </div>

        <div
          className={`p-8 border border-border-header rounded-lg cursor-pointer transition text-lg flex items-center justify-center ${
            save ? 'bg-zinc-100' : 'bg-zinc-100 '
          }`}
          onClick={handleSave}
        >
          <div className="flex items-center gap-3">
            <FaBookmark
              className={`text-2xl ${save ? 'text-green-700' : 'text-zinc-200'}`}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default CardEvent;
