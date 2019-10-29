import {BehaviorSubject, Subject} from 'rxjs';

class Queue {
    constructor(value) {
        this.bs = new BehaviorSubject(null);
        this.items = [];
    }

    next(item) {
        this.items.push(item);
        this.bs.next(item);
    }

    back() {
        const lastItem = this.items.pop();
        this.bs.next(lastItem);
    }

    reset() {
        this.items = [];
        this.bs.next(undefined);
    }
}

const view = new Queue(null);

export const ToolbarService = {
    getView: () => view.bs.asObservable(),
    setView: (v) => {view.next(v)},
    back: () => {view.back()},
    reset: () => {view.reset()},
};
