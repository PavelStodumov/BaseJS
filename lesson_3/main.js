'use strict'

function task_1() {
    for (let i = 0; i <= 10; i++) {
        if (i == 0) {
            console.log(`${i} - это ноль`);
        } else {
            (i % 2) ? console.log(`${i} - нечетное число`) : console.log(`${i} - четное число`)
        }
    }
}

function task_2() {
    const post = {
        author: "John", //вывести этот текст        
        postId: 23,
        comments: [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                    likes: 10,
                    dislikes: 2 //вывести это число        
                }
            },
            {
                userId: 5, //вывести это число        
                userName: "Jane",
                text: "lorem ipsum 2", //вывести этот текст        
                rating: {
                    likes: 3,
                    dislikes: 1
                }
            },
        ]
    };
    console.log(post.author);
    console.log(post.comments[0].rating.dislikes);
    console.log(post.comments[1].userId);
    console.log(post.comments[1].text);
}

function task_3() {
    const products = [
        {
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        },

    ];
    console.log('Применяем скидку 15%')
    products.forEach(function (product) { product.price -= product.price / 100 * 15 })
    console.log(products)
}

function task_4() {
    const products = [
        {
            id: 3,
            price: 127,
            photos: [
                "1.jpg",
                "2.jpg",
            ]
        },
        {
            id: 5,
            price: 499,
            photos: []
        },
        {
            id: 10,
            price: 26,
            photos: [
                "3.jpg"
            ]
        },
        {
            id: 8,
            price: 78,
        },
    ];
    let products_with_photo = products.filter(product => product.photos && Boolean(product.photos.length))
    console.log(products_with_photo)
    products.sort(
        function (a, b) {
            if (a.price < b.price) {
                return -1
            }
            return 1
        }
    )
    console.log(products)
}

function task_5() {
    function incr_i(i) {
        console.log(i)
        return ++i
    }
    for (let i = 0; i < 10; i = incr_i(i)) { }

}

function task_6() {
    for (let i = 1; i <= 21; i++) {
        console.log('x'.repeat(i))
    }
}