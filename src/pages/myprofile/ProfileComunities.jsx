import CardCommunities from '../../components/communities/CardCommunities';
import { useRedux } from '../../hooks/useRedux';

function ProfileEvents() {
  const {
    communities: { joined },
  } = useRedux();
  return (
    <div className="grid grid-cols-2 gap-16">
      {joined.map((community) => {
        return <CardCommunities community={community} />;
      })}
    </div>
  );
}

export default ProfileEvents;
