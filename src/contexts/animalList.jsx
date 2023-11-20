import { createContext, useState } from "react";

const AnimalContext = createContext({
  state: { list: [] },
  actions: { setList: () => {} },
});

const AnimalProvider = ({ children }) => {
  const [list, setList] = useState([]);

  const value = {
    state: { list },
    actions: { setList },
  };
  return (
    <AnimalContext.Provider value={value}>{children}</AnimalContext.Provider>
  );
};

const { Consumer: AnimalConsumer } = AnimalContext; // const AnimalConsumer = AnimalContext.Consumer

export { AnimalProvider, AnimalConsumer };

export default AnimalContext;
