import React, { useState } from "react";

export function ButtonSelectAll() {
  const [selected, setSelected] = useState(false);

  const handlerClick = () => {
    setSelected(true);
  };

  return (
    <>
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <p className="info">
          {selected ? "All gentlemen are" : "0 gentlemen"} pointing at you
        </p>
        <button className="button button--select" onClick={handlerClick}>
          Select all
        </button>
      </section>
    </>
  );
}