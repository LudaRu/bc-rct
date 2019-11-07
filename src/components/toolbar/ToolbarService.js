import {BehaviorSubject} from 'rxjs';

class Queue {
    constructor() {
        this.bs = new BehaviorSubject(null);
        this.items = [];
    }

    next(item) {
        this.items.push(item);
        this.bs.next(item);
    }

    back() {
        this.items.pop();
        const lastItem = this.items[this.items.length-1];
        this.bs.next(lastItem);
    }

    reset() {
        this.items = [];
        this.bs.next(null);
    }
}

const view = new Queue(null);

export const ToolbarService = {
    getView: () => view.bs.asObservable(),
    setView: (v) => {view.next(v)},
    back: () => {view.back()},
    reset: () => {view.reset()},
};
