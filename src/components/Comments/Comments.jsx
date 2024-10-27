import React from "react";
import "../Comments/Comments.scss";
import mohanAvatar from "../../assets/images/Mohan-muruge.jpg";
import addComment from "../../assets/Icons/add_comment.svg";

function Comments({ comments }) {
  return (
    <div className="section--comments">
      <div className="comments">
        <h1 className="comments__title">Join the Conversation</h1>
        <div className="comments__add--comments">
          <div className="comments__img">
            <img src={mohanAvatar} alt="comment profile picture" />
          </div>
          <div className="comments__form">
            <form id="form" method="post" action="#">
              <textarea
                className="comments__text"
                id="comment"
                name="user_comment"
                rows="4"
                placeholder="Add a new comment"
                spellCheck="true">
              </textarea>
              <button
                id="add-comment"
                className="comments__button"
                type="submit">
                <img src={addComment} alt="Add comment icon" />
                <p>COMMENT</p>
              </button>
            </form>
          </div>
        </div>

        <div className="display-comments__wrapper">
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <div className="comment__avatar"></div>
              <div className="comment__content">
                <div className="comment__header">
                  <h3 className="comment__name">{comment.name}</h3>
                  <span className="comment__timestamp">
                    {comment.timestamp}
                  </span>
                </div>
                <p className="comment__text">{comment.commentText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comments;
