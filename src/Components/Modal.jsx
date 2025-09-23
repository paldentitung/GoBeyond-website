import React from "react";

const Modal = ({ showModal }) => {
  return (
    <>
      {showModal && (
        <div className="fixed min-h-screen bg-black/300 z-50">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem labore veniam, modi accusamus hic sint beatae optio
            unde fugiat ea aliquam delectus totam obcaecati tenetur excepturi
            adipisci eaque consequatur deleniti.
          </div>
          <div className="">&times;</div>
        </div>
      )}
    </>
  );
};

export default Modal;
