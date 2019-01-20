import React, {Component} from 'react';
import Photo from './Photo';

class Comments extends Component {
  renderComments(comment, index) {
    return (
      <div className='comment' key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment' onClick={this}>&times;</button>
        </p>
      </div>
    )
  }

  handleSubmit(event) {
    event.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comments = this.refs.comment.value;
    this.props.addComment(postId, author, comments);
    this.refs.commentForm.reset();
  }

  render() {

    return (
      <div className='comments'>
        {this.props.postComments.map(this.renderComments)}
        <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit.bind(this)}>
          <input ref="text" ref="author" placeholder="author" />
          <input ref="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
}


export default Comments;
