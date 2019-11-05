function palindrome(message){
    let string_array = message.split("");
    let flag = true;
    for (let i = 0; i < string_array.length / 2; i++) {
        if (string_array[i] !== string_array[string_array.length - 1 - i]) {
            flag = false;
            break;
        }
    }
    return flag;
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true