import { createContext, useState } from "react";
import { IContext } from "../interface/Index";
export const AppContext = createContext<IContext>({} as IContext);
