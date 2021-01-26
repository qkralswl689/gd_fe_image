// console.log('1.---------------');

$(function(){ // ready 함수
  
  $('.button1').on('click', function () {
      let a1 = parseInt($('.number1-1').val()); // value -> 입력된 값 , 입력된 값을 가져와서 할당 ,parseInt -> 택스트를 숫자로 형변환
      let b1 = parseInt($('.number1-2').val());
    
      $('.result1-1').val(a1 + b1); // 계산식을 할당
      $('.result1-2').val(a1 - b1);
      $('.result1-3').val(a1 * b1);
      $('.result1-4').val(a1 / b1);
      $('.result1-5').val(a1 % b1);
  }); // 이벤트리스너 할당

  // console.log('6.---------------');

$('.button6').on('click', function(){

    let a6 = $('.number6-1').val();
    let number1 =0;
    let number10 =0;
    let clap = 0;
    let equal = false; // 1의자리,10의자리가 같은지 따져보는 변수
    
  // document.querySelector('.result-number6').innerHTML = ''; 
    $('.result-number6').empty();
    
    for(let i=1; i<a6; i++){
      //1의자리, 10의 자리 분리
      number1 = i % 10;
      number10 = ( i - number1 ) / 10;
      
      // 각 자리가 3의 배수인지 체크,박수횟수 증가
      if(number1 != 0 && number1 % 3 == 0){
          clap += 1;
          // console.log(i);
          // document.querySelector('.result-number6').append(i); // 1의자리부분을 체크해서 3의 배수인지 따져준 후 맞으면 출력

          // let para = document.createElement('span'); //자바스크립트에서 직접 만드는것 HTML 접근이 아님
          // let node = document.createTextNode(i);
          // para.appendChild(node); //Node로 추가할때는 appendChild를 사용한다 / <span>1</span> 모양으로 만들어 짐, para에 node를 할당하라는 것
          // document.querySelector('.result-number6').appendChild(para);//result-number4 돔요소에 접근해
          
          $('.result-number6').append('<span>' + i + '</span>'); // 위의 4줄을 jQuery이용하여 한줄로 축약

          equal = true; // 그 숫자가 3의 배수일 떄 equal에 true 를 넣는다 -> 1의자리를 따져서 출력을 했다는 뜻
      } 
      if(number10 != 0 && number10 % 3 == 0){
          clap += 1; // 박수는 두번 체크해야하므로 따로 설정을 하지 않는다
          // console.log(i);
          if(equal != true){ // 1의자리에서 이미 3의 배수를 출력했으므로 10의자리에서 1의 자리에 있는 값이 3의 배수이면 이미 출력된 값으로 출력하지 않게 설정 
            // document.querySelector('.result-number6').append(i);

            // let para = document.createElement('span'); //자바스크립트에서 직접 만드는것 HTML 접근이 아님
            // let node = document.createTextNode(i);
            // para.appendChild(node); //Node로 추가할때는 appendChild를 사용한다 / <span>1</span> 모양으로 만들어 짐, para에 node를 할당하라는 것
            // document.querySelector('.result-number6').appendChild(para);//result-number4 돔요소에 접근해

            $('.result-number6').append('<span>' + i + '</span>');// 위의 4줄을 jQuery이용하여 한줄로 축약
        }
        
      }
      equal = false;
      
    }
      // console.log(clap);
      $('.result6-1').val(clap);
  });
  

});


