// CSS
import styles from "./Home.module.css";

// Hooks
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

// components

const Home = () => {
  const [query, setQuery] = useState("");
  const [posts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.home}>
      <h1>See our latest posts</h1>
      <form className={styles.search_form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Or search for tags..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button className="btn btn-dark">Search</button>
      </form>
      <div className="post-list">
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Found no posts</p>
            <p>Would you like to create the first post?</p>
            <Link to="/posts/create" className="btn">
              Yes!
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
