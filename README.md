# OneMind - 한마음 교회 웹사이트

한마음 교회를 위한 풀스택 웹 애플리케이션입니다.

## 프로젝트 개요

이 프로젝트는 교회의 다양한 정보와 활동을 관리하고 공유하기 위한 웹사이트입니다.

### 주요 기능

- **교회 소개**: 인사말, 교회 소개, 목사 소개, 교회 역사
- **예배 안내**: 예배 시간 및 장소 정보
- **설교**: 설교 영상 및 자료 관리
- **게시판**: 교회 소식, 앨범 등 다양한 게시판
- **헌금**: 헌금 안내
- **위치 안내**: 교회 위치 및 오시는 길
- **관리자 기능**: 게시글 작성, 수정, 삭제 (로그인 필요)

## 기술 스택

### Frontend
- **React** 18.2.0 - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Redux Toolkit** - 상태 관리
- **React Router** - 라우팅
- **Material-UI** - UI 컴포넌트
- **Styled Components** - 스타일링
- **Axios** - HTTP 클라이언트
- **React Quill** - 에디터
- **AOS** - 애니메이션

### Backend
- **NestJS** 9.0 - Node.js 프레임워크
- **Prisma** - ORM
- **MySQL** - 데이터베이스
- **JWT** - 인증
- **Passport** - 인증 미들웨어
- **Bcrypt** - 비밀번호 암호화
- **Multer** - 파일 업로드
- **Swagger** - API 문서화

## 프로젝트 구조

```
onemind/
├── client/                   # Client (React)
│   ├── src/
│   │   ├── assets/          # 정적 파일
│   │   │   └── images/      # 이미지 파일
│   │   ├── components/      # React 컴포넌트
│   │   │   ├── common/      # 공통 컴포넌트 (Navbar, Footer, Pagination 등)
│   │   │   └── features/    # 기능별 컴포넌트 (PostComp, Notice, Maps 등)
│   │   ├── pages/           # 페이지 컴포넌트
│   │   ├── store/           # Redux 스토어
│   │   ├── hooks/           # Custom Hooks
│   │   ├── utils/           # 유틸리티 함수
│   │   ├── types/           # TypeScript 타입 정의
│   │   └── styles/          # 스타일 파일
│   └── public/              # Public 정적 파일
├── server/                   # Server (NestJS)
│   ├── src/
│   │   ├── auth/            # 인증 모듈
│   │   │   ├── controller/
│   │   │   ├── service/
│   │   │   ├── dto/
│   │   │   ├── jwt/
│   │   │   └── module/
│   │   ├── member/          # 회원 모듈
│   │   │   ├── controller/
│   │   │   ├── service/
│   │   │   └── dto/
│   │   ├── post/            # 게시글 모듈
│   │   │   ├── controller/
│   │   │   ├── service/
│   │   │   └── dto/
│   │   ├── you-tube/        # 유튜브 모듈
│   │   │   ├── controller/
│   │   │   ├── service/
│   │   │   └── dto/
│   │   ├── common/          # 공통 유틸리티
│   │   ├── config/          # 설정 파일
│   │   └── logger/          # 로거
│   ├── prisma/              # Prisma 스키마 및 마이그레이션
│   ├── uploads/             # 업로드 파일 저장소
│   └── test/                # 테스트 파일
└── README.md
```

## 시작하기

### 필수 요구사항

- Node.js (v16 이상)
- MySQL
- npm 또는 yarn

### 설치 및 실행

#### 1. Server 설정

```bash
# Server 디렉토리로 이동
cd server

# 의존성 설치
npm install

# 환경 변수 설정
# .env 파일을 생성하고 다음 내용을 설정하세요:
# DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/DATABASE_NAME"
# SWAGGER_USER=admin
# SWAGGER_PASSWORD=your_password
# SECRET_KEY='your_secret_key'

# Prisma 마이그레이션
npx prisma migrate dev

# Prisma 클라이언트 생성
npx prisma generate

# 개발 모드로 실행
npm run start:dev
```

서버는 기본적으로 `http://localhost:3000`에서 실행됩니다.

#### 2. Client 설정

```bash
# Client 디렉토리로 이동
cd client

# 의존성 설치
npm install

# 개발 모드로 실행
npm start
```

클라이언트는 기본적으로 `http://localhost:3000`에서 실행됩니다.

## 데이터베이스 스키마

- **User**: 사용자 정보
- **Post**: 게시글
- **Member**: 교회 멤버
- **YouTube**: 유튜브 영상 정보
- **File**: 파일 첨부

## API 문서

백엔드 서버가 실행 중일 때 Swagger UI를 통해 API 문서를 확인할 수 있습니다:
- URL: `http://localhost:3000/api-docs`
- 인증: Swagger에서 설정한 사용자명과 비밀번호 사용

## 주요 페이지

- `/` - 홈
- `/greeting` - 인사말
- `/introduction` - 교회 소개
- `/pastor` - 목사 소개
- `/history` - 교회 연혁
- `/sermon` - 설교
- `/worship` - 예배 안내
- `/news` - 교회 소식
- `/album` - 앨범
- `/location` - 찾아오시는 길
- `/contribution` - 헌금 안내
- `/login` - 관리자 로그인

## 개발 스크립트

### Client
```bash
npm start       # 개발 서버 실행
npm run build   # 프로덕션 빌드
npm test        # 테스트 실행
```

### Server
```bash
npm run start:dev      # 개발 모드 (watch mode)
npm run start:prod     # 프로덕션 모드
npm run build          # 빌드
npm run test           # 유닛 테스트
npm run test:e2e       # E2E 테스트
npx prisma studio      # Prisma Studio 실행 (DB GUI)
```

## 라이센스

이 프로젝트는 비공개 프로젝트입니다.

## 기여

프로젝트에 기여하고 싶으시다면 이슈를 생성하거나 Pull Request를 보내주세요.