import "./styles.css";
import { useState, useEffect } from "react";
import { Typewriter } from "./Typewriter";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [flag, setFlag] = useState("");

  useEffect(() => {
    setIsLoaded(false);
    fetch(
      "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/736572"
    )
      .then((res) => res.text())
      .then((data) => {
        setFlag(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return <div>{isLoaded && <Typewriter text={flag} />}</div>;
}
