import { faAngleDown, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const PostBar = () => {
    return (
        <div className='container mt-4'>
<nav class="nav">
  <a class="nav-link active" href="#">All Posts(32)</a>
  <a class="nav-link" href="#">Article</a>
  <a class="nav-link" href="#">Event</a>
  <a class="nav-link" href="#">Education</a>
  <a class="nav-link" href="#">Job</a>

  <button type="button" class="btn btn-secondary">Write a Post <FontAwesomeIcon icon={faAngleDown}/></button>
  <button type="button" class="btn btn-info mx-4"><FontAwesomeIcon icon={faUserGroup}/> Join Group</button>



</nav>
        </div>
    );
};

export default PostBar;