'use strict'
function task_1_1() {
    alert('Сделайте в стиле es5, а затем в стиле es6 конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25 %.')
    function Product_es5(name, price) {
        this.name = name;
        this.price = price;
    }

    Product_es5.prototype.make25PercentDiscount = function () {
        this.price -= this.price * 0.25
    }

    Product_es5.prototype.show = function () {
        console.log(`${this.name} стоит ${this.price}`)
    }

    let product1 = new Product_es5('milk', 100)
    product1.show()
    product1.make25PercentDiscount()
    product1.show()

    class Product_es6 {
        constructor(name, price) {
            this.name = name
            this.price = price
        }
        make25PercentDiscount() {
            this.price -= this.price * 0.25
        }
        show() {
            console.log(`${this.name} стоит ${this.price}`)
        }
    }

    let product2 = new Product_es6('banana', 200)
    product2.show()
    product2.make25PercentDiscount()
    product2.show()
}

function task_1_2() {
    alert('Сделайте в стиле es5, а затем в стиле es6  конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта.Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.')
    function Post_es5(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    Post_es5.prototype.edit = function (text) {
        this.text = text;
    }
    Post_es5.prototype.show = function () {
        console.log(`${this.author} написал ${this.text}. ${this.date}`);
    }

    function AttachedPost_es5(author, text, date, highlighted = false) {
        Post_es5.call(this, author, text, date);
        this.highlighted = highlighted;
    }

    AttachedPost_es5.prototype = Object.create(Post_es5.prototype);
    AttachedPost_es5.prototype.constructor = AttachedPost_es5;

    AttachedPost_es5.prototype.makeTextHighlighted = function () {
        this.highlighted = true;
    }
    let post1 = new AttachedPost_es5('Ivan', 'Hello', '12.12.2012');
    post1.show();
    console.log(post1.highlighted);
    post1.edit('Hello world');
    post1.makeTextHighlighted();
    post1.show();
    console.log(post1.highlighted);

    class Post_es6 {
        constructor(author, text, date) {
            this.author = author;
            this.text = text;
            this.date = date;
        }
        edit(text) {
            this.text = text;
        }
        show() {
            console.log(`${this.author} написал ${this.text}. ${this.date}`);
        }
    }
    class AttachedPost_es6 extends Post_es6 {
        constructor(author, text, date, highlighted = false) {
            super(author, text, date);
            this.highlighted = highlighted;
        }
        makeTextHighlighted() {
            this.highlighted = true;
        }
    }
    let post2 = new AttachedPost_es6('Dmitriy', 'world', '12.12.2012');
    post2.show();
    console.log(post2.highlighted);
    post2.edit('Hello world');
    post2.makeTextHighlighted();
    post2.show();
    console.log(post2.highlighted);
}

function task_1() {
    class NumberObj {
        constructor(num) {
            this.units = num % 10;
            this.tens = Math.floor(num / 10) % 10;
            this.hundereds = Math.floor(num / 100) % 10;
        }
    }
    function numberInObj(num = +prompt('Введите целое число от 0 до 999:')) {
        if (num < 0 || num > 999) {
            alert(`${num} не входит в указанный диапазон`);
            return
        } else if (isNaN(num)) {
            alert('похоже что введено не число');
            return
        } else if (!Number.isInteger(num)) {
            alert(`${num} не целое число`);
            return
        } else {
            return new NumberObj(num)
        }
    }
    let obj = numberInObj()
    console.log(obj)
}

function task_2() {

}