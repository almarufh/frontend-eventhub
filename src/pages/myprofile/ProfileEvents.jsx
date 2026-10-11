import { useEffect } from 'react';
import CardEvent from '../../components/events/CardEvent';
import { useRedux } from '../../hooks/useRedux';
import { getMyEventsJoined } from '../../redux/slice/events';

function ProfileEvents() {
  const {
    auth: {
      user: { dark_preference },
    },
    events: {
      events: { joined },
    },
    dispatch,
  } = useRedux();

  useEffect(() => {
    dispatch(getMyEventsJoined());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-2 gap-16">
      {joined.map((event) => {
        return (
          <CardEvent
            key={event.id}
            event={event}
            isDark={dark_preference}
            dispatch={dispatch}
          />
        );
      })}
    </div>
  );
}

export default ProfileEvents;
