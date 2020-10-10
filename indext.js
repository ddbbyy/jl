define(['jquery','jquery-cookie'],function($){
    function oul(){
        $.ajax({
            url:'../data/data.json',
            success:function(arr){
                var str =``;
                for(var i = 0 ;i < arr.length;i++){
                    str +=`<li class = 'firstL'>
                    <a href="">
                        <div class = 'hr-phong'>
                            <img src="${arr[i].img}" alt="" class = 'image1'>
                            <img src="${arr[i].img2}" alt="" class = 'image2'>
                        </div>
                        <div class = 'phong-n'>
                            <p class = 'phong-sta'>金立k30</p>
                            <p class = 'phong-her'>1600万柔光自拍</p>
                            <p class = 'phong-las'>￥999</p>
                        </div>
                    </a>
                </li>`
                }
                $('.MA-img2 ul').html(str);
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
                                                                                                                
    return{
      oul:oul
    }
})