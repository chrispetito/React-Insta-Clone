import React from "react";
import "./CommentSection.css";
import Comment from "./Comment";
import PropTypes from "prop-types";
import CommentInput from "./CommentInput";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      text: "",
      username: ""
    };
  }

  addNewComment = event => {
    console.log("newcomment");
    this.setState({
      text: event.target.value, username: 'lambdaschool'
    });
  };

  handleNewComment = event => {
    console.log("submit");
    event.preventDefault();
    const commentArray = this.state.comments;
    const newComment = { username: this.state.username, text: this.state.text };
    this.state.comments.push(newComment);
    this.setState({
        commentArray,
      text: ""
    });
  };

  render() {
    return (
      <div>
        {this.state.comments.map((comment, index) => {
          return <Comment comment={comment} key={index} />;
        })}
        <div>
          <p className="timestamp">2 HOURS AGO</p>
        </div>
        <CommentInput
          newComment={this.addNewComment}
          handleComment={this.handleNewComment}
          text={this.state.text}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  )
};

export default CommentSection;
