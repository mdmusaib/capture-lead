import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAppStore} from '../store/useAppStore';
import LeadListScreen from '../screens/LeadListScreen';
import ConsentScreen from '../screens/ConsentScreen';
import ActiveSessionScreen from '../screens/ActiveSessionScreen';
import ContactFormScreen from '../screens/ContactFormScreen';
import BusinessDetailsScreen from '../screens/BusinessDetailsScreen';
import NoteScreen from '../screens/NoteScreen';
import LeadProfileScreen from '../screens/LeadProfileScreen';
import DuplicateCheckScreen from '../screens/DuplicateCheckScreen';
import FairSummaryScreen from '../screens/FairSummaryScreen';
import SettingsPrivacyScreen from '../screens/SettingsPrivacyScreen';

export type RootStackParamList = {
  Leads: undefined; Consent: {sessionId: string}; ActiveSession: {sessionId: string}; ContactForm: {sessionId: string};
  BusinessDetails: {sessionId: string}; Note: {sessionId: string}; LeadProfile: {leadId: string}; DuplicateCheck: {leadId: string};
  Summary: undefined; Settings: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const hydrate = useAppStore(s => s.hydrate);
  useEffect(() => { hydrate(); }, [hydrate]);
  return <Stack.Navigator screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
    <Stack.Screen name="Leads" component={LeadListScreen}/>
    <Stack.Screen name="Consent" component={ConsentScreen}/>
    <Stack.Screen name="ActiveSession" component={ActiveSessionScreen}/>
    <Stack.Screen name="ContactForm" component={ContactFormScreen}/>
    <Stack.Screen name="BusinessDetails" component={BusinessDetailsScreen}/>
    <Stack.Screen name="Note" component={NoteScreen}/>
    <Stack.Screen name="LeadProfile" component={LeadProfileScreen}/>
    <Stack.Screen name="DuplicateCheck" component={DuplicateCheckScreen}/>
    <Stack.Screen name="Summary" component={FairSummaryScreen}/>
    <Stack.Screen name="Settings" component={SettingsPrivacyScreen}/>
  </Stack.Navigator>;
}
