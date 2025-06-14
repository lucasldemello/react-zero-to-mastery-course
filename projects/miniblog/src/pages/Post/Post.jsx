import styles from "./Post.module.css";

// hooks
import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  const formatPostBody = (body) => {
    if (!body) return "";

    return body
      .split("\n")
      .map((paragraph, index) => {
        if (paragraph.trim() === "") return null;

        return (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        );
      })
      .filter(Boolean);
  };

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

          {post.image && (
            <div className={styles.image_container}>
              <img
                className={styles.post_image}
                src={post.image}
                alt={post.title}
              />
            </div>
          )}

          <div className={styles.post_content}>
            <div className={styles.body}>{formatPostBody(post.body)}</div>
          </div>

          <div className={styles.post_meta}>
            <p className={styles.createdBy}>
              Criado por: <span>{post.createdBy}</span>
            </p>

            {post.tags && post.tags.length > 0 && (
              <div className={styles.tags_section}>
                <h3>Tags:</h3>
                <div className={styles.tags}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
