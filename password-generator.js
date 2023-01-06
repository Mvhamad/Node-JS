let generator = require("generate-password");

let password = generator.generate({
    length :9,
    numbers :true,
    symbols :true,
});

console.log(password);

