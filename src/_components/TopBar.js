import React, {Component} from 'react';

class TopBar extends Component {
  render() {
    return (
      <div className="topbar">
        <span className="topbar__title">Recipe <span className="secondary-color">Finder</span></span>
      </div>
    )
  }
}

export default TopBar