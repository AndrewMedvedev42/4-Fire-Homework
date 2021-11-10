
let typeToRemove = prompt("Enter what data type you want to remove? (string, number, bigint, object, undefined, function, symbol or boolean)")
let arrayToFilter = ['hello world', '23', false, 42, 25n, [], {}, null, undefined, function(){}, Symbol('foo'), true, Infinity, NaN]

function filterBy(array, type) {
        if (Array.isArray(array)) {
                let newArray = array.filter(item => typeof item !== type.toLowerCase())
                return newArray
        }else{
                alert("ERROR")
        }
}

console.log(filterBy(arrayToFilter, typeToRemove))
