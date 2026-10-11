import { CiCalendar } from 'react-icons/ci';
import { GoPeople } from 'react-icons/go';
import { Link } from 'react-router';

function CardCommunities({ community: e }) {
  return (
    <Link
      to={`/communities/${e.community_id}`}
      key={e.community_id}
    >
      <article className="flex gap-12 h-full justify-between flex-col border border-border-header round-8 overflow-hidden">
        <div className="">
          <img
            className="w-full object-cover"
            src={e.image}
            alt={e.community_id}
          />
        </div>
        <div className="flex flex-col gap-6 p-16">
          <span className="f-16 font-semibold text-dark-primary">
            {e.title}
          </span>
          <span className="text-xs text-font-forthy">{e.description}</span>
          <div className="flex gap-6">
            {e.categories.map((res, idx) => {
              return (
                <span
                  key={idx}
                  className="text-font-sixty text-xs py-2 px-8 round-8 bg-biru10"
                >
                  {res}
                </span>
              );
            })}
          </div>
          <div className="flex justify-left gap-8 [&_span]:text-xs [&_span]:text-font-forthy">
            <div className="flex gap-4">
              <GoPeople />
              <span>{e.members} members</span>
            </div>
            <div className="flex gap-4">
              <CiCalendar />
              <span>{e.members} upcoming</span>
            </div>
          </div>
          <div className="flex gap-8 pt-6 items-center">
            <span className="bg-primary py-6 px-12 f-14 text-light w-full text-center font-medium round-8">
              Join Community
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default CardCommunities;
