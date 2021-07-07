var count;
const hovered_items = [];
function starmark(item){
    count=item.id[0];
    hovered_items.push(count);
    localStorage.setItem("rating",hovered_items[hovered_items.length - 1])
    sessionStorage.starRating = count;
    var subid= item.id.substring(1);
    for(var i=0;i<5;i++){
        if(i<count){
            document.getElementById((i+1)+subid).style.color="#FDE16D";
        }
        else{
            document.getElementById((i+1)+subid).style.color="white";
        }
    }
}