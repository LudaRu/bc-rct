import { BehaviorSubject } from 'rxjs';
import {Data} from "./data";
import uuid from "uuid";


const items$ = new BehaviorSubject(getData());


export const CatalogService = {
    // sendMessage: message => items$.next( {xxx: 123}),
    clearMessages: () => items$.next([]),
    getItems$: () => items$.asObservable(),
    toggleLike: (id, isLike) => _backSetLikebyId(id, isLike),
    saveItem: (formArr) => saveItem(formArr),
};



function getData() {
    window.saveItem = saveItem;
    return Data;
}


function saveItem(formArr) {
    if (formArr.id) {
        _backSave(formArr);
        return true;
    } else {
        _backCreate(formArr);
    }

    return false;
}


function _backSave(formArr) {
    let findItemKey = null;
    Data.forEach((item, i) => {
        if (item.id == formArr.id) {
            findItemKey = i;
        }
    });
    Data[findItemKey] = {...Data[findItemKey], ...formArr};

    localStorage.setItem('myData', JSON.stringify(Data));
}

function _backCreate(formArr) {
    formArr.id = uuid.v4();
    formArr.isLike = false;
    formArr.createTime = Date();

    const newData = [...Data, formArr];

    localStorage.setItem('myData', JSON.stringify(newData));
}

function _backSetLikebyId(id, flag) {
    let findItemKey = null;
    Data.forEach((item, i) => {
        if(item.id == id) {
            findItemKey = i;
        }
    });
console.log(id, flag);
    Data[findItemKey].isLike = flag;
    localStorage.setItem('myData', JSON.stringify(Data));
    return true;
}
