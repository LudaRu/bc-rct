import {BehaviorSubject} from 'rxjs';

let previousView = null;
const view = new BehaviorSubject(null);

export const ToolbarService = {
    getView: () => view.asObservable(),
    setView: (v) => {previousView = view.value; view.next(v)},
    back: () => {view.next(previousView); previousView = null}
};
