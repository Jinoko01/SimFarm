import { createContext, useState } from "react";

const UserContext = createContext({
  state: { list: [], point: 0 },
  actions: { setList: () => {}, setPoint: () => {} },
});

const UserProvider = ({ children }) => {
  const [list, setList] = useState([]);
  const [point, setPoint] = useState(0);

  const value = {
    state: { list, point },
    actions: { setList, setPoint },
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const { Consumer: UserConsumer } = UserContext; // const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer };

export default UserContext;
