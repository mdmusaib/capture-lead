import {create} from 'zustand';
import {Lead, Session} from '../types/models';
import {getLeads, getSessions, saveLeads, saveSessions} from '../services/local/storage';

interface AppState {
  leads: Lead[];
  sessions: Session[];
  hydrated: boolean;
  hydrate: () => Promise<void>;
  addLead: (lead: Lead) => Promise<void>;
  updateLead: (lead: Lead) => Promise<void>;
  deleteLead: (id: string) => Promise<void>;
  addSession: (session: Session) => Promise<void>;
  updateSession: (session: Session) => Promise<void>;
  deleteAll: () => Promise<void>;
}

export const useAppStore = create<AppState>((set, get) => ({
  leads: [], sessions: [], hydrated: false,
  hydrate: async () => {
    const [leads, sessions] = await Promise.all([getLeads(), getSessions()]);
    set({leads, sessions, hydrated: true});
  },
  addLead: async lead => {
    const leads = [...get().leads, lead]; await saveLeads(leads); set({leads});
  },
  updateLead: async lead => {
    const leads = get().leads.map(x => x.id === lead.id ? lead : x); await saveLeads(leads); set({leads});
  },
  deleteLead: async id => {
    const leads = get().leads.filter(x => x.id !== id); await saveLeads(leads); set({leads});
  },
  addSession: async session => {
    const sessions = [...get().sessions, session]; await saveSessions(sessions); set({sessions});
  },
  updateSession: async session => {
    const sessions = get().sessions.map(x => x.id === session.id ? session : x); await saveSessions(sessions); set({sessions});
  },
  deleteAll: async () => { await saveLeads([]); await saveSessions([]); set({leads: [], sessions: []}); }
}));
