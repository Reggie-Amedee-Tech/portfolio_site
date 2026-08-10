"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { P } from "@/components/ui/typography";
import { submitContactForm } from "../services";
import { contactFormSchema, type ContactFormValues } from "../validations";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(contactFormSchema),
    defaultValues: { name: "", email: "", role: "" },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      await submitContactForm(values);
      toast.success("Sent — I'll reply within a day.");
      reset();
    } catch {
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
          <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/40 shrink-0">
            Optional
          </span>
        </div>
        <CardDescription className="font-mono text-[10px] text-foreground/40">
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
          <div className="space-y-1.5">
            <Label className="font-mono text-[9px] uppercase tracking-widest text-foreground/50">
              Name
            </Label>
            <Input
              type="text"
              placeholder="Your name"
              className="rounded bg-muted h-10"
              aria-invalid={!!errors.name}
              {...register("name")}
            />
            {errors.name && (
              <P className="text-xs text-destructive">{errors.name.message}</P>
            )}
          </div>

          <div className="space-y-1.5">
            <Label className="font-mono text-[9px] uppercase tracking-widest text-foreground/50">
              Email
            </Label>
            <Input
              type="email"
              placeholder="you@company.com"
              className="rounded bg-muted h-10"
              aria-invalid={!!errors.email}
              {...register("email")}
            />
            {errors.email && (
              <P className="text-xs text-destructive">{errors.email.message}</P>
            )}
          </div>

          <div className="space-y-1.5">
            <Label className="font-mono text-[9px] uppercase tracking-widest text-foreground/50">
              What&apos;s the Role?
            </Label>
            <Textarea
              placeholder="Team, stack, and what you need built."
              rows={3}
              className="rounded bg-muted resize-none"
              aria-invalid={!!errors.role}
              {...register("role")}
            />
            {errors.role && (
              <P className="text-xs text-destructive">{errors.role.message}</P>
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
        <P className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-3">
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
