import React from "react";


const Header = () => (
  <nav className="nav">
    <div className="nav-container">
      <div className="nav-title"></div>
    </div>
  </nav>
);

export const PageLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <article>
    <Header />
    {children}
  </article>
);
