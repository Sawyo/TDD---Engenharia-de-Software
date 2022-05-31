export  let stringValue = "SOCORRAMMESUBINOONIBUSEMMARROCOS"

   export    function conveterStrEmArr(stringValue){
            let arrayValue =stringValue.split("");
            let reverseArrayValue = arrayValue.reverse().join("")

            return {reverseArrayValue}
        }