function arrayAnalysis (array) {
    let object = {
        average: 0,
        min: 0,
        max: 0,
        length: 0
    }

    object.average = array.reduce((accumulator, currentValue) => accumulator + currentValue) / array.length
    object.min = array.sort()[0]
    object.max = array.sort()[array.length-1]
    object.length = array.length

    return object

}

module.exports = arrayAnalysis;