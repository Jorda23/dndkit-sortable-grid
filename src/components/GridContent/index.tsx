import { memo } from "react";

import { GridContentProps } from "../../interfaces/GridContent.interface";

const GridContent = ({ children, ...rest }: GridContentProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr))`,
        gridGap: 10,
        padding: 10,
      }}
      {...rest}
    >
      {children}
      <style>
        {`
          @media (max-width: 768px) {
            div {
              grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
            }
          }
        `}
      </style>
    </div>
  );
};

export default memo(GridContent);
