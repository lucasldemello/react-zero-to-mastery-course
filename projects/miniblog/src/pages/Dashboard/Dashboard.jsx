import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

// hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  // user posts
  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  return (
    <div>
      <h2>Dashboard</h2>
      <p> Manage your posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>You have not created any posts yet.</p>
          <Link to="/posts/create" className="btn">
            Create your first post
          </Link>
        </div>
      ) : (
        <div>
          <p>Your posts</p>
        </div>
      )}

      {posts &&
        posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <Link to={`/posts/${post.id}`} className="btn btn-outline">
              View Post
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
