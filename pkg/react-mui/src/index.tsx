/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react/prop-types */

/* eslint-disable react/display-name */
import { Theme, ThemeProvider } from '@mui/material';

import { Middleware } from '@kombu/react';

export interface MuiMiddlewareOptions {
  theme?: Theme;
}

export const MuiMiddleware =
  (options?: MuiMiddlewareOptions): Middleware =>
  (_root: HTMLElement) =>
  ({ children }) =>
    options?.theme ? <ThemeProvider theme={options.theme}>{children}</ThemeProvider> : children;
