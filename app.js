const quote = document.getElementById('quote')
const author = document.getElementById('author')
const quoteBtn = document.getElementById('quoteBtn')

quoteBtn.addEventListener('click', generateQuote)


generateQuote()


function generateQuote() {

    const config = ({
        headers: {
            'Accept': 'application/json' //Accept = Key, App/json = value.
        }
    })


    fetch('https://api.quotable.io/random', config)
        .then((response) => response.json())
        .then((data) => {
            quote.innerHTML = data.content;
            author.innerHTML = data.author;
        })



}