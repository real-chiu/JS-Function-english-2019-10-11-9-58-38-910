function alphabetSort(message){
    let string_array = message.split("");
    for (let i = 0; i < string_array.length; i++) { //bubble sort
        for (let j = i; j < string_array.length; j++) {
            if (string_array[i].charCodeAt(0) > string_array[j].charCodeAt(0)) {
                let temp = string_array[i];
                string_array[i] = string_array[j];
                string_array[j] = temp;
             }
        }
    }
    return string_array.join('');
}
console.log(alphabetSort('hello')); // should return 'ehllo'