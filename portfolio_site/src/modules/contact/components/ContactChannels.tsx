"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { P, Small } from "@/components/ui/typography";
import { CONTACT_EMAIL, CONTACTS, COPY_EMAIL_TIMEOUT_MS } from "../constants";

export function ContactChannels() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), COPY_EMAIL_TIMEOUT_MS);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="space-y-2 mb-8">
      {CONTACTS.map((c) => (
        <Card
          key={c.label}
          className="rounded gap-0 py-0 ring-border"
          size="sm"
        >
          <CardContent className="px-4 py-3 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <Small className="text-foreground/40 mb-0.5 block text-[9px]">
                {c.label}
              </Small>
              <P className="text-sm font-medium text-foreground break-all">
                {c.value}
              </P>
              {c.sub && (
                <Small className="text-foreground/40 mt-0.5 block text-[9px] normal-case tracking-normal">
                  {c.sub}
                </Small>
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
  );
}
