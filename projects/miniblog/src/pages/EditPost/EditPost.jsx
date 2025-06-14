import styles from "./EditPost.module.css";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { useFetchDocument } from "../../hooks/useFetchDocument";

const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setImage(post.image);
      setBody(post.body);

      const textTags = post.tags.join(", ");
      setTags(textTags ? textTags.split(",") : []);
    }
  }, [post]);

  const { user } = useAuthValue();

  const navigate = useNavigate();

  const { updateDocument, response } = useUpdateDocument("posts");

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

    const data = {
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    };

    updateDocument(id, data);

    // redirect user to home page
    navigate("/dashboard");
  };

  return (
    <div className={styles.edit_post}>
      {post && (
        <>
          <h2 className={styles.title}>Editing post: {post && post.title}</h2>
          <p>Update the post information below:</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>
              <span>Title:</span>
              <input
                type="text"
                required
                placeholder="Update your post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>

            <label>
              <span>Image URL:</span>
              <input
                type="text"
                required
                placeholder="Enter an image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </label>
            <p className={styles.preview_title}>Current image preview:</p>
            <img
              className={styles.image_preview}
              src={post.image}
              alt={post.title}
            />

            <label>
              <span>Body:</span>
              <textarea
                required
                placeholder="Enter the post content"
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
            {!response.loading && <button className="btn">Update Post</button>}
            {response.loading && (
              <button className="btn" disabled>
                Loading...
              </button>
            )}
            {(response.error || formError) && (
              <p className="error">{response.error || formError}</p>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default EditPost;
