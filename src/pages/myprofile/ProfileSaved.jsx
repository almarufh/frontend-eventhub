import { useEffect } from 'react';
import CardEvent from '../../components/events/CardEvent';
import { useRedux } from '../../hooks/useRedux';
import { getMyEventsSaved } from '../../redux/slice/events';

function ProfileEvents() {
  const {
    auth: {
      user: { dark_preference },
    },
    events: {
      events: { saved },
    },
    dispatch,
  } = useRedux();

  useEffect(() => {
    dispatch(getMyEventsSaved());
  }, [dispatch]);
  return (
    <div className="grid grid-cols-2 gap-16">
      {saved.map((event) => {
        return (
          <CardEvent
            key={event.id}
            event={event}
            isDark={dark_preference}
          />
        );
      })}
    </div>
  );
}

export default ProfileEvents;
