export const arrs = [10, 20, 30, 40]; // 개별로 선언해서 export

const arrs2 = [100, 200, 300, 400];

function getName() {
    return "aaaaaaaaa";
}

export { arrs2, getName }; // 묶어서 export

