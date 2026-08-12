import { H1, H2, H3, H4, Lead, Muted, P, Small } from "@/components/ui";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "UI/Typography",
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Scale: Story = {
  render: () => (
    <div className="flex max-w-xl flex-col gap-4 text-left">
      <H1>Heading one</H1>
      <H2>Heading two</H2>
      <H3>Heading three</H3>
      <H4>Heading four</H4>
      <Lead>Lead copy for page intros and supporting statements.</Lead>
      <P>Body paragraph for longer reading text on the page.</P>
      <Small>Small mono label</Small>
      <Muted>Muted supporting line</Muted>
    </div>
  ),
};

export const Headings: Story = {
  render: () => (
    <div className="flex flex-col gap-3 text-left">
      <H1>I ship features that move revenue.</H1>
      <H2>Selected Work</H2>
      <H3>Goodcall Technology</H3>
      <H4>The Knowledge House</H4>
    </div>
  ),
};

export const Body: Story = {
  render: () => (
    <div className="flex max-w-md flex-col gap-3 text-left">
      <Lead>
        TypeScript, Python, Next.js. Full-stack engineer shipping features that
        move revenue.
      </Lead>
      <P>
        Fastest route is email — I answer within a day. If you&apos;d rather
        just take the résumé and read it later, it&apos;s in the top-right.
      </P>
      <Muted>Currently apprenticing at 718 Digital Labs.</Muted>
      <Small>Available Now — Full-Time</Small>
    </div>
  ),
};
