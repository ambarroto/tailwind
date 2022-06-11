/**
 * 
 * @param {Array} arr 
 * @param {Number} size 
 * @returns 
 */
const Chunk = (arr, size) => {
    const data = Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => {
        return arr.slice(i * size, i * size + size)
    })
    return data
}

module.exports = Chunk