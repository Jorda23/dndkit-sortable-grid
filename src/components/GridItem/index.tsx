import { Ref, forwardRef, memo } from "react";

import { CardItemProps } from "../../interfaces";

const CardItem = forwardRef(
  (Props: CardItemProps, ref: Ref<HTMLDivElement>) => {
    // Cuando utilizas forwardRef, puedes pasar la ref a un componente secundario y el componente padre podrá acceder directamente a los métodos del DOM del componente hijo.

    return (
      <div
        ref={ref}
        className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between text-center"
        {...Props}
      >
        <div className="sm:flex sm:items-center px-6 py-4 justify-center items-center">
          <img
            className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-xl"
            src={Props.url}
            alt="Person"
          />
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">{Props.title}</p>
          <p className="text-gray-600 text-sm">{Props.description}</p>
        </div>
        <button className="bg-blue-500 mb-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg mx-auto w-32">
          Tocame
        </button>
      </div>
    );
  }
);

export default memo(CardItem);
