// Todos
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

const toCamelCase = (str) => {
    var regExp = /[-_]\w/gi;
    return str.replace(regExp, function (match) {
        return match.charAt(1).toUpperCase();
    });
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));