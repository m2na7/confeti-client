import { init as amplitudeInit } from '@amplitude/analytics-browser';
import {
  addIntegration,
  browserTracingIntegration,
  init as sentryInit,
} from '@sentry/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';

import {
  OverlayProvider,
  ThemeProvider,
  ToastContainer,
} from '@confeti/design-system';
import { rootStyle } from '@confeti/design-system/styles';

import { ENV_CONFIG } from '@shared/constants/config';
import { router } from '@shared/router/router';

import { queryClient } from './shared/utils/query-client';

amplitudeInit(ENV_CONFIG.AMPLITUDE_API_KEY, {
  defaultTracking: false,
});
sentryInit({
  dsn: ENV_CONFIG.SENTRY_DSN,
  tracePropagationTargets: [/^https:\/\/confeti\.co\.kr/],
  tracesSampleRate: 0.1,
  normalizeDepth: 4,
});
addIntegration(browserTracingIntegration());

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className={rootStyle}>
          <OverlayProvider>
            <RouterProvider router={router} />
            <ToastContainer />
          </OverlayProvider>
        </div>
      </ThemeProvider>
      <div style={{ fontSize: '16px' }}>
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}

export default App;

import 'virtual:svg-sprite';
