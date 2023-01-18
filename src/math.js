export const magicNumbers = (min = 1, max = 50) => {
    const minimal = Math.ceil (min);
    const maximum = Math.floor (max);
    const randomNumber = Math.floor(Math.random() * (maximum - minimal + 1)) + minimal;
    return randomNumber;

};

export const getOperator = (array) => {
    const index = Math.floor(Math.random() * array.length);
    const operator = array[index];
    return operator;
};