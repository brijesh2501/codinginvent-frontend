type GoogleFormLeadPayload = {
  name: string;
  email: string;
  phone: string;
  education: string;
  workExperience: string;
};

/**
 * Submits landing-form details via server-side relay endpoint.
 * Relay avoids browser/network restrictions on direct Google Forms posts.
 */
export async function submitLandingLeadToGoogleForm(payload: GoogleFormLeadPayload) {
  const res = await fetch("/api/google-form-relay", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Google form relay failed with status ${res.status}`);
  }
}
