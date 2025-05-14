import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ isVisible, onClose, children }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowModal(true);
      document.body.classList.add("overflow-hidden");
    } else {
      setTimeout(() => setShowModal(false), 300); // Match the duration of the transition
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isVisible]);

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  if (!showModal && !isVisible) return null;

  return (
    <div
      className={
        "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-300 " +
        (isVisible ? "opacity-100" : "opacity-0 pointer-events-none")
      }
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-auto h-auto flex flex-col overflow-y-auto overflow-x-hidden min-h-[200px] min-w-[200px]">
        <div className="">
          <div className="bg-black flex justify-end" onClick={() => onClose()}>
            <FontAwesomeIcon
              className="w-[20px] text-blue-gray-700 px-3 py-3 cursor-pointer"
              icon={faXmark}
              size="2x"
            />
          </div>
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
