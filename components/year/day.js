import React from 'react';

// components
import Popover from '../popover';
  
class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopover: false
    };
  }
  
  _showPopover(show) {
    this.setState({
      showPopover: show
    });
  }
  
  render() {
    return (
      <div className={"d-inline-block year-day" + (this.props.blank ? " blank" : "") } onMouseEnter={this._showPopover.bind(this, true)} onMouseLeave={this._showPopover.bind(this, false)}>
        { this.state.showPopover ? <Popover /> : false }
      </div>
    );
  }
};

export default Day;