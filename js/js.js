/**
 * Created by Administrator on 2017/9/11 0011.
 */

$(function(){
    $(".ck1").click(function(){
        $(".ck1").css('background','url("images/ck1.png")repeat-x');
        $(".ck1 h2").css('color','black');
        $(".ck2").css('background',' #d8035d');
        $(".ck2 h2").css('color','white');
        $(".main_ck1").css('display','block');
        $(".main_ck2").css('display','none');
    });
    $(".ck2").click(function(){
        $(".ck2").css('background','url("images/ck1.png")repeat-x');
        $(".ck2 h2").css('color','black');
        $(".ck1").css('background',' #d8035d');
        $(".ck1 h2").css('color','white');
        $(".main_ck1").css('display','none');
        $(".main_ck2").css('display','block');
    });

    //¿ªµê
    $(".wode_kd p").click(function(){
        $(".fixed_kd").css('display','block');
    });
    $(".fixed_kd_box .gb").click(function(){
        $(".fixed_kd").css('display','none');
    });
    //¿Í·þ
    $(".wode_footer ul li:nth-child(4)").click(function(){
        $(".fixed_kf").css('display','block');
    });
    $(".fixed_kd_box .gb").click(function(){
        $(".fixed_kf").css('display','none');
    });

    //ÏûÏ¢Ñ¡Ïî¿¨
    $(function(){
        function tabs(tabTit,on,tabCon){
            $(tabTit).children().hover(function(){
                $(this).addClass(on).siblings().removeClass(on);
                var index = $(tabTit).children().index(this);
                $(tabCon).children().eq(index).show().siblings().hide();
            });
        };

        tabs(".fixed_kd_ck_ul1","li",".fixed_kd_ck_ul2","li");
    });


    $(".wode_footer ul li:nth-child(3)").click(function(){
        $(".fixed_ck").css('display','block');
    });
    $(".fixed_kd_box .gb").click(function(){
        $(".fixed_ck").css('display','none');
    });

//    ¶©µ¥
    $(".wode_footer ul li:nth-child(2)").click(function(){
        $(".fixed_dd").css('display','block');

    });
    $(".fixed_kd_box .gb").click(function(){
        $(".fixed_dd").css('display','none');
    });

//    µØÖ·
    $(".wode_footer ul li:nth-child(1)").click(function(){
        $(".fixed_dz").css('display','block');

    });
    $(".fixed_kd_box .gb").click(function(){
        $(".fixed_dz").css('display','none');
    });

//    ²Ö¿âËéÆ¬
    $(".section_box").click(function(){
        $(".fixed_sp").css('display','block');
    });
    $(".fixed_kd_box .gb").click(function(){
        $(".fixed_sp").css('display','none');
    });


    //²Ö¿âºÏ³É
    $('.fixed_kd_sp').click(function(){
        var yiyou=$(".fixed_kd_sp span").text()
       alert(yiyou)
    });



    $(".article_main .f_right h3").click(function(){
        $(".article_main .f_right>div").slideToggle(1000);
    });

    //ÏêÇéÒ³ÎÊºÃ
    $(".article_main .f_right>div a:nth-child(2)").click(function(){
        $(".fixed_kd").css('display','block');
    });
    $(".fixed_kd_box .gb").click(function(){
        $(".fixed_kd").css('display','none');
    });


    //ÏêÇéÒ³ÅÅÃû
    $(".article_main .f_right>div a:nth-child(1)").click(function(){
        $(".fixed_ph").css('display','block');
    });
    $(".fixed_kd_box .gb").click(function(){
        $(".fixed_ph").css('display','none');
    });
    //ÏêÇé¾ªÏ²ºÐ×Óµã»÷·¿¼ä
    $(".article_main .f_right p").click(function(){
        $(".fixed_ck").css('display','block');
    });
    $(".fixed_kd_box .gb").click(function(){
        $(".fixed_ck").css('display','none');
    });

//    »úÆ÷×¥¶¯»­

     var n=4;
    $(".zhua_but").click(function(){
        $(".article_gun").animate({height:"370px"},460);    //杆子拉长
        $(".article_gun").animate({height:"72px"},"slow");  //杆子恢复原状

        $("#zhua_left").removeClass("mzhua_left");      //点击开始时前面有左右爪子复原的类，先删除
        $("#zhua_right").removeClass("mzhua_right");
        $("#zhua_left").addClass("nzhua_left");         //点击开始时前面没有转动左右爪子的类，先添加
        $("#zhua_right").addClass("nzhua_right");

     n=n+2;
     if(n==10){
        n=4;
     }


       // 在中间被抓上去的娃娃
        setTimeout(bt,400); //0.4秒后娃娃被抓上去
        function bt(){
                    $("#lunbo li").eq(n).animate({bottom:"370px"},10);  
                    setTimeout(bn,1000); //动画结束1秒后娃娃掉下来
                    function bn(){
                    $("#lunbo li").eq(n).animate({bottom:""},10);  
                    }
         }


       //动画结束弹出中奖信息
        setTimeout(test,1100); //定时1100秒，刚好前面动画结束
        function test(){ 
             $("#zhua_left").removeClass("nzhua_left");       //动画结束后删除转动左右爪子的类
             $("#zhua_right").removeClass("nzhua_right");     
             $("#zhua_left").addClass("mzhua_left");          //动画结束后添加左右爪子复原的类类
             $("#zhua_right").addClass("mzhua_right"); 
            if('random(a, b)'=='谢谢参与'){

              alert('谢谢参与');
             }
             else{
                 alert('你中了'+random(a, b));
              }
         } 

    });

      


    // 中奖概率包装
    function random(arr1, arr2) {
      var sum = 0,
        factor = 0,
        random = Math.random();
      for(var i = arr2.length - 1; i >= 0; i--) {
        sum += arr2[i]; // 统计概率总和
      };
      random *= sum; // 生成概率随机数
      for(var i = arr2.length - 1; i >= 0; i--) {
        factor += arr2[i];
        if(random <= factor)
         return arr1[i];
      };
      return null;
    };
    var a = ['图片1', '图片2','图片3', '图片4', '图片5', '图片6','谢谢参与'];  //有多少个物品
    var b = [0.0,0.0,0.1,0.2,0.2,0.2,0.3]; //每个物品的概率
});



 
