import React, { Component } from 'react';
import { Link } from 'react-router';


class Photo extends Component {
  render() {
    const { post, index, comments } = this.props;

    return (
      <div>
        <Link to={`/view/${post.code}`}>
          <img src={post.display_src} alt=
          {post.caption} className='grid-photo' />
        </Link>
        <div>
          <p>{post.caption}</p>
            <div className='controls'>
              <button onClick={this.props.increment.bind(null, index)}>&hearts; {post.likes} </button>
              <Link to={`/view/${post.code}`}>
                <span className='comments'>
                  <button>
                    {comments[post.code] ? comments[post.code].length : 0}
                  </button>
                </span>
              </Link>
            </div>
        </div>
      </div>
    )
  }
}

export default Photo;
