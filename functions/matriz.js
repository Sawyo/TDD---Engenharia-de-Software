export const matriz = [[1,2,3],
                        [4,5,6],
                        [7,8,9]]

export function pecorrerMatriz(){

    let count = matriz.length;
    let diagonal1 = 0;
    let diagonal2 = 0;
    let countLength = matriz.length-1
        for(let i = 0; i < count; i++) {
            diagonal1 += matriz[i][i];
            diagonal2 += matriz[i][countLength]
               
            countLength-=1
                        
                                    
        }
        const result =diagonal1 - diagonal2
        return {result}
}
