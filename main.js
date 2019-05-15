var app = new Vue({
    el: '#app',
    data: {
        books: [],
        search: "",
    },
    
    created() {
        this.getData()
    },
    
    methods: {
        getData() {
            fetch("https://api.myjson.com/bins/zyv02", {
                method: "GET",
                
            }).then(function (response) {
                return response.json()
            }).then(function (data) {
                app.books = data.books;
            }).catch(function (error) {
                console.log(error)
            })
        }
    },
    computed: {
        filteredBooks: function(){
            return this.books.filter((book) => {
                return book.title.toLowerCase().match(this.search.toLowerCase()) || book.description.toLowerCase().match(this.search.toLowerCase())
            });
        }
    },
})
