import React from "react";
import "./CommentSection.css";
import Comment from "./Comment";
import PropTypes from "prop-types";
import CommentInput from "./CommentInput";
import styled from 'styled-components';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      text: "",
      username: "",
    };
  }

  addNewComment = event => {
    // console.log("newcomment");
    this.setState({
      text: event.target.value, username: localStorage.getItem('user')
    });
  };

  handleNewComment = event => {
    // console.log("submit");
    event.preventDefault();
    const commentArray = this.props.comments;
    const newComment = { username: this.state.username, text: this.state.text };
    this.state.comments.push(newComment);
    this.setState({
        commentArray,
      text: ""
    });
  };

  render() {
      console.log('well looky here', this.state.comments)
    return (
      <div>
        {this.props.comments.map((comment, index) => {
          return <Comment comment={comment} key={index} />;
        })}
        <div>
          <Timestamp>2 HOURS AGO</Timestamp>
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

const Timestamp = styled.p`
    margin-left: 1.1rem;
    margin-top: 1rem;
    margin-bottom: 0.2rem;
    font-size: 0.8rem;
    color: #c4c4c4;
    font-weight: bold;
  `