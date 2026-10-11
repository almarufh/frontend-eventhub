import { useDispatch, useSelector } from "react-redux";

export function useRedux() {
    const dispatch = useDispatch();

    const events = useSelector((state) => state.events);
    const categorys = useSelector((state) => state.categorys);
    const discussions = useSelector((state) => state.discussions);
    const communities = useSelector((state) => state.communities);
    const users = useSelector((state) => state.users);
    const auth = useSelector((state) => state.auth);

    return {
        dispatch,
        events,
        categorys,
        discussions,
        communities,
        users,
        auth,
    };
}