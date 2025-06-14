import styles from "./Search.module.css";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

// components
import PostDetail from "../../components/PostDetail";
import { Link } from "react-router-dom";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocuments("posts", search);

  return (
    <div className={styles.search_container}>
      <h1>Found {posts ? posts.length : 0} results for "{search}"</h1>
      <div className="post-list">
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>We couldn't find any results for your search.</p>
            <Link to="/" className="btn btn-dark">
              Go back
            </Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Search;