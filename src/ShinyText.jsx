import { useEffect, useRef } from "react";
import "./ShinyText.css";

function ShinyText({
  text,
  color = "#ffffff",
  shineColor = "#ffffff",
  speed = 2,
  spread = 120,
  direction = "left",
}) {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.setProperty("--shine-speed", `${speed}s`);
      textRef.current.style.setProperty("--shine-spread", `${spread}deg`);
      textRef.current.style.setProperty("--text-color", color);
      textRef.current.style.setProperty("--shine-color", shineColor);
      textRef.current.style.setProperty(
        "--shine-direction",
        direction === "left" ? "normal" : "reverse",
      );
    }
  }, [speed, spread, color, shineColor, direction]);

  return (
    <span ref={textRef} className="shiny-text">
      {text}
    </span>
  );
}

export default ShinyText;
