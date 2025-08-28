import type { ReactNode } from "react";

interface CommonWrapperProps {
  children: ReactNode;
}

const CommonWrapper = ({ children }: CommonWrapperProps) => {
  return <div className="max-w-7xl mx-auto">{children}</div>;
};

export default CommonWrapper;
