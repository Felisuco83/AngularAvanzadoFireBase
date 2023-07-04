// Impoertamos los tipos de acciones que va a gestionar este reducer
import { ACTION_CAMBIO_MENSAJE, ACTION_CAMBIO_VALOR } from "../actions/appActions";
import { IAppReducerState } from "../state/IAppReducerState";
// Importamos la interface del estado que va a manejar el reducer

//Creamos el estado inicial de este Reducer
const initialState: IAppReducerState = {
    mensaje: 'Hola',
    valor: true
};

// Creamos un Reducer (Función PURA)
export function messageReducer(state = initialState, action: any): IAppReducerState {
    switch (action.type) {
        case ACTION_CAMBIO_MENSAJE:
            return { ...state, mensaje: action.payload };
            break;
        case ACTION_CAMBIO_VALOR:
            return { ...state, valor: action.payload }
            break;
    }
    return state;
}