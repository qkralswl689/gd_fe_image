// console.log('1.---------------');

document.querySelector('.button1').addEventListener('click', function () {
  let a1 = parseInt(document.querySelector('.number1-1').value); // value -> 입력된 값 , 입력된 값을 가져와서 할당 ,parseInt -> 택스트를 숫자로 형변환
  let b1 = parseInt(document.querySelector('.number1-2').value);

  document.querySelector('.result1-1').value = a1 + b1; // 계산식을 할당
  document.querySelector('.result1-2').value = a1 - b1;
  document.querySelector('.result1-3').value = a1 * b1;
  document.querySelector('.result1-4').value = a1 / b1;
  document.querySelector('.result1-5').value = a1 % b1;
}); // 이벤트리스너 할당
