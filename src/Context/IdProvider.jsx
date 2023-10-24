import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const IdContext = createContext(null);

const IdProvider = ({ children }) => {
  const [id, setId] = useState(null);
  const idInfo = {
    id,
    setId,
  };
  return (
    <>
      <IdContext.Provider value={idInfo}>{children}</IdContext.Provider>
    </>
  );
};

IdProvider.propTypes = {
  children: PropTypes.node,
};

export default IdProvider;