import styles from "./Search.module.css";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

const Search = () => {
  const query = useQuery();
  const search = query.get("q") || "";
  
  return (
    <div>
      <h2>Search: {search}</h2>
    </div>
  );
};

export default Search;
