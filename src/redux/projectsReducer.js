const ADD_PROJECT = 'ADD_PROJECT';
const CHANGE_PROJECT = 'CHANGE_PROJECT';

export const addProject = () => ({
    type: ADD_PROJECT
});

export const changeProject = (text) => ({
    type: CHANGE_PROJECT,
    text: text
});

export let projectsReducer = (state, action) => {
    switch(action.type) {
        case ADD_PROJECT:
            if (state.new_project_text != '') {
                state.projects_links.push(state.new_project_text);
            }

            return state;
        
        case CHANGE_PROJECT:
            state.new_project_text = action.text;

            return state;

        default:
            return state;
    }
}