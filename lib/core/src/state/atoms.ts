import { atom } from 'jotai/vanilla';
import { CurrentUser, HomeAssistant, LovelaceCardConfig } from 'custom-card-helpers';
import { HassEntities } from 'home-assistant-js-websocket';

/* Base Atoms */
export const hass = atom<HomeAssistant | undefined>(undefined);
export const config = atom<LovelaceCardConfig | undefined>(undefined);

/* Select Atoms */
export const states = atom<HassEntities | undefined>(($) => $(hass)?.states);
export const user = atom<CurrentUser | undefined>(($) => $(hass)?.user);
export const api = atom<Pick<HomeAssistant, 'callApi' | 'callService' | 'callWS'> | undefined>(
  ($) => {
    const h = $(hass);
    return h ? { callApi: h.callApi, callService: h.callService, callWS: h.callWS } : undefined;
  },
);
