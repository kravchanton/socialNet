import React from "react";
import {StateType} from "./redux/store";

export type ProviderType ={
    store: StateType,
    children: any
}

const StoreContext = React.createContext({} as StateType)
export const Provider = (props: ProviderType) => {
    return
}
export default StoreContext