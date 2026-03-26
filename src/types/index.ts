// ============================================================
// CodingInvent — TypeScript Interfaces
// These types define the shape of all entities in the platform.
// ============================================================

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  thumbnail: string;
  instructor: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  enrolledCount: number;
  topics: string[];
  highlights: string[];
  curriculum: { section: string; lessons: string[] }[];
  prerequisites: string[];
  createdAt: string;
}

export interface InterviewQuestion {
  id: string;
  category: string;
  question: string;
  answer: string;
  difficulty: "Easy" | "Medium" | "Hard";
  tags: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: "student" | "instructor" | "admin";
  enrolledCourseIds: string[];
  createdAt: string;
}

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  enrolledAt: string;
  progress: number; // 0-100
  status: "active" | "completed" | "paused";
}

// Lead — contact / enrollment inquiry captured from the Contact page
export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  selectedCourse: string;
  message: string;
  submittedAt: string;
}

// API response wrapper — used by the service layer
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
