import React, { useEffect } from "react";
import "./styles.css";

// Import Country Component here
const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(`Timeout called!`);
    }, 3);
    return () => clearTimeout(timer);
  }, []);
  return <div>This is Currently Component</div>;
};
export default App;
