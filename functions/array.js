export let arrayNumber = [1,34,4,12,0,56,12]

export function somarArray(arrayNumber){
    const resultArrayNumber = arrayNumber.reduce(function somarArray(soma, i) {
        return soma + i;
    });
    return resultArrayNumber
}