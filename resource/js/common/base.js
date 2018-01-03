/**
 * Created by longks on 2017/4/24.
 */
//回到顶部功能
window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var goTop = document.getElementById( "goTop" );
    if( t >= 100 ) {
        goTop.style.display = "block";
        goTop.onclick = function (event) {
            // window.scroll(0, 0)
            $('body,html').animate({
                scrollTop: 0
            }, 600);
        }
    } else {
        goTop.style.display = "none";
    }
}


// 导航栏
$(document).ready(function (){
  $(".common-header .wrap-sub ul li a").each(function(index){
  $(this).click(function(){ 
  $("li").removeClass("active");
  $("li").eq(index).addClass("active");
  });
  });
 });