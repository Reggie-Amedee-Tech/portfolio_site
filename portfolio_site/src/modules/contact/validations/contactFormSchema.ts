import * as yup from "yup";

export const contactFormSchema = yup.object({
  name: yup.string().trim().required("Name is required"),
  email: yup
    .string()
    .trim()
    .email("Enter a valid email")
    .required("Email is required"),
  role: yup.string().trim().required("Tell me a bit about the role"),
  botcheck: yup.string().default(""),
});

export type ContactFormValues = yup.InferType<typeof contactFormSchema>;
