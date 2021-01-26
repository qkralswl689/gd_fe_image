// slide 효과

$(function () {

    let currentIndex = 0;
    let nextIndex = 1;

    $('.view-image').eq(0).css({left:0}); // 이미지 배치
    $('.view-image').eq(1).css({left:'-300px}'});
    $('.view-image').eq(2).css({left:'-300px'});

    
    $('.view-image')eq(currentIndex).animate({ // 현재 화면에 보이는 이미지가 담긴 접시
        
        left:-'300px' //끝 상태 -> 시작상태는 이미 $('.view-image').eq(0).css({left:0}); 으로 잡혀있다

        // currentIndex 에 있는 이미지를 left:-300px자리로 보내준다
        

    }); 

    $('.view-image').eq(nextIndex).animate({ // 다음으로 보여질 이미지가 준비되어있는 접시

    }); 




});