//Clone objects.
function cloneObj(src) {
    //Non-object filter.
    if (src === null || typeof (src) !== 'object') return null;
    let target = new Object();
    for (let property in src) {
        if (typeof (src[property] === 'object')) {
            //If 'object' found in src: Iteration!
            target[property] = cloneObj(src[property]);
        } else {
            target[property] = src[property];
        }
    }
    return target;
}

//Self-define utilities.(Date, Math...etc.)
Date.prototype.getTWYear = function () {
    return this.getYear() - 11;
}
Date.prototype.zhWeek = function () {
    let week = new Array(7);
    week[0] = "天";
    week[1] = "一";
    week[2] = "二";
    week[3] = "三";
    week[4] = "四";
    week[5] = "五";
    week[6] = "六";
    return week[this.getDay()];
}
Date.prototype.jpnWeek = function () {
    let week = new Array(7);
    week[0] = "日";
    week[1] = "月";
    week[2] = "火";
    week[3] = "水";
    week[4] = "木";
    week[5] = "金";
    week[6] = "土";
    return week[this.getDay()];
}
Date.prototype.enWeek = function () {
    let week = new Array(7);
    week[0] = "Sunday";
    week[1] = "Monday";
    week[2] = "Tuesday";
    week[3] = "Wednesday";
    week[4] = "Thursday";
    week[5] = "Friday";
    week[6] = "Saturday";
    return week[this.getDay()];
}