// ============================================================
// Mock Data: Enrollments
// TODO: Replace JSON with API call when backend is ready
// ============================================================
import type { Enrollment } from "../types";

export const enrollments: Enrollment[] = [
  {
    id: "e1",
    userId: "u1",
    courseId: "c4",
    enrolledAt: "2025-04-01",
    progress: 45,
    status: "active",
  },
  {
    id: "e2",
    userId: "u1",
    courseId: "c6",
    enrolledAt: "2025-05-15",
    progress: 10,
    status: "active",
  },
];
