# Welcome to GMFrontend

## 📌 [GMFrontend 한국어 README 바로가기](#GMFrontend-한국어-readme)

GMFrontend is the React-based frontend for **Growth Mindset**, a fitness tracking web app that allows users to manage their workouts, exercises, and sets. Built with TypeScript, React Query, and Axios.
You can visit the site here at [growthmindsetproject.com](https://growthmindsetproject.com/).

### Features

- User authentication via HTTP-only cookie JWTs and CSRF tokens(login/register)
- Protected routes and role-based access (Admin vs. User)
- User Profile Management (Update email/password, Delete account, ADMIN: Promote user to admin/Demote admin to user)
- Workout dashboard with history tracking
- Axios + React Query for efficient data fetching
- Form validation using react-hook-form + Zod
- Responsive, accessible UI with modern design

### Tech Stack

- React (with Vite)
- TypeScript
- React Router
- React Query
- Axios
- react-hook-form + Zod
- Tailwind CSS

### How to contribute

1. Clone this repository
   In your favorite IDE, type the following:

```
    git clone https://github.com/klevi43/GMFrontEnd

```

2. Install Node JS
   Please install the latest version of Node JS found here:

https://nodejs.org/

3. Install dependencies
   Run the following commands in the terminal of your favorite IDE:

```
    cd GMFrontEnd
```

```
    npm install
```

4. Run the application
   Run the following command in the terminal of your favorite IDE:

```
    npm run dev
```

## Backend

- This frontend connects to a Spring Boot
  backend. You can find the backend repo here:
  [GMBackend](https://github.com/klevi43/GMBackend)

## Known Issues

- Currently there is no graceful handling of the token expiring after the 1 hour time limit has been reached. To resolve this, simply refresh your page and go to the login screen to login again. Improved handling is planned for a future update.
- Logging out removes the token from cookies subsequent requests; however, the token is not invalidated by the backend. This is not a security concern because the jwt is stored in an HTTP-only cookie and has a short lifespan (1 hour). A refresh token functionality is planned for a future update.
- Thank you for your patience and understanding.

# GMFrontend 한국어 README

## GMFrontend에 오신 것을 환영합니다

GMFrontEnd는 **Growth Mindset**라는 피트니스 추적 웹 애플리케이션의 React 기반 프론트엔드입니다.  
사용자는 자신의 운동, 세트, 루틴을 관리할 수 있으며, 이 프로젝트는 TypeScript, React Query, Axios를 활용해 제작되었습니다.  
웹사이트는 [growthmindsetproject.com](https://growthmindsetproject.com/)에서 확인할 수 있습니다.

---

### 주요 기능

- HTTP-only 쿠키 기반 JWT와 CSRF 토큰을 통한 사용자 인증 (로그인/회원가입)
- 보호된 라우트 및 역할 기반 접근 제어 (관리자 vs 일반 사용자)
- 사용자 프로필 관리 (이메일/비밀번호 수정, 계정 삭제, 관리자: 사용자 관리자 승격/강등)
- 운동 기록이 포함된 대시보드
- Axios + React Query를 통한 효율적인 데이터 통신
- react-hook-form + Zod 기반 폼 유효성 검사
- 반응형이며 접근 가능한 최신 UI 디자인

---

### 기술 스택

- React (Vite 기반)
- TypeScript
- React Router
- React Query
- Axios
- react-hook-form + Zod
- Tailwind CSS

---

### 기여 방법

1. 레포지토리 클론  
   사용 중인 IDE에서 아래 명령어를 입력하세요:

   ```
   git clone https://github.com/klevi43/GMFrontEnd
   ```

2. Node.js 설치  
   아래 링크에서 최신 버전의 Node.js를 설치하세요:  
   [https://nodejs.org/](https://nodejs.org/)

3. 의존성 설치  
   터미널에서 다음 명령어를 실행하세요:

   ```
   cd GMFrontEnd
   ```

   ```
   npm install
   ```

4. 애플리케이션 실행  
   터미널에서 아래 명령어를 실행하면 앱이 시작됩니다:

   ```
   npm run dev
   ```

---

## 백엔드

- 이 프론트엔드는 Spring Boot 기반 백엔드와 연결됩니다.  
  백엔드 레포지토리는 다음 링크에서 확인할 수 있습니다:  
  [GMBackend](https://github.com/klevi43/GMBackend)

---

## 알려진 이슈

- 현재 JWT 토큰이 1시간 만료 후 적절하게 처리되지 않습니다.  
  페이지를 새로고침하고 로그인 화면으로 돌아가 다시 로그인하시면 됩니다.  
  추후 업데이트에서 개선될 예정입니다.

- 로그아웃 시 쿠키에서 토큰은 제거되지만, 백엔드에서는 해당 토큰을 무효화하지 않습니다.  
  그러나 토큰은 HTTP-only 쿠키에 저장되고 수명이 짧기 때문에 보안 문제는 아닙니다.  
  리프레시 토큰 기능은 향후 업데이트에 포함될 예정입니다.

- 기다려 주시고 이해해 주셔서 감사합니다.
