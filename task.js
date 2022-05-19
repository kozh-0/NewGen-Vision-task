let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

function filterArr(data, range = [0, Infinity]) {
    const result = data.filter(el => (el.prices[0] >= range[0] && el.prices[0] <= range[1]) && (el.prices[1] <= range[1] && el.prices[1] >= range[0]));
    console.log(result);
    
    // if (range[0] === null) range[0] = 0;
    // if (range[1] === null) range[1] = Infinity;

    // const result = data.filter(el => {
    //     if (el.prices[0] === null) el.prices[0] = 0;
    //     if (el.prices[1] === null) el.prices[1] = Infinity - 1;

    //     if ((el.prices[0] >= range[0] && el.prices[0] <= range[1]) && (el.prices[1] <= range[1] && el.prices[1] >= range[0])) {
    //         return el;
    //     }
    // });
}
filterArr(courses, [0, 200]);
