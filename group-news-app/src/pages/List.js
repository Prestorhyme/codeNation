import React from "react";
import {Link} from "react-router";


class List extends React.component {
  render () {
    return (
      <div>
        <p>Please choose a link</p>
        <ul>
          <li><Link to="/react">React</Link></li>
        </ul>
      </div>
    );
  }
}

export default List;
