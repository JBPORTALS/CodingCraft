import { createContext, useState } from "react";

interface CounterCtxDefaultType {
  count: number;
  updateState: () => void;
}

//Global Counter State
export const CounterCtx = createContext<CounterCtxDefaultType>({
  count: 0,
  updateState: () => {},
});

interface CounterProviderProps {
  children: React.ReactNode;
}

export const CounterProvider = ({ children }: CounterProviderProps) => {
  const [count, setCount] = useState(0);

  function updateState() {
    setCount(count + 1);
  }

  return (
    <CounterCtx.Provider value={{ count, updateState }}>
      {children}
    </CounterCtx.Provider>
  );
};
