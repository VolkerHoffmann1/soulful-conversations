import React from "react";

const motion = new Proxy(
  {},
  {
    get: (_target, prop: string) => {
      return React.forwardRef((props: any, ref: any) => {
        const { initial, animate, whileInView, viewport, transition, ...rest } = props;
        return React.createElement(prop, { ...rest, ref });
      });
    },
  }
);

export { motion };
export const AnimatePresence = ({ children }: any) => children;
