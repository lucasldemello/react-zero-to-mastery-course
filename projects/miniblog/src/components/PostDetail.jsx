import { Link } from "react-router-dom";

import styles from "./PostDetail.module.css";

const PostDetail = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdby}>por: {post.createdBy}</p>
      <div className={styles.tags}>
        {post.tags.map((tag, index) => (
          <p key={`${tag}-${index}`}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Read
      </Link>
    </div>
  );
};

export default PostDetail;
// This component displays the details of a post, including its image, title, author, tags, and a link to read more about the post. It uses CSS modules for styling and React Router for navigation. The `post` prop is expected to contain the necessary data for rendering the post details.
