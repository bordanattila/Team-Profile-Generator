
const {menu} = require("./lib/menu");
const create = require("./dist/script");

const promise1 = new Promise((resolve, reject) => {
    menu();

})

Promise.all([promise1])
.then((response) => {
    create()
})