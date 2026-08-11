"use client";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Textarea,
  P,
} from "@/components/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { submitContactForm } from "../services";
import { contactFormSchema, type ContactFormValues } from "../validations";

const FIELD_IDS = {
  name: "contact-name",
  email: "contact-email",
  role: "contact-role",
  botcheck: "contact-botcheck",
} as const;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(contactFormSchema),
    defaultValues: { name: "", email: "", role: "", botcheck: "" },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      await submitContactForm(values);
      toast.success("Sent — I'll reply within a day.");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try emailing me directly.");
    }
  };

  return (
    <Card className="rounded gap-0 py-0 ring-border">
      <CardHeader className="px-4 sm:px-6 pt-6 pb-0">
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="font-semibold text-base text-foreground">
            Send a note
          </CardTitle>
          <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/60 shrink-0">
            Optional
          </span>
        </div>
        <CardDescription className="font-mono text-[10px] text-foreground/60">
          Three fields. Nothing gated behind it.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 sm:px-6 py-6">
        <form
          onSubmit={handleSubmit(onSubmit, () => {
            toast.error(
              "Some required fields are missing. Please check the form.",
            );
          })}
          className="space-y-4"
          noValidate
        >
          <div
            className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
            aria-hidden="true"
          >
            <Label htmlFor={FIELD_IDS.botcheck}>Company</Label>
            <Input
              id={FIELD_IDS.botcheck}
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("botcheck")}
            />
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor={FIELD_IDS.name}
              className="font-mono text-[9px] uppercase tracking-widest text-foreground/60"
            >
              Name
            </Label>
            <Input
              type="text"
              placeholder="Your name"
              className="rounded bg-muted h-10"
              {...register("name")}
              id={FIELD_IDS.name}
              aria-invalid={!!errors.name}
              aria-describedby={
                errors.name ? `${FIELD_IDS.name}-error` : undefined
              }
            />
            {errors.name && (
              <P
                id={`${FIELD_IDS.name}-error`}
                role="alert"
                className="text-xs text-destructive-text"
              >
                {errors.name.message}
              </P>
            )}
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor={FIELD_IDS.email}
              className="font-mono text-[9px] uppercase tracking-widest text-foreground/60"
            >
              Email
            </Label>
            <Input
              type="email"
              placeholder="you@company.com"
              className="rounded bg-muted h-10"
              {...register("email")}
              id={FIELD_IDS.email}
              aria-invalid={!!errors.email}
              aria-describedby={
                errors.email ? `${FIELD_IDS.email}-error` : undefined
              }
            />
            {errors.email && (
              <P
                id={`${FIELD_IDS.email}-error`}
                role="alert"
                className="text-xs text-destructive-text"
              >
                {errors.email.message}
              </P>
            )}
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor={FIELD_IDS.role}
              className="font-mono text-[9px] uppercase tracking-widest text-foreground/60"
            >
              What&apos;s the Role?
            </Label>
            <Textarea
              placeholder="Team, stack, and what you need built."
              rows={3}
              className="rounded bg-muted resize-none"
              {...register("role")}
              id={FIELD_IDS.role}
              aria-invalid={!!errors.role}
              aria-describedby={
                errors.role ? `${FIELD_IDS.role}-error` : undefined
              }
            />
            {errors.role && (
              <P
                id={`${FIELD_IDS.role}-error`}
                role="alert"
                className="text-xs text-destructive-text"
              >
                {errors.role.message}
              </P>
            )}
          </div>

          <Button
            type="submit"
            size="cta"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending…" : "Send →"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex-col items-stretch border-t border-border bg-transparent px-4 sm:px-6 py-5">
        <P className="font-mono text-[10px] uppercase tracking-widest text-foreground/60 mb-3">
          Or Skip the Form
        </P>
        <P className="text-sm">
          The résumé is in the top-right on every page — grab it and read it
          later.
        </P>
      </CardFooter>
    </Card>
  );
}
