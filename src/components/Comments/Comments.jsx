import "../Comments/Comments.scss";
import mohanAvatar from "../../assets/images/Mohan-muruge.jpg";
import addComment from "../../assets/Icons/add_comment.svg";
import { Link } from "react-router-dom";

function Comments({ selectedVideo }) {
  return (
    <div className="section--comments">
      <div className="comments">
        <h3 className="comments__number">
          {selectedVideo.comments.length} comments
        </h3>
        <div className="comments__add--comments">
          <img
            className="comments__img"
            src={mohanAvatar}
            alt="comment profile picture"
          />
          <form className="comments__form" id="form" method="post" action="#">
            <h1 className="comments__title">JOIN THE CONVERSATION</h1>
            <div className="tablet">
              <textarea
                className="comments__text--mobile"
                id="comment"
                name="user_comment"
                rows="4"
                placeholder="Add a new comment"
                spellCheck="true"
              ></textarea>
              <textarea
                className="comments__text--tablet"
                id="comment"
                name="user_comment"
                rows="1"
                placeholder="Add a new comment"
                spellCheck="true"
              ></textarea>
              <div>
                <Link to={`/`}>
                  <button className="button__tablet">
                    <img src={addComment} alt="Add comment icon" />
                    <p>COMMENT</p>
                  </button>
                </Link>
              </div>
            </div>
            <div>
              <Link to={`/`}>
                <button className="comments__button">
                  <img src={addComment} alt="Add comment icon" />
                  <p>COMMENT</p>
                </button>
              </Link>
            </div>
          </form>
        </div>

        <div className="display-comments__wrapper">
          {selectedVideo.comments.map((comment, index) => (
            <div key={index} className="comment">
              <div className="comment__avatar"></div>
              <div className="comment__content">
                <div className="comment__header">
                  <h3 className="comment__name">{comment.name}</h3>
                  <span className="comment__timestamp">
                    {new Date(selectedVideo.timestamp).toLocaleDateString()}
                  </span>
                </div>
                <p className="comment__text">{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comments;
