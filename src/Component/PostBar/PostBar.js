import React from 'react';

const PostBar = () => {
    return (
        <div>
<nav class="nav">
  <a class="nav-link active" href="#">All Posts(32)</a>
  <a class="nav-link" href="#">Article</a>
  <a class="nav-link" href="#">Event</a>
  <a class="nav-link" href="#">Education</a>
  <a class="nav-link" href="#">Job</a>

  <button type="button" class="btn btn-secondary">Write a Post</button>
  <button type="button" class="btn btn-info mx-4">Join Group</button>



</nav>
        </div>
    );
};

export default PostBar;