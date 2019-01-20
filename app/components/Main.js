import React, {Component} from 'react';
import { Link } from 'react-router';

class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">reduxstaGRAM</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}


module.exports = Main;
