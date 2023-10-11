import {
  faCircleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Alert = ({ setVisible, visible, message }) => {
  return (
    <>
      {visible && (
        <div className="flex items-center p-4 mb-4 text-red-700 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
          <FontAwesomeIcon icon={faCircleExclamation} />
          <p className="ml-3 text-sm font-medium">{message}</p>
          <button
            type="button"
            className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
            onClick={() => setVisible(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      )}
    </>
  );
};

export default Alert;
