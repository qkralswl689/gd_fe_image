# 프로젝트 설명

## 앱 기획

- 지도에서 주소 검색후 결과 위치를 지도에서 표시, 해당 위치의 날씨/기온 표시

- 지도에서 현재 위치 표시 버튼 클릭후 현재 위치 지도 표시, 해당 위치의 날씨/기온 표시

<br/>

> 기상청, Open Weather MAP, 공공 데이터 API 사용.<br/>
>
> 구글 MAP, 카카오 MAP API 사용.

## 앱 디자인

<img src="https://github.com/ministori-yonsei/gd_fe_image/blob/main/frontend/design/mini_prj.png" height="450px" title="px(픽셀) 크기 설정" alt="RubberDuck"></img>
<img src="https://github.com/ministori-yonsei/gd_fe_image/blob/main/frontend/design/mini_prj_weather.png" height="450px" title="px(픽셀) 크기 설정" alt="RubberDuck"></img>

## Open Weather MAP

세계 날씨 예보 - 현재 날씨/온도 데이터 API

URL : <https://openweathermap.org/>

## Kakao Map API

카카오 지도 API - 지도 검색, 관련 데이터 API

URL : <https://apis.map.kakao.com/>

카카오 개발자 사이트 - 키 발급

URL : <https://developers.kakao.com>

## 구현 단계

1. 카카오 맵 100% 채워지는 맵 표시

2. 주소로 지도 검색 기능 추가

3. 인풋박스, 버튼 배치

4. 인풋박스 엔터키 이벤트 연결, 검색 버튼 추가 및 기능 연결

5. 주소 검색 기능 확인

6. HTML5 지오로케이션 -> 현재 위치 위도 경도 표시

7. 현재 위치 위도, 경도를 사용해서 지도에 현재 위치 마커 표시

8. 처음 페이지 로딩시 현재 위치를 중심으로 마커 표시

9. 주소검색시 검색결과 화면 표시 기능, 버튼 클릭시 현재 위치 표시 기능 연계

10. 레이어 팝업 마크업/스타일링

11. 주소 검색 결과에서 주소 정보 추출

12. Open weather api에서 날씨, id, 온도 추출

13. id 값에 따라 이미지 선택 표시
