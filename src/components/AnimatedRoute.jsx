import React from "react";
import { useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const AnimatedRoute = ({ children }) => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} classNames="page" timeout={500}>
        <section className="route-section">{children}</section>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AnimatedRoute;
