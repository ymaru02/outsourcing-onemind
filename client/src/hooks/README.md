# Hooks

이 폴더는 재사용 가능한 React Custom Hooks를 저장합니다.

## 예시

```typescript
// useAuth.ts
import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 인증 로직...

  return { isAuthenticated, setIsAuthenticated };
};
```

## 사용법

```typescript
import { useAuth } from '@/hooks/useAuth';

function MyComponent() {
  const { isAuthenticated } = useAuth();
  // ...
}
```
