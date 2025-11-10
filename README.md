# 📁 프로젝트 디렉토리 구조 및 역할

본 프로젝트는 **FSD(Floder-by-Feature-Structure)** 를 기반으로 설계되었으며, 모든 파일과 폴더는 역할과 범위에 따라 구분됩니다.
아래는 주요 폴더와 파일들의 역할 및 사용 기준을 정리한 문서입니다.

## 폴더구조

📦 src
├─ api           # 서버 통신 모듈
├─ assets        # 이미지, 아이콘, 로고 등 정적 자산
	├─ images
	├─ icons
	├─ fonts
├─ routes        # 라우팅
	├─ appRoutes
├─ components    # UI 및 페이지 구성 컴포넌트
	├─ signUp      # 페이지별로 컴포넌트 나누기
	├─ signIn
	├─ main        
	├─ product
	├─ mypage
	├─ ...
├─ constants     # 상수 정의 (API 경로, 디자인 색상 등)
├─ shared        # 재사용가능한 리소스
	├─ components  # 공용 컴포넌트(버튼, 모달 등) 
├─ foundations   # 기본 스타일/설정 (버튼, 입력, zIndex)
├─ hooks         # 커스텀 훅
├─ mocks         # 테스트용 목 데이터
├─ pages         # 라우팅 페이지 컴포넌트
	├─ signUp
	├─ signIn
	├─ main
	├─ product
	├─ mypage
	├─ ...
├─ stores        # 상태 관리
├─ types         # 타입 정의
└─ utils         # 유틸리티 함수