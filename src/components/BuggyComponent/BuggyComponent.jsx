function BuggyComponent({ shouldCrash }) {
  if (shouldCrash) {
    throw new Error("Test render error");
  }

  return <p>Компонент працює!</p>;
}

export default BuggyComponent;
