const initalState = {
    loading: false,
    error:false,
    msgError:null
}

export const uiReducer = ( state = initalState, action) => {
    switch (action.type) {
        case 'uiSetError':
            return {
                ...state,
                error:true,
                msgError:action.payload
            }
        case 'removeError':
            return {
                ...state,
                error:false,
                loading:false,
                msgError:null
            }
        case 'setLoading':
            return {
                ...state,
                loading:true
            }
        case 'removeLoading':
            return {
                ...state,
                loading:false
            }
        default:
            return state;
    }
}