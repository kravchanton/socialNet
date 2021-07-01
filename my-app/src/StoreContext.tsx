import React from "react";
import {StateType} from "./redux/store";

const StoreContext = React.createContext({} as StateType)

export default StoreContext