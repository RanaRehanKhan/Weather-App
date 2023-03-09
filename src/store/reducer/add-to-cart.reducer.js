const initialState = {
    isAddedToCart: false
 }
 const addToCartReducer = (state = initialState, action) => { //es6 arrow function
    switch (action.type) {
       case 'ADD_TO_CART_SUCCESS' :
          state.isAddedToCart = !state.isAddedToCart; //original object altered
          return state;
       default:
          return state;
    }
 }
 export default addToCartReducer ;