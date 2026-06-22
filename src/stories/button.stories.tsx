import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { ArrowRight, Loader2, Mail, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "The visual style variant of the button",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon", "icon-sm", "icon-lg"],
      description: "The size of the button",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    asChild: {
      control: false,
      description: "Merge props onto child element using Radix Slot",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Variant Stories ---

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
};

export const Destructive: Story = {
  args: {
    children: "Delete",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
  },
};

// --- Size Stories ---

export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    "aria-label": "Send email",
  },
  render: (args) => (
    <Button {...args}>
      <Mail />
    </Button>
  ),
};

// --- State Stories ---

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <ArrowRight />
      Next
    </Button>
  ),
};

export const DestructiveWithIcon: Story = {
  args: {
    variant: "destructive",
  },
  render: (args) => (
    <Button {...args}>
      <Trash2 />
      Delete Account
    </Button>
  ),
};

export const Loading: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <Button {...args}>
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
  ),
};

export const AsChild: Story = {
  args: {
    asChild: true,
    variant: "link",
  },
  render: (args) => (
    <Button {...args}>
      <a href="https://example.com">Go to Example</a>
    </Button>
  ),
};
