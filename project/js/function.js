var container = document.getElementById('map'); // 지도를 표시할 div

var options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표 -> 중심위치 초기값 셋팅
    level: 3 // 지도의 확대 레벨
};

var map = new kakao.maps.Map(container, options); // 지도 생성

var geocoder = new kakao.maps.services.Geocoder(); // 주소-좌표 변환 객체를 생성 합니다

function getLocation(){ // 위치 추척 
    if(navigator.geolocation){

        navigator.geolocation.watchPosition(function(position){ //watchPosition => 위도,경도 좌표 표시

            console.log(position.coords);

        });

    }else{
        alert('Not Support!');

    }
}


function formSearch(){ // 중복사용 되므로 함수로 만들어 호출하는 방식으로 작성 

    let address = document.querySelector('.input-address').value; // 버튼 클릭할때 input 박스의 값을 가져온다

    // 주소로 좌표를 검색합니다
   geocoder.addressSearch(address, function(result,status) {
       // api함수 addressSearch 를 사용할때 익명함수 를 사용할 경우 api합수가 자동으로 함수의 매개변수에 값을 넣는다

       // 정상적으로 검색이 완료됐으면 
       if (status === kakao.maps.services.Status.OK) { // ok -> 값 => if status = true

           var coords = new kakao.maps.LatLng(result[0].y, result[0].x); // 주소로 검색한 위치 좌표를 지도의 위치로 대응, result 라는 매개변수의 0번째 index칸에 들어있는 값

           // 결과값으로 받은 위치를 마커로 표시합니다
           var marker = new kakao.maps.Marker({ // marker라는 클래스 선언 
               map: map, // 생성된 지도
               position: coords // 계산된 위치 좌표
           });

           // // 인포윈도우로 장소에 대한 설명을 표시합니다
           // var infowindow = new kakao.maps.InfoWindow({
           //     content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
           // });
           // infowindow.open(map, marker);

           // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
           map.setCenter(coords); // 검색된 곳이 표시되는 영역의중앙에 놓이도록 설정
       } 
   }); 
};

document.querySelector('.button-search').addEventListener('click',function(){
   
    formSearch();   
});

document.querySelector('.input-address').addEventListener('keypress', function(event){ // 익명함수에 event를 넣어주면 keypress를 했을때 관한 정보를 담는다 

    if(event.key === 'Enter'){ // event의 key가 눌렸을 때 'Enter'과 같으면

        formSearch(); // 해당함수를 호출한다 

    };

});

document.querySelector('.button-position').addEventListener('click',function(){

    this.setAttribute('class', 'button-position active'); 

    getLocation();

});