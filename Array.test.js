import { arrayNumber, somarArray } from "./functions/array"



describe("Array",()=>{

    it("Verificar se o valor é menor ou igual a 1000",()=>{
        expect(arrayNumber.length).toBeLessThanOrEqual(1000)

    })
    it("Verificar se o valor não é indefinido",()=>{
        expect(resultArrayNumber).not.toBeUndefined()

    })
    it("Verificar se o valor é maior que 0",()=>{
        expect(arrayNumber.length).toBeGreaterThan(0)

    })
    it("Verificar se o valor é igual a 119",()=>{
        const resultArrayNumber = somarArray(arrayNumber)  
        expect(resultArrayNumber).toEqual(119)

    })
    it("Verificar se o valor é um número",()=>{
        const resultArrayNumber = somarArray(arrayNumber)  
        expect(typeof resultArrayNumber).toBe('number');

    })

})

