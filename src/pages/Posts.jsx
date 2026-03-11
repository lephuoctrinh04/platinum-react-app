import { useEffect, useState } from "react";
import axios from "axios";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=8"
        );
        setPosts(response.data);
      } catch (error) {
        setErrorText("Failed to load posts.");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <main className="container page-section">
      <div className="page-header">
        <h1>Latest Posts</h1>
        <p>Read useful content fetched from an external API.</p>
      </div>

      {loading && <p className="status-text">Loading posts...</p>}
      {errorText && <p className="error-text">{errorText}</p>}

      <div className="posts-grid">
        {posts.map((post) => (
          <article className="post-card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Posts;