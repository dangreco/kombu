/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import type { FunctionComponent, PropsWithChildren } from 'react';
import styled, { StyleSheetManager } from 'styled-components';

export const StyledComponentsMiddleware =
  (root: HTMLElement): FunctionComponent<PropsWithChildren> =>
  ({ children }) => <StyleSheetManager target={root}>{children}</StyleSheetManager>;

export { styled };
