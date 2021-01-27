

export const problemReducer = ( state = [], action) => {
    switch ( action.type ){
        case 'set':
            return [...state, action.payload]
        
        default:
            return state;
    }
}