import { HomeAssistant, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';
import type { createStore } from 'jotai/vanilla';

export type Store = ReturnType<typeof createStore>;

export type Config<T extends Record<string, unknown> = Record<string, never>> = LovelaceCardConfig &
  T;

export interface RegisterCardParams {
  type: string;
  name: string;
  description?: string;
  preview?: boolean;
  documentationURL?: string;
}

export interface CardOptions<C extends LovelaceCardConfig = LovelaceCardConfig> {
  card: RegisterCardParams;
  getConfigElement?(): Promise<LovelaceCardEditor>;
  getStubConfig?(hass: HomeAssistant): Promise<C>;
}

export interface EditorOptions {
  name: string;
}

export type CardEditor = Pick<CardOptions, 'getConfigElement'>;

export type MountFn = (root: HTMLElement, store: Store) => void;
