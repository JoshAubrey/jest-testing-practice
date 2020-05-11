const caesarCipher = function(string, shift) {

    function replace(char) {
        let code = char.charCodeAt()
        let result = code + shift
        
        //wrapping
        if (code >= 'A'.charCodeAt() && code <= 'Z'.charCodeAt()) {
            while (result > 'Z'.charCodeAt()) { //while loops repeat for large shifts
                result = 'A'.charCodeAt() + (result - 'Z'.charCodeAt() -1) //-1 for jumping to A
                //result = ((result - 'A'.charCodeAt()) % 26) + 'A'.charCodeAt() //alternate formula
            }
            while (result < 'A'.charCodeAt()) {
                result = 'Z'.charCodeAt() + (result - 'A'.charCodeAt() +1) //+1 for jumping to Z
            }
        }
        else if (code >= 'a'.charCodeAt() && code <= 'z'.charCodeAt()) {
            while (result > 'z'.charCodeAt()) {
                result = 'a'.charCodeAt() + (result - 'z'.charCodeAt() -1) 
            }
            while (result < 'a'.charCodeAt()) {
                result = 'z'.charCodeAt() + (result - 'a'.charCodeAt() +1) 
            }
        }

        return String.fromCharCode(result)
    }

    return converted = string.replace(/[A-Za-z]/g, (char) => replace(char))

}

module.exports = caesarCipher