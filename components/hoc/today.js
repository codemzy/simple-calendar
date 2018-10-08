import React from 'react';
import moment from 'moment';

// hoc today component
export default function(ComposedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentDay: false,
        currentMonth: false
      };
    }
    
    componentDidMount() {
      this.setState({
        currentDay: moment().format('YYYY-MM-DD'),
        currentMonth: moment().format("YYYY-MM")
      });
    }

    render() {
      return (
        <ComposedComponent currentDay={this.state.currentDay} currentMonth={this.state.currentMonth} {...this.props} />
      );
    }
  };
}