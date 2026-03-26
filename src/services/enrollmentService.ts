// ============================================================
// Enrollment Service — enroll / unenroll / progress
// TODO: Replace JSON with API call when backend is ready
// ============================================================
import type { Enrollment, ApiResponse } from "../types";
import { enrollments as mockEnrollments } from "../data";
// import apiClient from "./apiClient"; // TODO: Uncomment when API is ready

const useMock = import.meta.env.VITE_USE_MOCK_DATA === "true";
let localEnrollments: Enrollment[] = [...mockEnrollments];
const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export async function getEnrollmentsByUser(
  userId: string
): Promise<ApiResponse<Enrollment[]>> {
  if (useMock) {
    await delay();
    return {
      data: localEnrollments.filter((e) => e.userId === userId),
      success: true,
    };
  }
  // TODO: Replace JSON with API call
  return {
    data: localEnrollments.filter((e) => e.userId === userId),
    success: true,
  };
}

export async function enrollUser(
  userId: string,
  courseId: string
): Promise<ApiResponse<Enrollment>> {
  if (useMock) {
    await delay();
    const enrollment: Enrollment = {
      id: `e${Date.now()}`,
      userId,
      courseId,
      enrolledAt: new Date().toISOString().split("T")[0],
      progress: 0,
      status: "active",
    };
    localEnrollments = [...localEnrollments, enrollment];
    return { data: enrollment, success: true };
  }
  // TODO: Replace JSON with API call
  const enrollment: Enrollment = {
    id: `e${Date.now()}`,
    userId,
    courseId,
    enrolledAt: new Date().toISOString().split("T")[0],
    progress: 0,
    status: "active",
  };
  localEnrollments = [...localEnrollments, enrollment];
  return { data: enrollment, success: true };
}

export async function updateProgress(
  enrollmentId: string,
  progress: number
): Promise<ApiResponse<Enrollment | undefined>> {
  if (useMock) {
    await delay();
    localEnrollments = localEnrollments.map((e) =>
      e.id === enrollmentId
        ? { ...e, progress, status: progress >= 100 ? "completed" : e.status }
        : e
    );
    return {
      data: localEnrollments.find((e) => e.id === enrollmentId),
      success: true,
    };
  }
  // TODO: Replace JSON with API call
  localEnrollments = localEnrollments.map((e) =>
    e.id === enrollmentId
      ? { ...e, progress, status: progress >= 100 ? "completed" : e.status }
      : e
  );
  return {
    data: localEnrollments.find((e) => e.id === enrollmentId),
    success: true,
  };
}
