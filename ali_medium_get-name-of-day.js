/**
 * Direction
 * Get name of the day of 4 days ago from today
 *
 * Expected result:
 * 1. if date now = monday
 * 2. then result = thursday
 */
function result() {
    // write your code here
    let name = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date();
    let day = date.getDay();
    let next = 4;
    let res = '';

    if (name[day + (next - 1)]) {
        res = name[day + (next - 1)];
    } else {
        let end = next - 1;
        for (let i = 0; i < end; i++) {
            res = name[i];
        }
    }

    return res;
}

console.log(result());