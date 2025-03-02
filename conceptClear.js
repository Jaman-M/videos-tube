// function getTimeString(time) {
//     return `${time} second ago`;
// }
// console.log(getTimeString(4320));


// // for getting hour 
// function getTimeString(time) {
//     const hour = time/3600
//     return `${hour} hour ago`;
// }
// console.log(getTimeString(4320));

// after that we got 1.2 hour ago
// but we don't want decimal

function getTimeString(time) {
    const hour = parseInt(time / 3600);
    let remainingSecond = parseInt(time % 3600);
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour} hour ${minute} minutes ${remainingSecond} seconds ago`;

}
console.log(getTimeString(7865));