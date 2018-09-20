import React from 'react';

// hoc year component
export default function(ComposedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        year: (new Date()).getFullYear()
      };
    }

    handleChange(newYear) {
      this.setState({
        year: newYear
      });
    }

    render() {
      return <ComposedComponent year={this.state.year} {...this.props} />;
    }
  };
}