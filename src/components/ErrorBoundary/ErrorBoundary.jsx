import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React error:", error);
    console.error("Component stack:", errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert">
          <h2>Щось пішло не так</h2>
          <p>Не вдалося відобразити цей компонент.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
