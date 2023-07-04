// Creamos una interface para establecer la estructura de datos que vamos a almacenar en el store de la aplicación

//Importamos la estructura del estado que vamnos a almacenar en el store
import { IAppReducerState } from "./state/IAppReducerState";

export interface IAppStore {
    messageState: IAppReducerState;
}