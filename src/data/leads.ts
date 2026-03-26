// ============================================================
// Mock Data: Student Leads (Contact / Enrollment Inquiries)
// TODO: Replace JSON with API call when backend is ready
// ============================================================
import type { Lead } from "../types";

// In-memory store — mimics a database table of captured leads.
// New submissions from the Contact page are pushed here at runtime.
export const leads: Lead[] = [
  {
    id: "lead-1",
    name: "Aarav Mehta",
    email: "aarav.mehta@example.com",
    phone: "+91 98765 43210",
    selectedCourse: "MERN Stack Mastery",
    message: "I want to learn full-stack development. When does the next batch start?",
    submittedAt: "2025-12-10T10:30:00Z",
  },
  {
    id: "lead-2",
    name: "Ishita Rao",
    email: "ishita.rao@example.com",
    phone: "+91 91234 56789",
    selectedCourse: "Generative AI Full-Stack Developer",
    message: "Interested in the GenAI course. Do you offer weekend batches?",
    submittedAt: "2026-01-05T14:15:00Z",
  },
];
