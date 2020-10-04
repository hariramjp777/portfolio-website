const items = document.querySelectorAll(".circles li");
var classes = document.styleSheets[0].rules || document.styleSheets[0].cssRules;

console.log(items);

items.forEach(function(item,i){
    item.addEventListener("mouseover",function(){
        for(j = 0; j < classes.length; j++){
            if(classes[j].selectorText === `.circles li:nth-child(${i+1})`){
                left = classes[j].style.left;
                console.log(left.slice(0, left.length - 1));
                classes[j].style.left = `${(parseInt(left.slice(0, left.length - 1)) + 6).toString()}%`
                break;
            }
        }
    })
})