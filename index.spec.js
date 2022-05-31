import { arrayNumber, somarArray } from "./functions/array"
import { matriz, pecorrerMatriz } from "./functions/matriz"
import { conveterStrEmArr, stringValue } from "./functions/palindromo"



describe("TDD - Engenharia de Software",()=>{

    it('Em um array, encontre a soma de seus elementos.',()=>{
        
        expect(arrayNumber.length).toBeLessThanOrEqual(1000)
        expect(arrayNumber.length).toBeGreaterThan(0)
        const resultArrayNumber = somarArray(arrayNumber)  
        expect(resultArrayNumber).not.toBeUndefined()
        expect(typeof resultArrayNumber).toBe('number');
        expect(resultArrayNumber).toEqual(119)
        expect(resultArrayNumber).toBeGreaterThan(100)


    })

    it('Em uma matriz, calcule a diferença absoluta da soma de suas diagonais.',()=>{    

        expect(matriz.length).toBeLessThanOrEqual(1000)
        expect(matriz.length).toBeGreaterThanOrEqual(2)

        const {result} = pecorrerMatriz()
        
        for(let i = 0; i < matriz.length; i++){
            expect(matriz[i][i]).toBeLessThanOrEqual(100)
            expect(matriz[i][i]).toBeGreaterThan(-100)
            expect(matriz[i][countLength]).toBeGreaterThan(-100)
            expect(matriz[i][countLength]).toBeLessThanOrEqual(100)
        }

        expect(result).not.toBeUndefined()
        expect(result).toEqual(0)
       
    })


    it('Dada uma string de tamanho variável n, determine se essa string é um palíndromo.',()=>{

        const {reverseArrayValue} = conveterStrEmArr(stringValue)

        expect(reverseArrayValue).not.toBeUndefined()
        expect(stringValue).toEqual(reverseArrayValue)
    })

})

