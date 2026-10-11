import { useRedux } from "../../hooks/useRedux";
import filterEvents from "../../utils/helper/filterEvents";
import { useEffect } from "react";
import CardEvent from "./CardEvent";

function CardEvents(props) {
  const {
    categorys,
    events: {
      data: events,
    }
  } = useRedux()

  let evenstFiltered = filterEvents(events, props)
  useEffect(()=> {
    if(props.total){
      props.total(evenstFiltered.length)
    }
  },[evenstFiltered, props])

    return (
      <>
      {evenstFiltered?.map((res) => {
          return ( 
            <CardEvent 
              key={res.id}
              event={res} 
              category={categorys.data}
            />
          );
      })}
      </>
    );
}

export default CardEvents;