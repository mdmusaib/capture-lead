import {create} from 'zustand';
import {BusinessDetails,PersonalDetails} from '../types/models';
interface Draft {sessionId?:string;personal:PersonalDetails;business:BusinessDetails;tags:string[];photoUri?:string;audioUri?:string;noteText:string;}
const emptyPersonal:PersonalDetails={firstName:'',lastName:'',phone:'',email:'',jobTitle:'',location:''};
const emptyBusiness:BusinessDetails={companyName:'',website:'',industry:'',address:'',phone:'',email:''};
interface DraftState extends Draft {reset:(sessionId:string)=>void;setPersonal:(v:PersonalDetails)=>void;setBusiness:(v:BusinessDetails)=>void;setTags:(v:string[])=>void;setPhoto:(v?:string)=>void;setAudio:(v?:string)=>void;setNote:(v:string)=>void;}
export const useDraftStore=create<DraftState>(set=>({sessionId:undefined,personal:emptyPersonal,business:emptyBusiness,tags:[],photoUri:undefined,audioUri:undefined,noteText:'',reset:(sessionId)=>set({sessionId,personal:emptyPersonal,business:emptyBusiness,tags:[],photoUri:undefined,audioUri:undefined,noteText:''}),setPersonal:personal=>set({personal}),setBusiness:business=>set({business}),setTags:tags=>set({tags}),setPhoto:photoUri=>set({photoUri}),setAudio:audioUri=>set({audioUri}),setNote:noteText=>set({noteText})}));
