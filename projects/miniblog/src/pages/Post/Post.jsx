import styles from "./Post.module.css";

// hooks
import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  console.log(post);

  return (
    <div>
      {loading && (
        <div className={styles.loading}>
          <p>Loading post ...</p>
        </div>
      )}
      {post && (
        <div className={styles.post_container}>
          <h1 className={styles.title}>{post.title}</h1>
          <img
            className={styles.post_image}
            src={post.image}
            alt={post.title}
          />
          <p>{post.body}</p>
          <p className={styles.createdBy}>
            Created by: <span>{post.createdBy}</span>
          </p>
          <h3>Tags:</h3>
          <div className={styles.tags}>
            {post.tags &&
              post.tags.map((tag) => (
                <p key={tag} className={styles.tag}>
                  <span>#</span>
                  {tag}
                </p>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
