import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  componentDidMount() {
    return true;
  }

  static getDerivedStateFromError() {
    return { error: true }; // update the state object
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    if (error) {
      this.props.setErr(true);
      return <p id="err">Something wrong happen! 🧐</p>;
    } else {
      this.props.setErr(false);
      return children;
    }
  }
}

export default ErrorBoundary;
