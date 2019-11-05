function reverseString(message){
    let string_array = message.split("");
    let reversed_string_array = [];
    string_array.forEach(e => {
        reversed_string_array.unshift(e);
    });
    return reversed_string_array.join('');
  }

console.log(reverseString('hello')); // should return 'olleh'
