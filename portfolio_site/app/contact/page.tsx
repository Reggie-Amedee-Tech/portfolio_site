"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
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
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const CONTACTS = [
  {
    label: "Email",
    value: "jeantechnical1992@gmail.com",
    action: "Copy",
    href: null as string | null,
  },
  {
    label: "LinkedIn",
    value: "/in/reginaldamedee",
    action: "Open ↗",
    href: "https://linkedin.com/in/reginaldamedee",
  },
  {
    label: "GitHub",
    value: "Reggie-Amedee-Tech",
    sub: "Most production work lives in private repos",
    action: "Open ↗",
    href: "https://github.com/Reggie-Amedee-Tech",
  },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", role: "" });
  const [sent, setSent] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("jeantechnical1992@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main>
      <div className="mx-auto max-w-[1280px] page-x pt-8 pb-16">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-6">
          <span className="text-primary">Contact</span>
          <span>→</span>
          <span>Open Channel</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] mb-6">
              Hiring for full-stack?
              <br />
              Let&apos;s talk.
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              Fastest route is email — I answer within a day. If you&apos;d
              rather just take the résumé and read it later, it&apos;s in the
              top-right on every page.
            </p>

            <div className="space-y-2 mb-8">
              {CONTACTS.map((c) => (
                <Card
                  key={c.label}
                  className="rounded gap-0 py-0 ring-border"
                  size="sm"
                >
                  <CardContent className="px-4 py-3 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-mono text-[9px] uppercase tracking-widest text-foreground/40 mb-0.5">
                        {c.label}
                      </p>
                      <p className="text-sm font-medium text-foreground break-all">
                        {c.value}
                      </p>
                      {"sub" in c && c.sub && (
                        <p className="font-mono text-[9px] text-foreground/40 mt-0.5">
                          {c.sub}
                        </p>
                      )}
                    </div>
                    {c.href ? (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] uppercase tracking-widest text-primary hover:text-foreground/80 transition-colors shrink-0 mt-1"
                      >
                        {c.action}
                      </a>
                    ) : (
                      <Button
                        type="button"
                        variant="link"
                        size="sm"
                        onClick={copyEmail}
                        className="h-auto p-0 font-mono text-[10px] uppercase tracking-widest text-primary"
                      >
                        {copied ? "Copied!" : c.action}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-widest">
              <span className="flex items-center gap-1.5 text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Available Now — Full-Time
              </span>
              <span className="text-foreground/30">·</span>
              <span className="text-foreground/50">New York · UTC-5</span>
              <span className="text-foreground/30">·</span>
              <span className="text-foreground/50">Replies Within 24H</span>
            </div>
          </div>

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
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  setForm({ name: "", email: "", role: "" });
                  setTimeout(() => setSent(false), 3000);
                }}
                className="space-y-4"
              >
                <div className="space-y-1.5">
                  <Label className="font-mono text-[9px] uppercase tracking-widest text-foreground/50">
                    Name
                  </Label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className="rounded bg-muted h-10"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label className="font-mono text-[9px] uppercase tracking-widest text-foreground/50">
                    Email
                  </Label>
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="rounded bg-muted h-10"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label className="font-mono text-[9px] uppercase tracking-widest text-foreground/50">
                    What&apos;s the Role?
                  </Label>
                  <Textarea
                    placeholder="Team, stack, and what you need built."
                    value={form.role}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, role: e.target.value }))
                    }
                    rows={3}
                    className="rounded bg-muted resize-none"
                  />
                </div>

                <Button type="submit" size="cta" className="w-full">
                  {sent ? "Sent — I'll reply within a day" : "Send →"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex-col items-stretch border-t border-border bg-transparent px-4 sm:px-6 py-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-3">
                Or Skip the Form
              </p>
              <p className="text-sm text-muted-foreground">
                The résumé is in the top-right on every page — grab it and read
                it later.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-[1280px] page-x py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-widest text-foreground/40">
            <span>R.J. Amedee</span>
            <span className="text-foreground/20 hidden sm:inline">·</span>
            <span>Software Engineer</span>
            <span className="text-foreground/20 hidden sm:inline">·</span>
            <span>New York</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["TypeScript", "Python", "Next.js", "PostgreSQL", "AWS"].map(
              (t) => (
                <Badge
                  key={t}
                  variant="outline"
                  className="h-auto rounded-[2px] px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-foreground/40"
                >
                  {t}
                </Badge>
              ),
            )}
          </div>
        </div>
      </footer>
    </main>
  );
}
