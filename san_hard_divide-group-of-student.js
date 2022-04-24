/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 * 
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
const students = [
    { firstName: 'Kai', lastName: 'Lyons' },
    { firstName: 'Belle', lastName: 'Norton' },
    { firstName: 'Finnley', lastName: 'Rennie' },
    { firstName: 'Tatiana', lastName: 'Dickerson' },
    { firstName: 'Peyton', lastName: 'Gardner' },
];
const groups = 3;

function result(students, groups) {
    // your code here
    let collectData = [];
    let init = 0;
    let divide = Math.ceil(students.length / groups);

    for (let i = 0; i < students.length; i++) {
        for (let x = i + 1; x < students.length; x++) {
            if (students[i].firstName[0] > students[x].firstName[0]) {
                let temp = students[i];
                students[i] = students[x];
                students[x] = temp;
            }
        }
    }

    while (init < students.length) {
        collectData.push(students.slice(init, init + divide));
        init += divide;
    }

    return collectData;
}

console.log(result(students, groups));