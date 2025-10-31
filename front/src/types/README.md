# Types

이 폴더는 TypeScript 타입 정의 파일들을 저장합니다.

## 예시

```typescript
// user.types.ts
export interface User {
  id: number;
  email: string;
  name: string;
}

// post.types.ts
export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  authorId: number;
}

// api.types.ts
export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}
```

## 사용법

```typescript
import { User, Post, ApiResponse } from '@/types';

const user: User = {
  id: 1,
  email: 'test@example.com',
  name: 'John Doe'
};

const response: ApiResponse<Post[]> = await fetchPosts();
```
