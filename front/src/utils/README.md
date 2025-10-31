# Utils

이 폴더는 재사용 가능한 유틸리티 함수들을 저장합니다.

## 예시

```typescript
// dateFormat.ts
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('ko-KR');
};

// validators.ts
export const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
```

## 사용법

```typescript
import { formatDate, isValidEmail } from '@/utils';

const formattedDate = formatDate(new Date());
const isValid = isValidEmail('test@example.com');
```
