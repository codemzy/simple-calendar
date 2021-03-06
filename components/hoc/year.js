import React from 'react';

// hoc year component
export default function(ComposedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        year: (new Date()).getFullYear(),
        currentYear: (new Date()).getFullYear()
      };
    }

    handleChange(newYear) {
      this.setState({
        year: newYear
      });
    }

    render() {
      return (
        <ComposedComponent year={this.state.year} currentYear={this.state.currentYear} handleChange={this.handleChange.bind(this)} {...this.props} />
      );
    }
  };
}