import { useQuery } from "@apollo/client";
import getLists from "../../graphql/queries/getLists";

const useLists = () => {
    const { data, error, loading } = useQuery(getLists);
    return {
        lists: data?.lists || [],
        loading,
    }
}

export default useLists;