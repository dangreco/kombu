/* eslint-disable react/prop-types */

/* eslint-disable react/display-name */
import { StyleSheetManager } from 'styled-components';

import { Middleware } from '@kombu/react';

export const StyledComponentsMiddleware: Middleware =
  (root: HTMLElement) =>
  ({ children }) => <StyleSheetManager target={root}>{children}</StyleSheetManager>;
