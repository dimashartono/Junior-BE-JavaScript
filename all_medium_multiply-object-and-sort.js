// Question
// Given a object data, return the data multiple by 3 and sort the data.
// Expected output : { j: 0, k: 9, i: 18, l: 36 }

const data = { i: 6, j: null, k: 3, l: 12 };

function result(data) {
    // write your code here
    let collectData = [];
    let newObjSorted = {};

    for (const prop in data) {
        collectData.push([
            prop, data[prop] ? data[prop] : 0
        ]);
    }

    for (let i = 0; i < collectData.length; i++) {
        for (let z = i + 1; z < collectData.length; z++) {
            if (collectData[i][1] > collectData[z][1]) {

                let temp_val = collectData[i][1];
                let temp_key = collectData[i][0];

                collectData[i][1] = collectData[z][1];
                collectData[i][0] = collectData[z][0];

                collectData[z][1] = temp_val;
                collectData[z][0] = temp_key;
            }
        }
    }

    for (let x = 0; x < collectData.length; x++) {
        newObjSorted[collectData[x][0]] = collectData[x][1];
    }

    return newObjSorted;

}

console.log(result(data));