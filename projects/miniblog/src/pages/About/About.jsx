// CSS
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        About the Mini <span>Blog</span>
      </h2>
      <p>
        This is a simple blog application built with React and Firebase. It
        allows users to create, read, update, and delete posts.
      </p>
      <Link to="/posts/create" className="btn">
        Create Post
      </Link>
    </div>
  );
};

export default About;
