export type FormAction =
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'UPDATE_DATA'; payload: any };

// Define el tipo para el estado del formulario
export interface FormState {
  step: number;
  formData: any; // Tipo para los datos del formulario
}


export const formReducer = (state: FormState, action: FormAction): FormState => {
    switch (action.type) {
      case 'NEXT_STEP':
        return { ...state, step: state.step + 1 };
      case 'PREV_STEP':
        return { ...state, step: state.step - 1 };
      case 'UPDATE_DATA':
        return { ...state, formData: { ...state.formData, ...action.payload } };
      default:
        return state;
    }
  };