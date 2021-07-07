
function openPortModal(i){

    if(i == 1){
        var modal = document.getElementById("lucky");
        // Get the button that opens the modal
        var btn = document.getElementById("insertModal");
        var span = document.getElementById("close1");
        var add_text = document.getElementById('add_text')
    }
    else if(i == 2){
        var modal = document.getElementById("lucky2");
        // Get the button that opens the modal
        var btn = document.getElementById("wishlistModal");
        var span = document.getElementById("close2");
        var add_text = document.getElementById('add_text2')
    }
    else if(i == 3){
        var modal = document.getElementById("lucky3");
        // Get the button that opens the modal
        var btn = document.getElementById("ratingModal");
        var span = document.getElementById("close3");
    }
    else if(i == 4){
        var modal = document.getElementById("lucky4");
        // Get the button that opens the modal
        var btn = document.getElementById("currentModal");
        var span = document.getElementById("close4");
    }
    else if(i == 5){
        var modal = document.getElementById("allbooksModal");
        // Get the button that opens the modal
        var btn = document.getElementById("myBtn1");
        var span = document.getElementById("close5");
    }
    else if(i == 6){
        var modal = document.getElementById("allwishModal");
        // Get the button that opens the modal
        var btn = document.getElementById("myBtn2");
        var span = document.getElementById("close6");
    }
    else if(i ==7){
        
        var modal = document.getElementById("allratingModal");
        // Get the button that opens the modal
        var btn = document.getElementById("myBtn3");
        var span = document.getElementById("close7");
        
    }
    else{
      var modal = document.getElementById("allwishModal");
        // Get the button that opens the modal
        var btn = document.getElementById("wishlist-widget");
        var span = document.getElementById("close6");
    }
    
    // Get the <span> element that closes the modal
    
    
    // When the user clicks on the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      if(i == 1){
        add_text.style.display = 'none';
      }
      if(i == 2){
        add_text2.style.display = 'none';
      }
      if(i == 3){
        add_text3.style.display = 'none';
      }
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}
