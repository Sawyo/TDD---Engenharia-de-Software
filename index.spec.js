


describe("TDD - Engenharia de Software",()=>{

    //erro
     it('Em um array, encontre a soma de seus elementos.',()=>{
            let arrayNumber = [1,34,4,12,0,56,"12"]

            expect(arrayNumber.length).toBeLessThanOrEqual(1000)
            expect(arrayNumber.length).toBeGreaterThan(0)

            function somarArray(arrayNumber){
                const resultArrayNumber = arrayNumber.reduce(function somarArray(soma, i) {
                    return soma + i;
                });
                return resultArrayNumber
            }
            const resultArrayNumber = somarArray(arrayNumber)
            const result = 119   
            //Verificar se não é indefinido 
            expect(resultArrayNumber).not.toBeUndefined()
            //Verificar se é um número 
            expect(typeof resultArrayNumber).toBe('number');
            //Verificar resultado esperado
            expect(resultArrayNumber).toEqual(result)
            //Verificar se o valor é maior que 100
            expect(resultArrayNumber).toBeGreaterThan(100)
        })

    //Acerto
    it('Em um array, encontre a soma de seus elementos.',()=>{
        let arrayNumber = [1,34,4,12,0,56,12]
        expect(arrayNumber.length).toBeLessThanOrEqual(1000)
        expect(arrayNumber.length).toBeGreaterThan(0)

        function somarArray(arrayNumber){
            const resultArrayNumber = arrayNumber.reduce(function somarArray(soma, i) {
                return soma + i;
            });
            return resultArrayNumber
        }
        const resultArrayNumber = somarArray(arrayNumber)
        const result = 119   
        //Verificar se não é indefinido 
        expect(resultArrayNumber).not.toBeUndefined()
        //Verificar se é um número 
        expect(typeof resultArrayNumber).toBe('number');
        //Verificar resultado esperado
        expect(resultArrayNumber).toEqual(result)
        //Verificar se o valor é maior que 100
        expect(resultArrayNumber).toBeGreaterThan(100)


    })

    //Erro
    it('Em uma matriz, calcule a diferença absoluta da soma de suas diagonais.',()=>{
        const matriz = [[1,2,3]]

        expect(matriz.length).toBeLessThanOrEqual(1000)
        expect(matriz.length).toBeGreaterThanOrEqual(2)

        let count = matriz.length;
        let diagonal1 = 0;
        let diagonal2 = 0;
        let countLength = matriz.length-1;

        for(let i = 0; i < count; i++) {
            diagonal1 += matriz[i][i];
            diagonal2 += matriz[i][countLength]

            expect(matriz[i][i]).toBeLessThanOrEqual(100)
            expect(matriz[i][i]).toBeGreaterThan(-100)
            expect(matriz[i][countLength]).toBeGreaterThan(-100)
            expect(matriz[i][countLength]).toBeLessThanOrEqual(100)

            countLength-=1
        }

        const result = diagonal1 - diagonal2

        expect(result).not.toBeUndefined()
       
    })
    
    //Acerto
    it('Em uma matriz, calcule a diferença absoluta da soma de suas diagonais.',()=>{
        const matriz = [[1,2,3],
                        [4,5,6],
                        [7,8,9]]

        expect(matriz.length).toBeLessThanOrEqual(1000)
        expect(matriz.length).toBeGreaterThanOrEqual(2)

        let count = matriz.length;
        let diagonal1 = 0;
        let diagonal2 = 0;
        let countLength = matriz.length-1;

        for(let i = 0; i < count; i++) {
            diagonal1 += matriz[i][i];
            diagonal2 += matriz[i][countLength]

            expect(matriz[i][i]).toBeLessThanOrEqual(100)
            expect(matriz[i][i]).toBeGreaterThan(-100)
            expect(matriz[i][countLength]).toBeGreaterThan(-100)
            expect(matriz[i][countLength]).toBeLessThanOrEqual(100)

            countLength-=1
        }

        const result = diagonal1 - diagonal2

        expect(result).not.toBeUndefined()
       
    })

    //Erro
    it('Dada uma string de tamanho variável n, determine se essa string é um palíndromo.',()=>{

        let stringValue = `asubdfhasbf`

        function conveterStrEmArr(stringValue){
            let arrayValue =stringValue.split("");
            let reverseArrayValue = arrayValue.reverse().join("")

            return {reverseArrayValue}
        }
        const {reverseArrayValue} = conveterStrEmArr(stringValue)


        expect(reverseArrayValue).not.toBeUndefined()

        expect(stringValue).toEqual(reverseArrayValue)
    })

    //Acerto
    it('Dada uma string de tamanho variável n, determine se essa string é um palíndromo.',()=>{

        let stringValue = "SOCORRAMMESUBINOONIBUSEMMARROCOS"

        function conveterStrEmArr(stringValue){
            let arrayValue =stringValue.split("");
            let reverseArrayValue = arrayValue.reverse().join("")

            return {reverseArrayValue}
        }
        const {reverseArrayValue} = conveterStrEmArr(stringValue)

        expect(reverseArrayValue).not.toBeUndefined()

        expect(stringValue).toEqual(reverseArrayValue)
    })

})

