var images = [
    'http://images.amazon.com/images/P/1930604785.01.LZZZZZZZ.jpg',
    'http://images.amazon.com/images/P/0195283309.01.LZZZZZZZ.jpg',
    'http://images.amazon.com/images/P/0029345707.01.LZZZZZZZ.jpg',
    'http://images.amazon.com/images/P/1562514423.01.LZZZZZZZ.jpg',
    'http://images.amazon.com/images/P/0393049744.01.LZZZZZZZ.jpg',
    'http://images.amazon.com/images/P/0898704901.01.LZZZZZZZ.jpg',
    'http://images.amazon.com/images/P/0373292503.01.LZZZZZZZ.jpg',
    'http://images.amazon.com/images/P/0800793285.01.LZZZZZZZ.jpg',
    'http://images.amazon.com/images/P/0892436794.01.LZZZZZZZ.jpg',
    'http://images.amazon.com/images/P/0937779075.01.LZZZZZZZ.jpg',
    'http://images.amazon.com/images/P/0809126281.01.LZZZZZZZ.jpg',
    'http://images.amazon.com/images/P/0877931216.01.LZZZZZZZ.jpg',
    'http://images.amazon.com/images/P/0898153859.01.LZZZZZZZ.jpg',
]

var file = "data/booksdata.csv"
var result

Papa.parse(file, {
    download: true, header: true, complete: function(results, file) {
        console.log("Parsing complete: ", results, file);
    }
})

function generate_recommendations() {
    var k = 0
    for (var i = 1; i <= 3; i++) {
        for (var j = 1; j <= 3; j++) {
            var btn = document.createElement('button')
            btn.id = 'book-' + k
            btn.className = 'column'
            var img = document.createElement('img')
            img.id = 'book-' + k + '-img'
            img.className = 'book-img'
            // img.src = 'images/placeholder-' + k + '.png'
            img.src = images[k]
            document.getElementById("row-" + i).appendChild(btn)
            document.getElementById("book-" + k).appendChild(img)
            k++
        }
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        // document.getElementById("navbar").style.height = "90px";
        document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 1)";
        // document.getElementById("logo").style.fontSize = "25px";
    } else {
        // document.getElementById("navbar").style.height = "100px";
        document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 0.75)";
        // document.getElementById("logo").style.fontSize = "35px";
    }
}

function query_process() {
    var query = document.getElementById("search-input").value
    var results = document.getElementById("recommended-and-results")
    results.innerHTML = "Displaying Results for '" + query + "'"

    var books = {
        "123456789": {
            "title": "title",
            "author": "author",
            "year": "year",
            "rating": "rating",
            "age_group": "age_group" 
        }
    }
    
    for (var i = 0; i < 15; i++) {
        books["book-" + i] = 0;
        for (var j = 0; j < 5; j++) {
            books["book-" + i] = {
                "title": "book-title-" + j,
                "author": "author-name-" + j,
                "year": "year-" + j,
                "rating": "rating-" + j,
                "age_group": "age-group-" + j
            }
        }
    }

    var k = 0
    for (var i = 1; i <= 3; i++) {
        for (var j = 1; j <= 3; j++) {
            let img = document.getElementById("book-" + k + "-img")
            img.src = images[k]
            k++
        }
    }
}

