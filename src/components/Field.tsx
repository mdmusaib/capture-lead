import React from 'react';
import {Text, TextInput, StyleSheet, View} from 'react-native';
import {COLORS,RADIUS} from '../constants/theme';
export function Field({label, value, onChangeText, placeholder, multiline=false, keyboardType='default'}:{label:string;value:string;onChangeText:(v:string)=>void;placeholder?:string;multiline?:boolean;keyboardType?:any}){
 return <View style={styles.wrap}><Text style={styles.label}>{label}</Text><TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor={COLORS.muted} keyboardType={keyboardType} multiline={multiline} style={[styles.input,multiline&&styles.multi]} /></View>
}
const styles=StyleSheet.create({wrap:{marginBottom:17},label:{fontSize:17,fontWeight:'600',color:COLORS.muted,marginBottom:8},input:{height:58,borderWidth:1.5,borderColor:COLORS.border,borderRadius:RADIUS,backgroundColor:COLORS.surface,paddingHorizontal:20,fontSize:20,color:COLORS.text},multi:{height:120,textAlignVertical:'top',paddingTop:16}});
