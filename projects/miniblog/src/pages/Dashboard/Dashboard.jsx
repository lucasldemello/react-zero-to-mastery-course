import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

// hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  // user posts
  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

  // delete post function
  const { deleteDocument } = useDeleteDocument("posts");

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.dashboard}>
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
        <>
          <div className={styles.post_header}>
            <span>Title</span>
            <span>Actions</span>
          </div>
          {posts &&
            posts.map((post) => (
              <div key={post.id} className={styles.post_row}>
                <p>{post.title}</p>
                <div className={styles.actions}>
                  <Link to={`/posts/${post.id}`} className="btn btn-outline">
                    View
                  </Link>
                  <Link
                    to={`/posts/edit/${post.id}`}
                    className="btn btn-outline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteDocument(post.id)}
                    className="btn btn-outline btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default Dashboard;
