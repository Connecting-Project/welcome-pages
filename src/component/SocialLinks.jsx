import React from 'react';

function SocialLink(props) {

  return (
    <div className="social">
      <a
        id="profile-link"
        href="https://github.com/Connecting-Project"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub Profile"
      >
        {' '}
        <i className="fab fa-github" />
      </a>
    </div>
  );

}

export default SocialLink;