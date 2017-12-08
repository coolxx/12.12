$(function(){
	if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	$(window).resize(function(){
		if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	})
    $('.btn-box1 li').each(function (index) {
        $(this).click(function () {
            $('.btn-box1 li').removeClass('on1').eq(index).addClass('on1');
            $('.show-box1').hide().eq(index).show()
        })
    })
    $('.btn-box2 li').each(function (index) {
        $(this).click(function () {
            $('.btn-box2 li').removeClass('on2').eq(index).addClass('on2');
            $('.show-box2').hide().eq(index).show()
        })
    })
    $('.btn-box3 li').each(function (index) {
        $(this).click(function () {
            $('.btn-box3 li').removeClass('on3').eq(index).addClass('on3');
            $('.show-box3').hide().eq(index).show()
        })
    })
    $navH=$('.nav').offset().top;
    $(window).scroll(function(){
        var $height=$(document).scrollTop();
        console.log($navH,$height);
        if($height>=$navH){
            $('.nav').addClass('fixed')
            $('.relief').css('display','block')
        }else {
            $('.nav').removeClass('fixed')
            $('.relief').css('display','none')
        }
    })
})