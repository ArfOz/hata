export function reducer(state, action) {
    switch(action.type){
        case "ADD_TO_FAVOURITE":
            // const newList = [...state.favouriteList];
            // newList.push(action.payload.selectedRestaurant);
            const newList = [...state.favouriteList, action.payload.selectedRestaurant]
            // state.favouriteList = newList;
            // return {...state}
            return {...state, favouriteList: newList}
        default:
            return state;
    }
}