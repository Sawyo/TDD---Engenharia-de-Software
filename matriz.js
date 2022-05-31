import {matriz,pecorrerMatriz} from './functions/matriz'

describe("matriz",()=>{
    it('verificar se os valores da matriz são menores ou iguais a 100 .',()=>{    
        for(let i = 0; i < matriz.length; i++){
            expect(matriz[i][i]).toBeLessThanOrEqual(100)
            expect(matriz[i][countLength]).toBeLessThanOrEqual(100)
        }    
    })
    it('verificar se os valores da matriz são maiores  que -100 .',()=>{    
        for(let i = 0; i < matriz.length; i++){
            expect(matriz[i][i]).toBeGreaterThan(-100)
            expect(matriz[i][countLength]).toBeGreaterThan(-100)
        }     
    })

    it('verificar se o tamanho da matriz é menor ou igual a 100.',()=>{    
        expect(matriz.length).toBeLessThanOrEqual(1000)
       
    })
    it('verificar se o tamanho da matriz é maior ou igual a 2.',()=>{    
        expect(matriz.length).toBeGreaterThanOrEqual(2)
    })
    it('verificar se o resultado não é indefinido.',()=>{    
        const {result} = pecorrerMatriz()
        expect(result).not.toBeUndefined()
    })
    it('verificar se o resultado é igual a 0.',()=>{    
        const {result} = pecorrerMatriz()
        expect(result).toEqual(0)

    })
})