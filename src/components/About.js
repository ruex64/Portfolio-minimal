import React, { useEffect, useRef } from "react";

const About = () => {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    if (window.RoughNotation) {
      const { annotate } = window.RoughNotation;

      // Create annotations
      const underlineAnnotation = annotate(textRef1.current, { 
        type: "underline", 
        color: "#FFD700", 
        strokeWidth: 3 
      });

      const circleAnnotation = annotate(textRef2.current, { 
        type: "circle", 
        color: "#FFD700", 
        strokeWidth: 3 
      });

      // Show annotations
      underlineAnnotation.show();
      setTimeout(() => circleAnnotation.show(), 1000);

      // Infinite Loop Animation
      setInterval(() => {
        underlineAnnotation.hide();
        circleAnnotation.hide();
        setTimeout(() => {
          underlineAnnotation.show();
          setTimeout(() => circleAnnotation.show(), 1000);
        }, 1000);
      }, 4000);
    }
  }, []);

  return (
    <section id="about" className="section fade-in">
      <h2>About Me</h2>
      <p>
        <span ref={textRef1} className="annotated-text">Hi there! I’m a college student</span>
        &nbsp;and a&nbsp;
        <span ref={textRef2} className="annotated-text">Full Stack MERN Developer</span>  
        &nbsp;with a passion for UI/UX design.
      </p>
    </section>
  );
};

export default About;
