// slide 효과

$(function () {

    let currentIndex = 0;
    let nextIndex = 1;

    $('.image1').eq(0).css({left:0}); // 이미지 배치
    $('.image1').eq(1).css({left:'-300px'});
    $('.image1').eq(2).css({left:'-300px'});

       
     // jQuery로 동작을 만드는 함수   
    setInterval(function(){  // 함수가 1초에 한번씩 반복 되게 설정한다

        $('.image1').eq(currentIndex).animate({ // 현재 화면에 보이는 이미지가 담긴 접시
        
            left:'-300px' //끝 상태 -> 시작상태는 이미 $('.view-image').eq(0).css({left:0}); 으로 잡혀있다
    
            // currentIndex 에 있는 이미지를 left:-300px자리로 보내준다
            
        }); 
    
        $('.image1').eq(nextIndex).css({ // 다음으로 보여질 이미지가 준비되어있는 접시
    
            left:'300px'
    
        }).animate({ // .을 이용해 animate 를 연달아 쓰게되면 앞에꺼 진행되고 뒤에있는 animate가 진행된다 => 체이닝
            
            left:'0px'
    
        }); 

        currentIndex = nextIndex; //  nextIndex 값을 currentIndex에 할당해준다 => nextIndex값이 실행되고 나면 currentIndex가 된다
        nextIndex++; // nextIndex 값이 1 증가 된다

        if(nextIndex > 2){ // index값을 0으로 다시 돌려주는 것
            nextIndex = 0;
        }

    },1000);     


    let currentIndex2 = 0;
    let nextIndex2 = 1;

          
     // css에서 동작을 만드는 함수   
    setInterval(function(){  

        $('.image2').eq(currentIndex2).removeClass('jump in').addClass('out').delay(1000).queue(function(){ //removeClass => 초기화 시켜준다고 생각 ,jump가 실행되기전에 1초간 시간을 딜레이시켜준다
           
            $(this).removeClass('out').addClass('jump').dequeue(); // out을 하기 전  jump & in삭제한다 ,dequeue => queue는 한번 실행하면 반복실행이 안되므로 dequeu를 사용해 지워준다

        }); 
            
        $('.image2').eq(nextIndex2).removeClass('jump out').addClass('in'); // jump & in 하기 전 out을 삭제한다,클래스 여러개 넣을경우 공백으로 구분한다
               
        currentIndex2 = nextIndex2 ; 
        nextIndex2++; 

        if(nextIndex2 > 2){ 
            nextIndex2 = 0;
        }

    },1000);     


});