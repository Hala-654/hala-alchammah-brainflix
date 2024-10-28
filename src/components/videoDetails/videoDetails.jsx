import "../videoDetails/videoDetails.scss";
import views from "../../assets/Icons/views.svg";
import likes from "../../assets/Icons/likes.svg";

function videoDetails() {
  return (
    <div className="body-container">
      <h1> The Future of Artificial Intelligence </h1>
      <div className="body__author">
        <div className="body__author--info">
          <h3>By Aiden Thompson</h3>
          <p className="silver">8/8/2023</p>
        </div>
        <div className="body__author--icon">
          <div className="silver">
            <img src={views} alt="views icon" />
            980,544
          </div>

          <p className="silver">
            <img src={likes} alt="likes icon" />
            22,479
          </p>
        </div>
      </div>
      <div className="body__text">
        <span>
          Explore the cutting-edge developments and predictions for Artificial
          Intelligence in the coming years. From revolutionary breakthroughs in
          machine learning to the ethical considerations influencing AI
          advancements, this exploration transcends the boundaries of mere
          speculation. Join us on a journey that navigates the intricate
          interplay between innovation, ethics, and the ever-evolving tech
          frontier.
        </span>
      </div>
    </div>
  );
}
export default videoDetails;
