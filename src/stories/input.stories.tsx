import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldContent, FieldDescription } from "@/components/ui/field";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "file"],
      description: "Type of the input field",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Email address",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    type: "text",
    placeholder: "Email address",
  },
};

export const File: Story = {
  args: {
    type: "file",
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <Field>
      <FieldLabel htmlFor="email2">Email</FieldLabel>
      <FieldContent>
        <Input id="email2" type="email" placeholder="Email" {...args} />
      </FieldContent>
    </Field>
  ),
};

export const WithText: Story = {
  render: (args) => (
    <Field>
      <FieldLabel htmlFor="email3">Email</FieldLabel>
      <FieldContent>
        <Input id="email3" type="email" placeholder="Email" {...args} />
        <FieldDescription>
          Enter your email address.
        </FieldDescription>
      </FieldContent>
    </Field>
  ),
};

export const WithButton: Story = {
  render: (args) => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" {...args} />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
};

export const FormError: Story = {
  render: (args) => (
    <Field data-invalid={true}>
      <FieldLabel htmlFor="email4">Email</FieldLabel>
      <FieldContent>
        <Input 
          id="email4" 
          type="email" 
          placeholder="Email" 
          defaultValue="invalid-email" 
          aria-invalid="true" 
          {...args} 
        />
      </FieldContent>
    </Field>
  ),
};
