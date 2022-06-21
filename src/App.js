import React, { useEffect, useState } from "react";
import Blog from "./Components/Blog";
import Loader from "./Components/Loader/loader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return <div>{loading ? <Loader /> : <Blog />}</div>;
}

export default App;
