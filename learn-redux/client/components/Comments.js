import React, { Component } from 'react';

export default class Comments extends Component {
  constructor(props) {
    super(props);

    this.renderComment = this.renderComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={this.props.removeComment.bind(
              null,
              this.props.params.postId,
              i
            )}
          >
            &times;
          </button>
        </p>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const { postId } = this.props.params;
    const author = this.author.value;
    const comment = this.comment.value;
    this.props.addComment(postId, author, comment);
    this.commentForm.reset();
  }

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form
          ref={(input) => {
            this.commentForm = input;
          }}
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            ref={(input) => {
              this.author = input;
            }}
            placeholder="author"
          />
          <input
            type="text"
            ref={(input) => {
              this.comment = input;
            }}
            placeholder="comment"
          />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}
