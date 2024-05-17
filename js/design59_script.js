$(function(){

    //トップまでスクロール
    function scrollTop() {
        return $(window).scrollTop();
    }
    
    $('a#top').click(function(){
        $('html,body').animate({scrollTop:0});
    });
    
    //画面高さの半分までスクロールでフッター（右側）に薄いフィルター
    var $height = window.innerHeight;
    var $point = $height / 2

    $(window).scroll(function(){
        var $scrollTop = scrollTop();

        if ($scrollTop > $point) {
            $('body').addClass('fadeIn');
        } else {
            $('body').removeClass('fadeIn');
        }

    });


    //追記の表示⇔非表示で使用
    $('.click-parent').on('click', function() {
        $(this).parent().toggleClass('active');        
    });


    //アルバムの拡大⇔縮小で使用
    $('.click').on('click', function() {
        $(this).toggleClass('active');        
    });

});