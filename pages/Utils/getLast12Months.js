export const getLast12Months = () => {
    var monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    let arr = [];
    var d = new Date();
    d.setDate(1);
    for (let i=0; i<=11; i++) {
        arr.push(monthName[d.getMonth()] + ' ' + d.getFullYear());
        d.setMonth(d.getMonth() - 1);
    }
    return arr.reverse();
};