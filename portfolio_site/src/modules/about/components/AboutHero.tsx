import { buttonVariants, H1, P } from "@/components/ui";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function AboutHero() {
  return (
    <div>
      <H1 className="mb-6 sm:mb-8">
        I came to engineering
        <br />
        through the business side,
        <br />
        and it shows.
      </H1>

      <div className="space-y-5 mb-10 max-w-lg">
        <P>
          For three years at Vimeo I sat with enterprise customers and worked
          out what they actually needed — then watched the gap between that and
          what got built. I learned to read a requirement, and I got tired of
          handing it off.
        </P>
        <P>
          So I learned to build. Two years in, I&apos;ve shipped a
          multi-provider SIP layer that unlocked six figures of revenue, data
          models that hold up across a dozen client use cases, and front ends
          that moved sign-up rates by a third. The habit from account management
          stuck: I ask what the number is before I write the ticket.
        </P>
        <P>
          Right now I&apos;m apprenticing at 718 Digital Labs, the product team
          inside The Knowledge House, building real internal tools. I&apos;m
          looking for a full-stack role where requirements are messy and someone
          has to own both halves of the problem.
        </P>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/record"
          className={cn(
            buttonVariants({ variant: "outline", size: "cta" }),
            "w-full sm:w-auto text-center",
          )}
        >
          See the Record →
        </Link>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ size: "cta" }),
            "w-full sm:w-auto text-center",
          )}
        >
          Email Me →
        </Link>
      </div>
    </div>
  );
}
