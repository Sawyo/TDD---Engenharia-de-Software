import {conveterStrEmArr,stringValue} from './functions/palindromo'

describe("Palindromo",()=>{
    
    it('Verificar se o valor não é indefinido.',()=>{

        const {reverseArrayValue} = conveterStrEmArr(stringValue)

        expect(reverseArrayValue).not.toBeUndefined()
        
    })
    
    it('Verificar se é um palindromo.',()=>{

        const {reverseArrayValue} = conveterStrEmArr(stringValue)

        expect(stringValue).toEqual(reverseArrayValue)
    })
})