// ============================================================
// User Service — auth & profile (mock)
// TODO: Replace JSON with API call when backend is ready
// ============================================================
import type { User, ApiResponse } from "../types";
import { currentUser, users as mockUsers } from "../data";
// import apiClient from "./apiClient"; // TODO: Uncomment when API is ready

const useMock = import.meta.env.VITE_USE_MOCK_DATA === "true";
const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export async function getCurrentUser(): Promise<ApiResponse<User>> {
  if (useMock) {
    await delay();
    return { data: currentUser, success: true };
  }
  // TODO: Replace JSON with API call
  // const res = await apiClient.get<User>("/users/me");
  // return { data: res.data, success: true };
  return { data: currentUser, success: true };
}

export async function getUserById(
  id: string
): Promise<ApiResponse<User | undefined>> {
  if (useMock) {
    await delay();
    const user = mockUsers.find((u) => u.id === id);
    return { data: user, success: !!user };
  }
  // TODO: Replace JSON with API call
  const user = mockUsers.find((u) => u.id === id);
  return { data: user, success: !!user };
}
