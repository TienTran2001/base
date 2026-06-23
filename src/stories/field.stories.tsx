import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "../components/ui/field";

const meta = {
  title: "UI/Field",
  component: Field,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: 400 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <FieldContent>
        <Input id="email" type="email" placeholder="m@example.com" />
      </FieldContent>
    </Field>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <FieldContent>
        <Input id="username" placeholder="johndoe" />
        <FieldDescription>
          This is your public display name.
        </FieldDescription>
      </FieldContent>
    </Field>
  ),
};

export const WithError: Story = {
  render: () => (
    <Field data-invalid={true}>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <FieldContent>
        <Input id="username" defaultValue="admin" aria-invalid="true" />
        <FieldDescription>
          This is your public display name.
        </FieldDescription>
        <FieldError errors={[{ message: "Username 'admin' is already taken." }]} />
      </FieldContent>
    </Field>
  ),
};

export const HorizontalOrientation: Story = {
  render: () => (
    <Field orientation="horizontal">
      <FieldLabel htmlFor="notifications">Receive Notifications</FieldLabel>
      <FieldContent>
        <input type="checkbox" id="notifications" className="h-4 w-4" />
      </FieldContent>
    </Field>
  ),
};

export const FieldGroupExample: Story = {
  render: () => (
    <FieldSet>
      <FieldLegend>Account Settings</FieldLegend>
      <FieldDescription>Manage your account preferences below.</FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="first-name">First Name</FieldLabel>
          <FieldContent>
            <Input id="first-name" placeholder="John" />
          </FieldContent>
        </Field>
        <Field>
          <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
          <FieldContent>
            <Input id="last-name" placeholder="Doe" />
          </FieldContent>
        </Field>
        
        <FieldSeparator>or</FieldSeparator>
        
        <Field>
          <FieldLabel htmlFor="company">Company</FieldLabel>
          <FieldContent>
            <Input id="company" placeholder="Acme Corp" />
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};
