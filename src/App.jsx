import Navbar from "./components/Navbar";
import NewsBoard from "./components/TutorialBoard";
import { useState } from "react"; 
import { motion, useScroll } from "motion/react";

const App = () => {
  const [category, setCategory] = useState("general");
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{
          position: "fixed", // Stay in the top-right corner
          top: 10,
          right: 10,
          width: 80,
          height: 80,
          zIndex: 1000, // Ensure it's above other content
        }}
      >
        <svg width="100" height="75" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            style={{
              stroke: "#FFF",
              strokeWidth: 10,
              fill: "none",
              opacity: 0,
            }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            style={{
              stroke: "#ff0088",
              strokeWidth: 5,
              fill: "none",
              pathLength: scrollYProgress, // Add pathLength here
            }}
          />
        </svg>
      </motion.div>
      <div className="bg-dark-100">
        <Navbar setCategory={setCategory} />
        <NewsBoard category={category} />
      </div>
    </>
  );
};

export default App;
