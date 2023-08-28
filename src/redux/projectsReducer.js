const ADD_PROJECT = 'ADD_PROJECT';
const CHANGE_PROJECT = 'CHANGE_PROJECT';

export const addProject = () => ({
    type: ADD_PROJECT
});

export const changeProject = (text) => ({
    type: CHANGE_PROJECT,
    text: text
});

let initialState = {
    projects_links: ['00', '01', '02', '03', '04'],
    new_project_text: 'new project'
}

export let projectsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PROJECT:
            if (state.new_project_text !== '') {
                return {
                    ...state,
                    projects_links: [...state.projects_links, state.new_project_text]
                }
            }
            else
                return state;
        
        case CHANGE_PROJECT:
            return {
                ...state,
                new_project_text: action.text
            }

        default:
            return state;
    }
}