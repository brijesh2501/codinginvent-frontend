// ============================================================
// Mock Data: Users
// TODO: Replace JSON with API call when backend is ready
// ============================================================
import type { User } from "../types";

export const users: User[] = [
  {
    id: "u1",
    name: "Ankit Kumar",
    email: "ankit.kumar@example.com",
    avatar: "/images/avatars/ankit.png",
    role: "student",
    enrolledCourseIds: ["c4", "c6"],
    createdAt: "2025-03-10",
  },
  {
    id: "u2",
    name: "Sneha Gupta",
    email: "sneha.gupta@example.com",
    avatar: "/images/avatars/sneha.png",
    role: "instructor",
    enrolledCourseIds: [],
    createdAt: "2024-11-01",
  },
  {
    id: "u3",
    name: "Admin User",
    email: "admin@codinginvent.com",
    avatar: "/images/avatars/admin.png",
    role: "admin",
    enrolledCourseIds: [],
    createdAt: "2024-01-01",
  },
];

/** Currently logged-in user (mock) */
export const currentUser: User = users[0];
