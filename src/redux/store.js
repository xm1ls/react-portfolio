import { projectsReducer } from "./projectsReducer";

export let store = {
    _state: {
        projectsPage: {
            projects_links: ['00', '01', '02', '03', '04'],
            new_project_text: 'new project'
        },
        headerPage: {
            header_links: ['about', 'projects', 'contacts'],
        }

    },

    _rerender() {
        return null;
    },

    getState() {
        return this._state;
    },

    surscribe(observer) {
        this._rerender = observer
    },

    dispatch(action) {
        this._state.projectsPage = projectsReducer(this._state.projectsPage, action);

        this._rerender(this.getState());
    }
}