import React from "react";
import "./IndPost.css";
import CommentSection from "../CommentSection/CommentContainer";

class IndPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }
  addNewLike = () => {
    // console.log("newlike");
    this.setState({
      likes: this.state.likes + 1
    });
  };

  render() {
    return (
      <div className="individual-post" id={this.props.post.index}>
        <div className="card-title">
          <img
            className="thumbnail-photo"
            src={this.props.post.thumbnailUrl}
            alt="thumbnail"
          />
          <p className="user-name">{this.props.post.username}</p>
        </div>
        <div>
          <img
            src={this.props.post.imageUrl}
            alt="post content"
            className="post-photo"
          />
          <div className="comment-actions">
            <i
              onClick={this.addNewLike}
              id="heart-icon-comment"
              className="far fa-heart"
            />

            <i id="comment-icon-comment" className="far fa-comment" />
          </div>
          <div>
            <p className="likes-number">{this.state.likes} likes</p>
            <CommentSection
              className="comment-container"
              comments={this.props.post.comments}
              id={this.props.post.imageUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}

// function IndPost(props) {
//   return (
//     <div className="individual-post">
//       <div className="card-title">
//         <img
//           className="thumbnail-photo"
//           src={props.post.thumbnailUrl}
//           alt="thumbnail"
//         />
//         <p className="user-name">{props.post.username}</p>
//       </div>
//       <div>
//         <img
//           src={props.post.imageUrl}
//           alt="post content"
//           className="post-photo"
//         />
//       </div>
//       <div className="comment-actions">
//       <button onClick={props.newLike} className='btn'><i id="heart-icon-comment" className="far fa-heart" /></button>
//         <i id="comment-icon-comment" className="far fa-comment" />
//       </div>
//       <div>
//         <p className="likes-number">{props.post.likes} likes</p>
//         <CommentSection
//           className="comment-container"
//           comments={props.post.comments}
//         />
//       </div>
//     </div>
//   );
// }

export default IndPost;
