// Problem:

// <a href="https://leetcode.com/problems/reverse-integer/">Reverse Integer</a>



// How I solved it

var reverse = function (x) {
    var reverseN = +String(Math.abs(x)).split('').reverse().join('');

    // Проверка на переполнение 32-битного целого числа
    // Число 0x7FFFFFFF — это максимальное значение 32-битного знакового целого числа (2147483647).
    if (reverseN > 0x7FFFFFFF) {
        return 0;
    }
    return x < 0 ? -reverseN : reverseN;
};
