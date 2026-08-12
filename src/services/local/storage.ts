import AsyncStorage from '@react-native-async-storage/async-storage';
import {Lead, Session} from '../../types/models';

const LEADS_KEY = '@lead_capture/leads';
const SESSIONS_KEY = '@lead_capture/sessions';
const SETTINGS_KEY = '@lead_capture/settings';

export async function getLeads(): Promise<Lead[]> {
  const raw = await AsyncStorage.getItem(LEADS_KEY);
  return raw ? JSON.parse(raw) : [];
}
export async function saveLeads(leads: Lead[]) {
  await AsyncStorage.setItem(LEADS_KEY, JSON.stringify(leads));
}
export async function getSessions(): Promise<Session[]> {
  const raw = await AsyncStorage.getItem(SESSIONS_KEY);
  return raw ? JSON.parse(raw) : [];
}
export async function saveSessions(sessions: Session[]) {
  await AsyncStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
}
export async function getSettings(): Promise<Record<string, string>> {
  const raw = await AsyncStorage.getItem(SETTINGS_KEY);
  return raw ? JSON.parse(raw) : {repName: 'Rep', audioRetention: '30d'};
}
export async function saveSettings(settings: Record<string, string>) {
  await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}
