define(['jquery'],function($){
  function body() {
          var aBtns = $('#carousel').find("ol li");
          var oUl = $('#carousel').find("ul");
          var iNow = 0;
          var timer = null;
    
          $('#carousel').mouseenter(function () {
            clearInterval(timer);
          });
    
          $('#carousel').mouseleave(function () {
            //轮播
            timer = setInterval(function () {
              iNow++;
              tab();
            }, 2000);
          });
    
          aBtns.click(function () {
            iNow = $(this).index();
            tab();
          });
    
          //轮播
          timer = setInterval(function () {
            iNow++;
            tab();
          }, 2000);
    
          function tab() {
            aBtns.removeClass("active").eq(iNow).addClass("active");
    
            if (iNow == aBtns.size()) {
              aBtns.eq(0).addClass("active");
            }
    
            oUl.animate(
              {
                left: iNow * -1262,
              },
              500,
              function () {
                //判断是否是最后一张图片
                if (iNow === aBtns.size()) {
                  iNow = 0;
                  oUl.css("left", 0);
                }
              }
            );
          }
      }
      return{
        body:body
      }
  })
