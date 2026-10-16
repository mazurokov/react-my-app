import ErrorBoundary from "@components/ErrorBoundary/ErrorBoundary.jsx";
import BuggyComponent from "@components/BuggyComponent/BuggyComponent.jsx";
function ErrorDemo() {
  return (
    <div>
      <h2>Error Boundary Demo</h2>

      <ErrorBoundary>
        <BuggyComponent shouldCrash={true} />
      </ErrorBoundary>

      <p>Цей текст має залишитися видимим.</p>
    </div>
  );
}

export default ErrorDemo;
