function Profile() {
    var input = document.getElementsByName('array[]');

    text = document.getElementById('hello-text');
    text.style.visibility = 'visible';
    document.getElementById('hello-text').innerHTML = 'Hello' + ' ' + input[1].value;
    document.getElementById('signup-link').innerHTML = 'Hello' + ' ' + input[1].value;
    document.getElementById('logout-link').style.visibility = 'visible';


}

function Logout(){
    document.getElementById('logout-link').style.visibility = 'hidden';
    document.getElementById('hello-text').innerHTML = 'Hello';
    document.getElementById('signup-link').innerHTML = 'Sign in'
}

function storeData(){
    email = document.getElementById('Email');
    console.log(email);
    username = document.getElementById('Username');
    password = document.getElementById('Password');
    localStorage.setItem('Email',email.value);
    localStorage.setItem('Username',username.value);
    localStorage.setItem('Password',password.value);
}

function populate_wishlist_table(){
    wishlist = document.getElementById('wishlist-count');
    var wishlist_authors = [];
    var wishlist_titles = [];
    var wishlist_prices = [];
    var wishlist_months = [];
    var wishlist_years = [];
    for (var key in localStorage){
        if (key.includes('wishlist')){
            if(key.includes('author')){
                wishlist_authors.push(localStorage.getItem(key));
            }
            if(key.includes('title')){
                wishlist_titles.push(localStorage.getItem(key));
            }
            if(key.includes('price')){
                wishlist_prices.push(localStorage.getItem(key));
            }
            if(key.includes('month')){
                wishlist_months.push(localStorage.getItem(key));
            }
            if(key.includes('year')){
                wishlist_years.push(localStorage.getItem(key));
            }
        }
     }

     table_data = {};
     table_data['wishlist_authors'] = wishlist_authors;
     table_data['wishlist_titles'] = wishlist_titles;
     table_data['wishlist_prices'] = wishlist_prices;
     table_data['wishlist_months'] = wishlist_months;
     table_data['wishlist_years'] = wishlist_years;
     console.log(table_data);

     var table = document.getElementById("wishlist_table");
     for(let i = 0; i < wishlist_authors.length; i++){
        var checkbox1 = document.createElement('input');
        checkbox1.type= 'checkbox';

        
        var checkbox2 = document.createElement('input');
        checkbox2.type= 'checkbox';


        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        var cell5 = row.insertCell();
        var cell6 = row.appendChild(checkbox1)
        checkbox1.id = 'myCheck' + i;
        cell1.innerHTML = wishlist_titles[i];
        cell2.innerHTML = wishlist_authors[i];
        cell3.innerHTML = wishlist_prices[i];
        cell4.innerHTML = wishlist_months[i];
        cell5.innerHTML = wishlist_years[i];
        cell1.className = 'title2_col';
        cell2.className = 'author2_col';
        cell3.className = 'price_col';
        cell4.className = 'estimationmonth_col';
        cell5.className = 'estimationyear_col';
        cell6.className = 'purchased_col';
     }
     wishlist.innerHTML = wishlist_authors.length;
}

function populate_books_table(){
    books_read = document.getElementById('countofbooksread');
    var book_authors = [];
    var book_titles = [];
    var book_categories = [];
    for (var key in localStorage){
        if (key.includes('books')){
            if(key.includes('author')){
                book_authors.push(localStorage.getItem(key));
            }
            if(key.includes('title')){
                book_titles.push(localStorage.getItem(key));
            }
            if(key.includes('category')){
                book_categories.push(localStorage.getItem(key));
            }
        }
     }

     table_data = {};
     table_data['book_authors'] = book_authors;
     table_data['book_titles'] = book_titles;
     table_data['book_categories'] = book_categories;
     console.log(table_data);

     var table = document.getElementById("book_table");
     for(let i = 0; i < book_authors.length; i++){
        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();

        cell1.innerHTML = book_titles[i];
        cell2.innerHTML = book_authors[i];
        cell3.innerHTML = book_categories[i];
    
        cell1.className = 'title_col';
        cell2.className = 'author_col';
        cell3.className = 'category_col';
     }
     books_read.innerHTML = book_authors.length;
}

function populate_ratings_table(){
    ratings = document.getElementById('rating-count');
    var rating_authors = [];
    var rating_titles = [];
    var rating_ratings = [];
    for (var key in localStorage){
        if (key.includes('rating')){
            if(key.includes('author')){
                rating_authors.push(localStorage.getItem(key));
            }
            if(key.includes('title')){
                rating_titles.push(localStorage.getItem(key));
            }
            if(key.includes('table_rating')){
                rating_ratings.push(localStorage.getItem(key));
            }
        }
     }

     table_data = {};
     table_data['rating_authors'] = rating_authors;
     table_data['rating_titles'] = rating_titles;
     table_data['rating_ratings'] = rating_ratings;
     console.log(table_data);

     var table = document.getElementById("rating_table");
     for(let i = 0; i < rating_authors.length; i++){
        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();

        cell1.innerHTML = rating_titles[i];
        cell2.innerHTML = rating_authors[i];
        cell3.innerHTML = rating_ratings[i];
    
        cell1.className = 'title3_col';
        cell2.className = 'author3_col';
        cell3.className = 'rating_col';
     }
    ratings.innerHTML = rating_authors.length;
}

function populate_card(){
    currently = document.getElementById('currently');
    currently.innerHTML = localStorage.getItem('currently_reading');
}

