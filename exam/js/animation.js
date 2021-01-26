// 서브메뉴 나타나게 하는방법 - fade in fade out 효과

$(function(){  // CSS직접 컨트롤 해서 적용 
    $('.gnb1').on('mouseenter', function() {  // 마우스 커서 올려놓으면 서브메뉴 나오는것
        
        $('.gnb1-sub').css({
            opacity:1 /* css에서 설정된 시작상태의 마지막 상태의 값 */
        });

    });

    $('.gnb1').on('mouseleave', function () { // 마우스커서 떼면 서브메뉴 없어지는것

        $('.gnb1-sub').css({
            opacity:0 /* css에서 설정된 시작상태의 마지막 상태의 값 */
        });
            
    });
    
});

$(function(){ // 애니메이션 사용해서 적용 anamate : 시간의 흐름에 따라 시작상태와 끝났을때 상태의 값을 설정해줘야 한다
    $('.gnb2').on('mouseenter', function() { 
        
        $('.gnb2-sub').animate({   // 마우스 커서 올려놓으면 서브메뉴 색 진해지면서 나타나는것 처럼 설정
            opacity:1 /* css에서 설정된 시작상태의 마지막 상태의 값 */
        });

    });

    $('.gnb2').on('mouseleave', function () { 
        $('.gnb2-sub').animate({ // 마우스커서 떼면 서브메뉴 색 연해 져서 안보이는 것처럼 설정
            opacity:0 /* css에서 설정된 시작상태의 마지막 상태의 값 */
        });
            
    });
    
});


$(function(){  // CSS로 간접컨트롤 해서 적용 => 심플해진다(좋음)
    $('.gnb3').on('mouseenter', function(){  
        
        $('.gnb3-sub').addClass('end'); // 클래스를추가 해서 마지막상태로 변경한다
            
        
    });

    $('.gnb3').on('mouseleave', function (){ // 클래스를삭제 해서 마지막상태로 변경한다

        $('.gnb3-sub').removeClass('end');
                  
    });
    
});