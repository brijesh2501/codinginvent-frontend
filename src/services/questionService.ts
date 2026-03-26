// ============================================================
// Interview Questions Service — CRUD + filtering
// Currently uses local mock data.
// TODO: Replace JSON with API call when backend is ready
// ============================================================
import type { InterviewQuestion, ApiResponse } from "../types";
import { interviewQuestions as mockQuestions } from "../data";
// import apiClient from "./apiClient"; // TODO: Uncomment when API is ready

const useMock = import.meta.env.VITE_USE_MOCK_DATA === "true";

let localQuestions: InterviewQuestion[] = [...mockQuestions];

const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export async function getQuestions(
  category?: string
): Promise<ApiResponse<InterviewQuestion[]>> {
  if (useMock) {
    await delay();
    const filtered = category
      ? localQuestions.filter((q) => q.category === category)
      : localQuestions;
    return { data: filtered, success: true };
  }
  // TODO: Replace JSON with API call
  // const res = await apiClient.get<InterviewQuestion[]>("/questions", { params: { category } });
  // return { data: res.data, success: true };
  const filtered = category
    ? localQuestions.filter((q) => q.category === category)
    : localQuestions;
  return { data: filtered, success: true };
}

export async function getQuestionById(
  id: string
): Promise<ApiResponse<InterviewQuestion | undefined>> {
  if (useMock) {
    await delay();
    const q = localQuestions.find((q) => q.id === id);
    return { data: q, success: !!q };
  }
  // TODO: Replace JSON with API call
  const q = localQuestions.find((q) => q.id === id);
  return { data: q, success: !!q };
}

export async function createQuestion(
  question: Omit<InterviewQuestion, "id">
): Promise<ApiResponse<InterviewQuestion>> {
  if (useMock) {
    await delay();
    const newQ: InterviewQuestion = { ...question, id: `iq${Date.now()}` };
    localQuestions = [...localQuestions, newQ];
    return { data: newQ, success: true };
  }
  // TODO: Replace JSON with API call
  const newQ: InterviewQuestion = { ...question, id: `iq${Date.now()}` };
  localQuestions = [...localQuestions, newQ];
  return { data: newQ, success: true };
}

export async function deleteQuestion(
  id: string
): Promise<ApiResponse<boolean>> {
  if (useMock) {
    await delay();
    localQuestions = localQuestions.filter((q) => q.id !== id);
    return { data: true, success: true };
  }
  // TODO: Replace JSON with API call
  localQuestions = localQuestions.filter((q) => q.id !== id);
  return { data: true, success: true };
}
