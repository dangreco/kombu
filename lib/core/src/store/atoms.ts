import { atom } from 'jotai';
import { HomeAssistant, LovelaceCardConfig } from 'custom-card-helpers';

export const hass = atom<HomeAssistant | undefined>(undefined);
export const config = atom<LovelaceCardConfig | undefined>(undefined);
