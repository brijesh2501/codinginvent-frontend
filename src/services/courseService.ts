// ============================================================
// Course Service — CRUD operations for courses
// Currently uses local mock data. When backend is ready,
// swap the mock implementations with apiClient calls.
// ============================================================
import type { Course, ApiResponse } from "../types";
import { courses as mockCourses } from "../data";
// import apiClient from "./apiClient"; // TODO: Uncomment when API is ready

const useMock = import.meta.env.VITE_USE_MOCK_DATA === "true";

// In-memory copy so CRUD mutations don't affect the original import
let localCourses: Course[] = [...mockCourses];

/** Simulate async delay for realistic UX during mock mode */
const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

// ------ READ ------

export async function getCourses(): Promise<ApiResponse<Course[]>> {
  if (useMock) {
    await delay();
    return { data: localCourses, success: true };
  }
  // TODO: Replace JSON with API call
  // const res = await apiClient.get<Course[]>("/courses");
  // return { data: res.data, success: true };
  return { data: localCourses, success: true };
}

export async function getCourseBySlug(
  slug: string
): Promise<ApiResponse<Course | undefined>> {
  if (useMock) {
    await delay();
    const course = localCourses.find((c) => c.slug === slug);
    return { data: course, success: !!course };
  }
  // TODO: Replace JSON with API call
  // const res = await apiClient.get<Course>(`/courses/${slug}`);
  // return { data: res.data, success: true };
  const course = localCourses.find((c) => c.slug === slug);
  return { data: course, success: !!course };
}

// ------ CREATE ------

export async function createCourse(
  course: Omit<Course, "id">
): Promise<ApiResponse<Course>> {
  if (useMock) {
    await delay();
    const newCourse: Course = {
      ...course,
      id: `c${Date.now()}`,
    };
    localCourses = [...localCourses, newCourse];
    return { data: newCourse, success: true };
  }
  // TODO: Replace JSON with API call
  // const res = await apiClient.post<Course>("/courses", course);
  // return { data: res.data, success: true };
  const newCourse: Course = { ...course, id: `c${Date.now()}` };
  localCourses = [...localCourses, newCourse];
  return { data: newCourse, success: true };
}

// ------ UPDATE ------

export async function updateCourse(
  id: string,
  updates: Partial<Course>
): Promise<ApiResponse<Course | undefined>> {
  if (useMock) {
    await delay();
    localCourses = localCourses.map((c) =>
      c.id === id ? { ...c, ...updates } : c
    );
    return {
      data: localCourses.find((c) => c.id === id),
      success: true,
    };
  }
  // TODO: Replace JSON with API call
  // const res = await apiClient.put<Course>(`/courses/${id}`, updates);
  // return { data: res.data, success: true };
  localCourses = localCourses.map((c) =>
    c.id === id ? { ...c, ...updates } : c
  );
  return { data: localCourses.find((c) => c.id === id), success: true };
}

// ------ DELETE ------

export async function deleteCourse(
  id: string
): Promise<ApiResponse<boolean>> {
  if (useMock) {
    await delay();
    localCourses = localCourses.filter((c) => c.id !== id);
    return { data: true, success: true };
  }
  // TODO: Replace JSON with API call
  // await apiClient.delete(`/courses/${id}`);
  // return { data: true, success: true };
  localCourses = localCourses.filter((c) => c.id !== id);
  return { data: true, success: true };
}
