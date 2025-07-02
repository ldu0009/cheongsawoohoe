# Chungsawoohoe

한국어 최적화된 Angular 20+ SSR 애플리케이션

## 🚀 기술 스택

- **Framework**: Angular 20+
- **Styling**: TailwindCSS 3.4.0
- **SSR**: Angular Universal
- **Font**: Pretendard (한국어 최적화)
- **Language**: TypeScript
- **Package Manager**: npm

## ✨ 주요 기능

### 🎨 UI/UX 최적화

- **프리텐다드 폰트**: 한국어에 최적화된 폰트
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 대응
- **TailwindCSS**: 유틸리티 퍼스트 CSS 프레임워크
- **애니메이션**: 부드러운 페이지 전환 및 인터랙션

### ⚡ 성능 최적화

- **SSR (Server-Side Rendering)**: 빠른 초기 로딩
- **Prerendering**: 정적 페이지 사전 렌더링
- **Client Hydration**: 부드러운 클라이언트 하이드레이션
- **HTTP Transfer Cache**: 서버-클라이언트 데이터 전송
- **View Transitions**: 부드러운 페이지 전환

### 🛡️ 보안 강화

- **Security Headers**: XSS, Clickjacking 방지
- **Content Type Options**: MIME 스니핑 방지
- **Referrer Policy**: 보안 강화된 리퍼러 정책

### 📱 플랫폼 최적화

- **iOS**: 터치 최적화, 안전 영역 대응
- **Android**: 스크롤 최적화, PWA 지원
- **Windows**: IE 호환성, 고대비 모드 지원

## 🛠️ 설치 및 실행

### 필수 요구사항

- Node.js 18+
- npm 9+

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm start

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run serve:ssr
```

## 📁 프로젝트 구조

```
src/
├── app/                    # 애플리케이션 컴포넌트
│   ├── app.component.ts    # 메인 앱 컴포넌트
│   ├── app.config.ts       # 클라이언트 설정
│   ├── app.config.server.ts # 서버 설정
│   ├── app.routes.ts       # 라우팅 설정
│   └── app.routes.server.ts # 서버 라우팅 설정
├── assets/                 # 정적 자산
│   └── icons/             # 플랫폼별 아이콘
├── environments/           # 환경 설정
│   ├── environment.ts     # 개발 환경
│   └── environment.prod.ts # 프로덕션 환경
├── styles.scss            # 전역 스타일
├── main.ts               # 클라이언트 진입점
├── main.server.ts        # 서버 진입점
└── server.ts             # Express 서버 설정
```

## 🎯 환경 설정

### 개발 환경

```typescript
export const environment = {
  production: false,
  apiUrl: "http://localhost:3000/api",
  appName: "Chungsawoohoe",
  version: "1.0.0",
};
```

### 프로덕션 환경

```typescript
export const environment = {
  production: true,
  apiUrl: "https://api.chungsawoohoe.com/api",
  appName: "Chungsawoohoe",
  version: "1.0.0",
};
```

## 🚀 배포

### 정적 호스팅 (Vercel, Netlify 등)

```bash
npm run build
# dist/Chungsawoohoe/browser 폴더를 배포
```

### 서버 호스팅 (Node.js)

```bash
npm run build
npm run serve:ssr
```

## 📊 성능 지표

- **초기 번들 크기**: 308.63 kB (83.13 kB gzipped)
- **서버 번들 크기**: 810.92 kB
- **빌드 시간**: ~10초
- **Prerendered Routes**: 1개

## 🔧 개발 가이드

### 새로운 컴포넌트 생성

```bash
ng generate component my-component --standalone
```

### 새로운 서비스 생성

```bash
ng generate service my-service
```

### 환경별 빌드

```bash
# 개발 빌드
ng build --configuration=development

# 프로덕션 빌드
ng build --configuration=production
```

## 📝 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요.
