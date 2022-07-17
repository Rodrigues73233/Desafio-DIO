import React, { Children } from "react";

function Layout({Children}) {
  return (
    <section>
      <header>header</header>
      {Children}
    </section>
  );
}

export default Layout