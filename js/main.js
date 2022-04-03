

window.addEventListener("load",function(){
    trumcateCardtitle();
});
    /* trumcateCardtitle */
function trumcateCardtitle(){
    var cardlist = document.getElementsByClassName("card-title");
    console.log(cardlist);
    for(var i = 0; i < cardlist.length; i++){
        var text = cardlist[i].innerHTML;
       var newtext = truncateString(text,25);
        cardlist[i].innerHTML = newtext;
    }
}
function truncateString( str,num){
    if(str.length > num){
        return str.slice(0,num) + "...";
    } else{
        return str;
    }
}

            //SIDEBARMINI
var toggleBtn = document.querySelector('.sidebarMini__button');
var sidebar = document.querySelector('.sidebarMini');
var switchBtn = document.querySelector('#checkbox');

    toggleBtn.addEventListener('click',function(){
        sidebar.classList.toggle('is-oppend');
    });

    switchBtn.addEventListener('click',function(){
        document.querySelector('body').classList.toggle('darkMode');
    });

