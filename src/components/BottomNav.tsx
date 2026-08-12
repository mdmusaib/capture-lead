import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/theme';

export function BottomNav({active, onLeads, onSummary, onSettings}: {active: 'Leads'|'Summary'|'Settings'; onLeads:()=>void; onSummary:()=>void; onSettings:()=>void}) {
  const item = (key: typeof active, icon: string, label: string, onPress:()=>void) => <Pressable style={styles.item} onPress={onPress}><Text style={[styles.icon, active===key && styles.active]}>{icon}</Text><Text style={[styles.label, active===key && styles.active]}>{label}</Text></Pressable>;
  return <View style={styles.bar}>{item('Leads','♙','Leads',onLeads)}{item('Summary','▥','Summary',onSummary)}{item('Settings','⚙','Settings',onSettings)}</View>;
}
const styles=StyleSheet.create({bar:{height:82,borderTopWidth:1,borderTopColor:COLORS.border,backgroundColor:COLORS.background,flexDirection:'row',justifyContent:'space-around',alignItems:'center'},item:{alignItems:'center',width:100},icon:{fontSize:28,color:COLORS.muted},label:{fontSize:14,fontWeight:'600',color:COLORS.muted,marginTop:2},active:{color:COLORS.accent}});
