// Programowanie funkcyjne oraz arraye

// w Javascript Arraye posiadają swoje metody
// .forEach
// .map
// .entries
// .filter
// .reduce
// .every
// .some

// skopiuj identyczne działanie tych metod za pomocą pętli for lub while
// w funkcjach
let testArray = [2, 4, 'fd', 'lala']


const forEachFn = (array, callback) => {
    for(let i=0; i<array.length; i++) {
        callback(array[i], i, array)
    }
}

const mapFn = (array, callback) => {
    let mapedArray = [];
    for(let i=0; i<array.length; i++) {
        mapedArray.push(callback(array[i], i, array))
    }
    return mapedArray
}

const entriesFn = (array) => {
    let output = {};
    for (let i=0; i<array.length; i++) {
        output[i] = [i, array[i]]
    }

    output[Symbol.iterator] = function(){
        return {
            current: 0,
            last: array.length-1,

            next() {
                if (this.current <= this.last) {
                    return {done: false, value: output[this.current++]}
                } else {
                    return {done: true}
                }
            }
        }
    }
    let current = 0;
    let last = array.length;
    output.next = function(){
        if (current <= last) {
            return {done: false, value: output[current++]}
        } else {
            return {done: true}
        }
    }
        
    
    return output
}

const filterFn = (array, callback) => {
    let filteredArray = []
    for (let i=0; i<array.length; i++) {
        if (callback(array[i], i, array)) {
            filteredArray.push(array[i])
        } 
    }
    return filteredArray
}

const reduceFn = (array, callback, initial) => {
        for (let i=0; i<array.length; i++) {
            if (initial) {
                initial = callback(initial,array[i], i-1, array);
            } else { 
                initial = callback(array[0], array[i+1], i, array);
                i++;
            }
            
    } 
    return initial    
}

const everyFn = (array, callback) => {
    for (let i=0; i<array.length; i++) {
        let result = callback(array[i], i, array);
        if (!result) return false
        console.log(i)
    }
    return true
}

const someFn = (array, callback) => {
    for (let i=0; i<array.length; i++) {
        let result = callback(array[i], i, array);
        if (result) return true     
    }
    return false
}
