// In redux we store the application states in a single javascript object, called store.
// This object in single source of truth for the application state. And is accessible to all the components.


// But we do not want to mutate the state directly.
// We want to create a new state object with the updated values.
// And this is how it works:

// For example if we have an online store app, 
// we might have below states:
const state = {
    products: [],
    cart: {},
    categories: [],
    user: {}
}


// Then per state, we need a reducer function to handle the state. 
// Reducer is a pure function that takes the current state and an action and returns the new state.
// But it does not mutate the original state.
const reducer = (state, action) => {
    // Based on the action type (user logged in) we will understand that which state we need to update.
    switch (action.type) {
        case 'ADD_PRODUCT':
            return { ...state, products: [...state.products, action.product] }
    }
}

// So store is: simple javascript object include our application state.
// Action is: plain javascript object that shows what just happened. (Equivalent to an event)
// Reducer is: a function that takes state and action as arguments and returns the new state.
// Each reducer is responsible for a slice of state. (Like event handler)



// How it works:
// 1. The user does something (e.g. clicks a button)
// 2. The action is dispatchedş
// 3. The reducer is called (store forwards the action to the reducer) with the current state and the action
// So the store is responsible for calling the reducer. We do not call the reducer directly.
// 4. The new state is returned to store and store updates the state internally and notifies the ui components to re-render.
// 5. UI components will pull the new data and re-render.


// ------------------------------------------------------------
// Redux manage all the actions so we can do some cool stuff:
// 1. Redux devtools
// 2. Implementing undo/redo