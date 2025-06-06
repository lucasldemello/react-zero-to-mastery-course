import styles from "./CreatePost.module.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const navigate = useNavigate();

  const { insertDocument, response } = useInsertDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // Validate image URL
    try {
      new URL(image);
    } catch (error) {
      setFormError("Please provide a valid image URL.");
      return;
    }

    // create array of tags
    const tagsArray = tags.map((tag) => tag.trim().toLowerCase());

    // check all values
    if (!title || !image || !tags || !body) {
      setFormError("Please fill in all fields.");
    }

    if (formError) return;

    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // redirect user to home page
    navigate("/");
  };

  return (
    <div className={styles.create_post}>
      <h2 className={styles.title}>Create a new post</h2>
      <p>Write about anything you like and share with the world!</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          <span>Title:</span>
          <input
            type="text"
            required
            placeholder="Think of a good title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          <span>Image URL:</span>
          <input
            type="text"
            required
            placeholder="Think of a image that represents your post"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>

        <label>
          <span>Body:</span>
          <textarea
            required
            placeholder="Write your post content here"
            rows="10"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </label>

        <label>
          <span>Tags (comma separated):</span>
          <input
            type="text"
            placeholder="Enter tags separated by commas"
            className={styles.tags}
            value={tags.join(", ")}
            onChange={(e) =>
              setTags(e.target.value.split(",").map((tag) => tag.trim()))
            }
          />
        </label>
        {!response.loading && <button className="btn">Create Post</button>}
        {response.loading && (
          <button className="btn" disabled>
            Loading...
          </button>
        )}
        {(response.error || formError) && (
          <p className="error">{response.error || formError}</p>
        )}
      </form>
    </div>
  );
};

export default CreatePost;
