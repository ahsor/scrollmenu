$(function(){
    var menu = $('#top_menu > ul > li');
    var contents = $('#contents > div');
    
    menu.click(function(event){
       event.preventDefault();
       
       var tg = $(this);
       var i = $(this).index();
       
       var section = contents.eq(i);
       var tt = section.offset().top;
       
       $('html, body').stop().animate({scrollTop:tt});
    });
    
     $(window).scroll(function(){
		  // 윈도우를 스크롤 할때도 이동 할 수 있도록 구현 
		  // scroll 이벤트 
       var sct = $(window).scrollTop();
	      // 윈도우 탑 정보 저장
      
       contents.each(function(){

         var i = $(this).index();
          if($(this).offset().top <= sct){
              menu.removeClass('on');
              menu.eq(i).addClass('on');
          }
      });
    });
});