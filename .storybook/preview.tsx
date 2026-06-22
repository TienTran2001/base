import type { Preview } from '@storybook/nextjs-vite';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../messages/vi.json';
import '../src/app/globals.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="vi" messages={messages}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
  },
};

export default preview;