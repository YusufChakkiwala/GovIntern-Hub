import { supabase } from "@/integrations/supabase/client";

export type ContactMessage = {
	name: string;
	email: string;
	subject: string;
	message: string;
	category?: string;
};

/**
 * Persists a contact message into the `contact_messages` table.
 * Table expected columns: id (uuid, default), created_at (timestamptz, default now),
 * name (text), email (text), subject (text), message (text), category (text, nullable)
 */
export async function saveContactMessage(data: ContactMessage): Promise<{ id: string | null }>{
	const { data: insertData, error } = await supabase
		.from("contact_messages")
		.insert({
			name: data.name,
			email: data.email,
			subject: data.subject,
			message: data.message,
			category: data.category ?? null,
		})
		.select("id")
		.single();

	if (error) {
		throw new Error(error.message);
	}

	return { id: insertData?.id ?? null };
}

/**
 * Sends the contact message via EmailJS REST API without an SDK dependency.
 * Requires Vite env vars:
 * - VITE_EMAILJS_SERVICE_ID
 * - VITE_EMAILJS_TEMPLATE_ID
 * - VITE_EMAILJS_PUBLIC_KEY
 * The EmailJS template should include variables: name, email, subject, message, category, to_email
 */
export async function sendContactEmail(data: ContactMessage, toEmail: string): Promise<void> {
	const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
	const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
	const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

	if (!serviceId || !templateId || !publicKey) {
		// Silently skip if not configured; caller may still succeed with DB save.
		return;
	}

	const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			service_id: serviceId,
			template_id: templateId,
			user_id: publicKey,
			template_params: {
				name: data.name,
				email: data.email,
				subject: data.subject,
				message: data.message,
				category: data.category ?? "",
				to_email: toEmail,
			},
		}),
	});

	if (!response.ok) {
		const text = await response.text().catch(() => "");
		throw new Error(`Email send failed: ${response.status} ${text}`);
	}
}


