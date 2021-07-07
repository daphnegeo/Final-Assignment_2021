

function addRowToBooks(){

    var title= document.getElementById("title");
    
    var author= document.getElementById("author");
   
    var e = document.getElementById("categoryDropwdown");
    console.log(e);
    var dropwdown_text = e.options[e.selectedIndex].text;
    
    console.log(dropwdown_text)
    var table = document.getElementById("book_table");
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    cell1.innerHTML = title.value;
    cell2.innerHTML = author.value;
    cell3.innerHTML = dropwdown_text;
    cell1.className = 'title_col';
    cell2.className = 'author_col';
    cell3.className = 'category_col';
    add_text = document.getElementById('add_text');
    add_text.style.display = 'block';

    var table = document.getElementById("book_table"), countbooksread = 0;
    for (var i = 1; i < table.rows.length; i++) {
          countbooksread++
      }
    document.getElementById('countofbooksread').innerHTML = countbooksread;
    localStorage.setItem("books_table" + "_" + "row" + "_" + countbooksread.toString() + "_" + "title", title.value);
    localStorage.setItem("books_table" + "_" + "row" + "_" + countbooksread.toString() + "_" +"author", author.value);
    localStorage.setItem("books_table" + "_" + "row" + "_" + countbooksread.toString() + "_" +"category",dropwdown_text)
}

function addRowToWishlist(){

    var title2= document.getElementById("title2");
    var author2= document.getElementById("author2");
    var price= document.getElementById("price");
    var e = document.getElementById("categoryDropwdownmonth");
    var f = document.getElementById("categoryDropwdownyear");
    var dropwdownmonth_text = e.options[e.selectedIndex].text;
    var dropwdownyear_text = f.options[f.selectedIndex].text;
    
    var checkbox1 = document.createElement('input');
    checkbox1.type= 'checkbox';
    checkbox1.id = 'myCheck';

    
    var checkbox2 = document.createElement('input');
    checkbox2.type= 'checkbox';
 

    var table = document.getElementById("wishlist_table");
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.appendChild(checkbox1)
    
    // var cell6 = row.insertCell();
    cell1.innerHTML = title2.value;
    cell2.innerHTML = author2.value;
    cell3.innerHTML = price.value;
    cell4.innerHTML = dropwdownmonth_text;
    cell5.innerHTML = dropwdownyear_text;
    
   
    cell1.className = 'title2_col';
    cell2.className = 'author2_col';
    cell3.className = 'price_col';
    cell4.className = 'estimationmonth_col';
    cell5.className = 'estimationyear_col';
    cell6.className = 'purchased_col';
   
    add_text = document.getElementById('add_text2');
    
    add_text.style.display = 'block';
    widget = document.getElementById('wishlist-widget').style.visibility = 'visible';
    var table = document.getElementById("wishlist_table"), countbooksread = 0;
    for (var i = 1; i < table.rows.length; i++) {
          countbooksread++
      }
    document.getElementById('wishlist-widget').innerHTML = countbooksread;
    document.getElementById('wishlist-count').innerHTML = countbooksread
    checkbox1.id = 'myCheck' + (countbooksread -1) ;
    localStorage.setItem("wishlist_table" + "_" + "row" + "_" + countbooksread.toString() + "_" + "title", title2.value);
    localStorage.setItem("wishlist_table" + "_" + "row" + "_" + countbooksread.toString() + "_" + "author", author2.value);
    localStorage.setItem("wishlist_table" + "_" + "row" + "_" + countbooksread.toString() + "_" + "price", price.value);
    localStorage.setItem("wishlist_table" + "_" + "row" + "_" + countbooksread.toString() + "_" + "month",dropwdownmonth_text)
    localStorage.setItem("wishlist_table" + "_" + "row" + "_" + countbooksread.toString() + "_" + "year",dropwdownyear_text)

}

function addRowToRatings(){

    var title3= document.getElementById("title3");
    
    var author3= document.getElementById("author3");
    
    var rating= localStorage.getItem('rating');
    
    var table = document.getElementById("rating_table");
    var row = table.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    cell1.innerHTML = title3.value;
    cell2.innerHTML = author3.value;
    cell3.innerHTML = rating;
   
    cell1.className = 'title3_col';
    cell2.className = 'author3_col';
    cell3.className = 'rating_col';
    add_text = document.getElementById('add_text3');
    add_text.style.display = 'block';

    var table = document.getElementById("rating_table"), countbooksread = 0;
    for (var i = 1; i < table.rows.length; i++) {
          countbooksread++
      }
    document.getElementById('rating-count').innerHTML = countbooksread
    localStorage.setItem("rating_table" + "_" + "row" + "_" +  countbooksread.toString() + "_" + "title", title3.value);
    localStorage.setItem("rating_table" + "_" + "row" + "_" + countbooksread.toString() + "_" + "author",author3.value)
    localStorage.setItem("rating_table" + "_" + "row" + "_" + countbooksread.toString() + "_" + "table_rating",rating)
}

function addToCurrentlyReading(){
    var current = document.getElementById("title4");
    text = current.value
    var current_span = document.getElementById('currently');
    console.log(current_span.innerHTML)
    current_span.innerHTML = text;
    localStorage.setItem('currently_reading',text)

}

function watcher() {
    var checkboxElements = document.getElementsByClassName("purchased_col");
    for (var i = 0; i < checkboxElements.length; i++) {
      checkboxElements[i].addEventListener('change', function() {
        if (this.checked) {
          this.closest('tr').style.textDecoration = 'line-through';
        }
      });
    }
  }
  
watcher();