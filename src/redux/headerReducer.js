// const ADD_PROJECT = 'ADD_PROJECT';
// const CHANGE_PROJECT = 'CHANGE_PROJECT';

// export const addProject = () => ({
//     type: ADD_PROJECT
// });

// export const changeProject = (text) => ({
//     type: CHANGE_PROJECT,
//     text: text
// });

let initialState = {
    header_links: ['about', 'projects', 'contacts'],
}

export let headerReducer = (state = initialState, action) => {
    switch(action.type) {
        
        default:
            return state;
    }
}