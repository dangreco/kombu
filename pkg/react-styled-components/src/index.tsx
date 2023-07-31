/* eslint-disable react/prop-types */

/* eslint-disable react/display-name */
import { IStyleSheetManager, StyleSheetManager } from 'styled-components';

import { Middleware } from '@kombu/react';

export type StyledComponentsMiddlewareOptions = Pick<
  IStyleSheetManager,
  'disableCSSOMInjection' | 'enableVendorPrefixes' | 'sheet' | 'stylisPlugins'
>;

export const StyledComponentsMiddleware =
  (options?: StyledComponentsMiddlewareOptions): Middleware =>
  (root: HTMLElement) =>
  ({ children }) => (
    <StyleSheetManager {...options} target={root}>
      {children}
    </StyleSheetManager>
  );
