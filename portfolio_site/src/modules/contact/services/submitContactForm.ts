import type { ContactFormValues } from "../validations";

const WEB3FORMS_SUBMIT_URL = "https://api.web3forms.com/submit";

type Web3FormsResponse = {
  success: boolean;
  message?: string;
};

export async function submitContactForm(
  values: ContactFormValues,
): Promise<void> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY. Add it to .env.local.",
    );
  }

  const response = await fetch(WEB3FORMS_SUBMIT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      name: values.name,
      email: values.email,
      message: values.role,
      subject: `Portfolio contact — ${values.name}`,
      from_name: "Portfolio Contact",
      botcheck: false,
    }),
  });

  const result = (await response.json()) as Web3FormsResponse;

  if (!response.ok || result.success !== true) {
    throw new Error(result.message ?? "Web3Forms submission failed.");
  }
}
