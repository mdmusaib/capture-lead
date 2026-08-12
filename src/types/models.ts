export type SyncStatus = 'local_only' | 'pending' | 'synced' | 'failed';
export type SessionStatus = 'active' | 'completed' | 'cancelled';

export interface PersonalDetails {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  jobTitle: string;
  location: string;
}
export interface BusinessDetails {
  companyName: string;
  website: string;
  industry: string;
  address: string;
  phone: string;
  email: string;
}
export interface Session {
  id: string;
  startedAt: string;
  endedAt?: string;
  consentAudio: boolean;
  consentRecordedAt?: string;
  status: SessionStatus;
}
export interface Lead {
  id: string;
  personal: PersonalDetails;
  business: BusinessDetails;
  tags: string[];
  photoUri?: string;
  audioUri?: string;
  noteText: string;
  sourceSessionId: string;
  createdAt: string;
  updatedAt: string;
  syncStatus: SyncStatus;
  sessionDuration?: number;
}
