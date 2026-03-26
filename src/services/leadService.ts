// ============================================================
// Lead Service — handles contact-form / enrollment inquiries
// TODO: Replace JSON with API call when backend is ready
// ============================================================
import type { Lead, ApiResponse } from "../types";
import { leads as mockLeads } from "../data/leads";

const useMock = import.meta.env.VITE_USE_MOCK_DATA === "true";

const delay = (ms = 400) => new Promise((r) => setTimeout(r, ms));

/**
 * Submit a new lead (contact form).
 * Currently stores in the in-memory JSON array.
 * TODO: Replace JSON with API call — POST /api/leads
 */
export async function submitLead(
  lead: Omit<Lead, "id" | "submittedAt">
): Promise<ApiResponse<Lead>> {
  if (useMock) {
    await delay();
    const newLead: Lead = {
      ...lead,
      id: `lead-${Date.now()}`,
      submittedAt: new Date().toISOString(),
    };
    mockLeads.push(newLead);
    return { data: newLead, success: true, message: "Inquiry submitted successfully!" };
  }

  // TODO: Replace JSON with API call
  // const res = await apiClient.post<Lead>("/leads", lead);
  // return { data: res.data, success: true };
  const newLead: Lead = {
    ...lead,
    id: `lead-${Date.now()}`,
    submittedAt: new Date().toISOString(),
  };
  mockLeads.push(newLead);
  return { data: newLead, success: true, message: "Inquiry submitted successfully!" };
}

/**
 * Get all captured leads.
 * TODO: Replace JSON with API call — GET /api/leads
 */
export async function getLeads(): Promise<ApiResponse<Lead[]>> {
  if (useMock) {
    await delay();
    return { data: [...mockLeads], success: true };
  }

  // TODO: Replace JSON with API call
  return { data: [...mockLeads], success: true };
}
