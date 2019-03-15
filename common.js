
var store = {
    set: function (key, item) {
        var str = JSON.stringify(item);
        window.localStorage.setItem(key, str);
    },
    get: function (key) {
        var str = window.localStorage.getItem(key);
        return JSON.parse(str);
    },
    remove: function (key) {
        window.localStorage.removeItem(key);
    }
};
var $ = function (id) {
    return document.getElementById(id);
}

function ReturnFalse() {
    return false;
}

document.onselectstart = ReturnFalse;
document.oncontextmenu = ReturnFalse;