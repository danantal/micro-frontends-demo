import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.css";

const Counter = React.lazy(() =>
  import("remote/Counter").then((module) => ({ default: module.Counter }))
);

class ModuleErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log("ModuleErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <ModuleErrorBoundary fallback={"Counter failed to load"}>
      <Suspense fallback={<div>Loading...</div>}>
        <Counter />
      </Suspense>
    </ModuleErrorBoundary>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
