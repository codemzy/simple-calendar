import React from 'react';

// components
import Popover from '../popover';
  
class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopover: false,
      coords: {}
    };
  }
  
  _showPopover(show, e) {
    const coords = {
      top: e.target.offsetTop - (e.target.offsetHeight * 2),
      left: e.target.offsetLeft - e.target.offsetWidth
    }
    this.setState({
      showPopover: show,
      coords: show ? coords : {}
    });
  }
  
  render() {
    return (
      <div className={"d-inline-block year-day" + (this.props.blank ? " blank" : "") } onMouseEnter={this._showPopover.bind(this, true)} onMouseLeave={this._showPopover.bind(this, false)}>
        { this.state.showPopover && !this.props.blank ? <Popover coords={this.state.coords}>{this.props.dayName} {this.props.month} {this.props.day}, {this.props.year}</Popover> : false }
      </div>
    );
  }
};

export default Day;