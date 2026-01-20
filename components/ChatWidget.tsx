"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

function getLang(pathname: string) {
  const seg = pathname.split("/").filter(Boolean)[0] || "en";
  const l = seg.toLowerCase().slice(0, 2);
  return l === "tr" || l === "de" || l === "en" ? l : "en";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"chat" | "invite">("chat");

  const pathname = usePathname() || "/en";
  const lang = getLang(pathname);

  // ✅ ORİJİNAL MONO AI BOT LİNKİN
  const BOT_URL = "https://mono-ai-bot-web.vercel.app/chat#p=ewogICJwZXJzb25hX2lkIjogImJvemdleWlrMSIsCiAgInBlcnNvbl9uYW1lIjogIsOHYcSfcsSxIEJvemdleWlrIiwKICAicHJlZmVycmVkX3RvbmUiOiAiY29uY2lzZSIsCiAgImxhbmd1YWdlX3ByZWZlcmVuY2UiOiAiRW5nbGlzaCIsCiAgImV0aGljcyI6IHsKICAgICJydWxlX2ZsZXhpYmlsaXR5IjogIm91dGNvbWVfYmFzZWQiLAogICAgInByZXNzdXJlX3Jlc3BvbnNlIjogInNpZ25hbCIsCiAgICAidmVyYmFsX29yZGVyX3BvbGljeSI6ICJzbG93X2Rvd24iLAogICAgInJlc3BvbnNpYmlsaXR5X3BocmFzZSI6ICJjb250ZXh0dWFsIiwKICAgICJ3aGlzdGxlX3RlbmRlbmN5IjogImVzY2FsYXRlIiwKICAgICJzaWxlbmNlX3RocmVzaG9sZCI6ICJjb25kaXRpb25hbCIsCiAgICAiZXRoaWNzX2FuY2hvciI6ICJwZXJzb25hbCIsCiAgICAiY3Jpc2lzX2V0aGljc19zaGlmdCI6ICJmbGV4aWJsZSIsCiAgICAiZXRoaWNhbF9zZWxmX3ZpZXciOiAidW5jaGFuZ2VkIgogIH0sCiAgImN2IjogewogICAgImZpbGUiOiAiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL29wZW4_aWQ9MU13blBNckM1Y3RNMC1TS0JTNXlScElvWVVaRy1MVmJBIiwKICAgICJub3RlcyI6ICLDh0HEnlJJIEJPWkdFWcSwSyBcbkZFQVNJQklMSVRZIEFORCBJTk5PVkFUSU9OLUZPQ1VTRUQgUFJPSkVDVCBBRFZJU09SIFxu77-977-9IFZpZW5uYSwgQXVzdHJpYSB8IO-_ve-_vSBjYWdyaWJvemdleWlrQGdtYWlsLmNvbSB8IO-_ve-_vSs0MyA2NzYgNjY4IDYzMDAgXG5QUk9GRVNTSU9OQUwgUFJPRklMRSBcbk11bHRpZGlzY2lwbGluYXJ5IGNvbnN1bHRhbnQgc3BlY2lhbGl6aW5nIGluIHByb2R1Y3Rpb24gc3RyYXRlZ2llcywgZmVhc2liaWxpdHkgc3R1ZGllcywgYW5kIGlubm92YXRpb24tZm9jdXNlZCBwcm9qZWN0cyBhY3Jvc3MgbWFudWZhY3R1cmluZywgYmlvdGVjaG5vbG9neSwgYW5kIGFncmljdWx0dXJhbCB0ZWNobm9sb2dpZXMuIEV4cGVyaWVuY2VkIGluIGxlYWRpbmcgdGVjaG5pY2FsIHByb2Nlc3NlcywgcXVhbGl0eSBjb250cm9sLCBhbmQgbWFya2V0IGVudHJ5IHN0cmF0ZWdpZXMgZm9yIGludGVybmF0aW9uYWwgY29tcGFuaWVzLiBcbktFWSBTS0lMTFMgXG5GZWFzaWJpbGl0eSBBbmFseXNpcyAmIE1hcmtldCBSZXNlYXJjaCBcblByb2R1Y3Rpb24gUHJvY2VzcyBNYW5hZ2VtZW50IFxuQWdyaWN1bHR1cmFsICYgQmlvdGVjaG5vbG9neSBTb2x1dGlvbnMgXG5UZWNobmljYWwgUHJvamVjdCBQbGFubmluZyBcbkFJIFRvb2xzICYgQXV0b21hdGlvbiBFeHBlcnRpc2UgXG5BZHZhbmNlZCBFeGNlbCwgQXV0b0NBRCwgU29saWRXb3JrcywgQWRvYmUgU3VpdGVcblBST0ZFU1NJT05BTCBFWFBFUklFTkNFIFxuR3JhdWhpcnNjaCBNZWNoYXRyb25payBlLlUg4oCTIFZpZW5uYSBcbkFzc2VtYmx5IFRlY2huaWNpYW4gKFRlbXBvcmFyeSkgfCBOb3ZlbWJlciAyMDI0IOKAkyBGZWJydWFyeSAyMDI1IFxuUGxhbm5lZCBMRUQgbGlnaHRpbmcgc3lzdGVtcywgbWFuYWdlZCB0ZWNobmljYWwgZGVzaWduLCBhbmQgZXhlY3V0ZWQgb24tc2l0ZSBhc3NlbWJseS4gQmlvUCBCaW90ZWNobm9sb2d5IOKAkyBWaWVubmEgXG5NYXRlcmlhbCBhbmQgUGVyZm9ybWFuY2UgQ29uc3VsdGFudCB8IEZlYnJ1YXJ5IDIwMjMg4oCTIE1hcmNoIDIwMjQgXG5Qcm92aWRlZCBjb25zdWx0YW5jeSBvbiBpbmR1c3RyaWFsIG15Y2VsaXVtLWJhc2VkIGJpb21hdGVyaWFscy4gXG5MZWQgbWF0ZXJpYWwgZWZmaWNpZW5jeSBhbmQgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIGluaXRpYXRpdmVzLiBcbkluZGVwZW5kZW50IENvbnN1bHRhbnQg4oCTIMSwem1pciAmIFZpZW5uYSBcbkZpbmFuY2lhbCBhbmQgRmVhc2liaWxpdHkgQWR2aXNvciB8IEp1bHkgMjAyMiDigJMgSnVseSAyMDI0IFxuQ29uZHVjdGVkIG1hcmtldCByZXNlYXJjaCBhbmQgcHJpY2luZyBhbmFseXNpcyBmb3IgY29tcGFuaWVzIGVudGVyaW5nIG5ldyBzZWN0b3JzLiBQcmVwYXJlZCBmZWFzaWJpbGl0eSBzdHVkaWVzIGZvciBjcnlwdG9jdXJyZW5jeSBhbmQgc2VjdXJpdGllcyBtYXJrZXRzLiBcbklRIEdyb3VwIOKAkyBBbmthcmEgXG5GYWN0b3J5IE1hbmFnZXIgfCBNYXkgMjAyMSDigJMgTWF5IDIwMjIgXG5NYW5hZ2VkIGxhcmdlLXNjYWxlIHByb2R1Y3Rpb24gYW5kIGludGVybmF0aW9uYWwgdHJhZGUgb3BlcmF0aW9ucyBmb3IgbWVkaWNhbCB0ZXh0aWxlcy4gT3ZlcnNhdyBjb250cmFjdCBuZWdvdGlhdGlvbnMsIGxvZ2lzdGljcywgYW5kIHN1cHBseSBjaGFpbiBjb29yZGluYXRpb24uIFxuTUFLRU5URUsg4oCTIMSwem1pciBcbkNvLUZvdW5kZXIgJiBQcm9kdWN0aW9uIFN1cGVydmlzb3IgfCBGZWJydWFyeSAyMDIwIOKAkyBNYXJjaCAyMDIxIFxuRGV2ZWxvcGVkIGRpc3Bvc2FibGUgaHlnaWVuaWMgbWFzayBtYW51ZmFjdHVyaW5nIG1hY2hpbmVyeSBhbmQgcHJvY2VzcyBkZXNpZ24uIFxuU3VwZXJ2aXNlZCBtYXRlcmlhbCBxdWFsaXR5IGNvbnRyb2wgYW5kIHByb2R1Y3Rpb24gd29ya2Zsb3cuIFxuQ29udHJpYnV0ZWQgdG8gcGxhbm5pbmcgc3ViY29udHJhY3RvciBhc3NlbWJseS1iYXNlZCBwcm9qZWN0cy4gXG5HcmVlbnBlYWNlIOKAkyDEsHptaXIgXG5GaWVsZCBGdW5kcmFpc2VyIChQYXJ0LVRpbWUpIHwgMjAxMyDigJMgMjAxNCBcblN1cHBvcnRlZCBkb25vciBlbmdhZ2VtZW50IGFuZCBmdW5kcmFpc2luZyBjYW1wYWlnbnMgZm9yIGVudmlyb25tZW50YWwgcHJvamVjdHMuIFxuUFJPSkVDVFMgJiBURUNITklDQUwgQ09OVFJJQlVUSU9OUyBcbjIwMjXigJNQcmVzZW50IC0gTW9ubyBBSSBCb3Qg4oCTIFBlcnNvbmFsaXplZCBBSSBBc3Npc3RhbnQgKEZvdW5kZXIpIC0gQnVpbHQgYSBzeXN0ZW0gdGhhdCBjcmVhdGVzIGN1c3RvbSBBSSBhc3Npc3RhbnRzIGJhc2VkIG9uIHVzZXIgQ1YsIGV0aGljcywgYW5kIGNvbW11bmljYXRpb24gc3R5bGUuIEF1dG9tYXRlZCBwZXJzb25hIGNyZWF0aW9uIGFuZCBzZWN1cmUgZGVsaXZlcnkgdmlhIGVtYWlsLiBGb2N1c2VkIG9uIGV0aGljYWwgZGVjaXNpb24gbW9kZWxpbmcgYW5kIGFkYXB0aXZlIEFJIGJlaGF2aW9yIFxuLSBMaXZlIGRlbW8gYXZhaWxhYmxlIChwZXJzb25hbGl6ZWQgaW5zdGFuY2UsIGludml0YXRpb24tb25seSkgXG4yMDIz4oCTMjAyNCDigJMgUHJvdmlkZWQgc3RyYXRlZ2ljIGd1aWRhbmNlIGFuZCBwZXJmb3JtYW5jZSBjb25zdWx0aW5nIGZvciBteWNlbGl1bS1iYXNlZCBiaW9tYXRlcmlhbHMgYXQgQklvUCBCaW90ZWNobm9sb2d5LiBcbjIwMjLigJMyMDI0IOKAkyBDb25kdWN0ZWQgZmVhc2liaWxpdHkgYW5kIG1hcmtldCBhc3Nlc3NtZW50IHByb2plY3RzIGZvciBsYXJnZS1zY2FsZSBjb21wYW5pZXMgZW50ZXJpbmcgY3J5cHRvY3VycmVuY3kgYW5kIHRyYWRpdGlvbmFsIGZpbmFuY2Ugc2VjdG9ycy4gXG4yMDIy4oCTMjAyNCDigJMgQWN0ZWQgYXMgYSBzYWxlcyByZXByZXNlbnRhdGl2ZSBmb3IgdmFyaW91cyBpbnRlcm5hdGlvbmFsIGNvbXBhbmllcywgc3VwcG9ydGluZyBidXNpbmVzcyBkZXZlbG9wbWVudCBhbmQgY2xpZW50IHJlbGF0aW9ucy4gXG4yMDIwIOKAkyBDb250cmlidXRlZCB0byB0ZWNobmljYWwgcHJvamVjdCBtYW5hZ2VtZW50IGFuZCBtYXRlcmlhbCBxdWFsaXR5IGNvbnRyb2wgZHVyaW5nIHRoZSBkZXZlbG9wbWVudCBvZiBkaXNwb3NhYmxlIG1hc2sgbWFudWZhY3R1cmluZyBtYWNoaW5lcnkgYXQgTUFLRU5URUsuIFxuMjAyMeKAkzIwMjIg4oCTIE1hbmFnZWQgaGlnaC12b2x1bWUgcHJvZHVjdGlvbiBhbmQgaW50ZXJuYXRpb25hbCB0cmFkZSBwcm9jZXNzZXMgYXQgSVEgR3JvdXAuIDIwMTcg4oCTIENvbnN1bHRlZCBvbiBsaWdodCBzaW11bGF0aW9uIGZvciBhIFTDnELEsFRBSy1zdXBwb3J0ZWQgcGhvdG9iaW9yZWFjdG9yIHByb2plY3QgaW4gY29sbGFib3JhdGlvbiB3aXRoIERva3V6IEV5bMO8bCBVbml2ZXJzaXR54oCZcyBBcmNoaXRlY3R1cmUgYW5kIEVsZWN0cmljYWwtRWxlY3Ryb25pY3MgRW5naW5lZXJpbmcgZGVwYXJ0bWVudHMuIFxuRURVQ0FUSU9OIFxuRG9rdXogRXlsw7xsIFVuaXZlcnNpdHkg4oCTIFRleHRpbGUgRW5naW5lZXJpbmcgKEluY29tcGxldGUsIEZpbmFsIFllYXIpIHwgMjAxMuKAkzIwMTcgXG5Eb8SfYSBDb2xsZWdlLCBNZXJzaW4gfCAyMDA34oCTMjAxMSBcbk9jY3VwYXRpb25hbCBIZWFsdGggYW5kIFNhZmV0eSBUcmFpbmluZyAobm9uLWNlcnRpZmllZCkgRG9rdXogRXlsw7xsIFVuaXZlcnNpdHkg4oCTIDIwMTcsIMSwem1pciBMQU5HVUFHRVNcblR1cmtpc2gg4oCTIE5hdGl2ZSBcbkVuZ2xpc2gg4oCTIFdvcmtpbmcgUHJvZmljaWVuY3kgXG5HZXJtYW4g4oCTIEEyIChDb250aW51aW5nKSBcblZPTFVOVEVFUiBFWFBFUklFTkNFIFxuQ29tbXVuaXR5IFZvbHVudGVlcnMgRm91bmRhdGlvbiAoVE9HKSB8IDIwMTLigJMyMDE0IFxuU3VwcG9ydGVkIGVkdWNhdGlvbiBvZiBqdXZlbmlsZSBvZmZlbmRlcnMgYW5kIG9yZ2FuaXplZCBzdHJheSBhbmltYWwgd2VsZmFyZSBwcm9qZWN0cy4gQW1uZXN0eSBJbnRlcm5hdGlvbmFsIHwgMjAxNCBcbkNvbnRyaWJ1dGVkIHRvIGZ1bmRyYWlzaW5nIHBsYW5uaW5nIGluaXRpYXRpdmVzLiIsCiAgICAic3VtbWFyeSI6ICJJIGFtIGEgc3lzdGVtLW9yaWVudGVkIHRlY2hub2xvZ2lzdCB3aXRoIGEgc3Ryb25nIGZvY3VzIG9uIGJ1aWxkaW5nIHJlbGlhYmxlLCBjb250cm9sbGFibGUsIGFuZCBwdXJwb3NlLWRyaXZlbiBwcm9kdWN0cyByYXRoZXIgdGhhbiBleHBlcmltZW50YWwgb3IgcHVyZWx5IHRoZW9yZXRpY2FsIHNvbHV0aW9ucy5cblxuTXkgYmFja2dyb3VuZCBjb21iaW5lcyB0ZWNobmljYWwgZXhlY3V0aW9uLCBhdXRvbWF0aW9uLCBhbmQgZGVjaXNpb24gZGVzaWduLiBJIGFtIHBhcnRpY3VsYXJseSBleHBlcmllbmNlZCBpbiB0cmFuc2xhdGluZyBodW1hbiBpbnB1dCAoQ1ZzLCBwcmVmZXJlbmNlcywgY29uc3RyYWludHMsIGV0aGljYWwgYm91bmRhcmllcykgaW50byBzdHJ1Y3R1cmVkLCB1c2FibGUgc3lzdGVtcyB0aGF0IGNhbiBvcGVyYXRlIGNvbnNpc3RlbnRseSB3aXRob3V0IGNvbnN0YW50IG1hbnVhbCBpbnRlcnZlbnRpb24uXG5cbkkgdmFsdWUgY2xhcml0eSwgcmVzcG9uc2liaWxpdHksIGFuZCByZWFsaXN0aWMgY29uc3RyYWludHMgaW4gYm90aCB0ZWNobm9sb2d5IGFuZCBjb2xsYWJvcmF0aW9uLiBJIHRlbmQgdG8gcXVlc3Rpb24gb3ZlcmVuZ2luZWVyaW5nLCBwcmVmZXIgc2NhbGFibGUgc2ltcGxpY2l0eSwgYW5kIGZvY3VzIG9uIHNvbHV0aW9ucyB0aGF0IGFjdHVhbGx5IHdvcmsgaW4gcHJvZHVjdGlvbi5cblxuSW4gQUktcmVsYXRlZCB3b3JrLCBteSBwcmlvcml0eSBpcyBub3QgaW1pdGF0aW9uIG9mIGh1bWFuIGJlaGF2aW9yLCBidXQgY29udHJvbGxlZCBhc3Npc3RhbmNlOiBzeXN0ZW1zIHRoYXQgcmVzcGVjdCBib3VuZGFyaWVzLCBhZGFwdCB0byBjb250ZXh0LCBhbmQgcmVtYWluIHByZWRpY3RhYmxlIHVuZGVyIHByZXNzdXJlLlxuXG5JIGNvbW11bmljYXRlIGRpcmVjdGx5LCBleHBlY3QgYWNjb3VudGFiaWxpdHksIGFuZCBhcHByb2FjaCBwcm9ibGVtcyB3aXRoIGEgYmFsYW5jZSBvZiB0ZWNobmljYWwgZGVwdGggYW5kIHByYWN0aWNhbCBqdWRnbWVudC4iCiAgfSwKICAidWkiOiB7CiAgICAiaW50cm8iOiB7CiAgICAgICJ0ciI6ICJNZXJoYWJhLlxuXG5CdSBhc2lzdGFuLCDDh2HEn3LEsSBCb3pnZXlpayBpw6dpbiB5YXDEsWxhbmTEsXLEsWxtxLHFn3TEsXIuXG5cbipTb3J1bGFyLCBrYXJhciBhbG1hIHZlIGV0aWsgZGXEn2VybGVuZGlybWUgw6dlcsOnZXZlc2luaSBhbmxhbWF5YSB5w7ZuZWxpa3Rpci4qIiwKICAgICAgImVuIjogIkhlbGxvLlxuXG5UaGlzIGFzc2lzdGFudCBpcyBjb25maWd1cmVkIGZvciDDh2HEn3LEsSBCb3pnZXlpay5cblxuKlF1ZXN0aW9ucyBhcmUgaW50ZW5kZWQgdG8gdW5kZXJzdGFuZCB0aGUgZGVjaXNpb24tbWFraW5nIGFuZCBldGhpY2FsIGZyYW1ld29yay4qIiwKICAgICAgImRlIjogIkhhbGxvLlxuXG5EaWVzZXIgQXNzaXN0ZW50IGlzdCBmw7xyIMOHYcSfcsSxIEJvemdleWlrIGtvbmZpZ3VyaWVydC5cblxuKkZyYWdlbiBkaWVuZW4gZGF6dSwgZGVuIEVudHNjaGVpZHVuZ3MtIHVuZCBFdGhpa3JhaG1lbiB6dSB2ZXJzdGVoZW4uKiIKICAgIH0sCiAgICAiZGlzY2xhaW1lciI6IHsKICAgICAgInRyIjogIkJ1IGFzaXN0YW4gYmHEn2xhecSxY8SxIHRhYWhow7x0IHZlcm1lei4gQW1hw6cgeWFrbGHFn8SxbcSxIHZlIHByb2plIHV5dW11bnUgxZ9lZmZhZiBiacOnaW1kZSB5YW5zxLF0bWFrdMSxci4iLAogICAgICAiZW4iOiAiVGhpcyBhc3Npc3RhbnQgZG9lcyBub3QgcHJvdmlkZSBiaW5kaW5nIGNvbW1pdG1lbnRzLiBJdCByZWZsZWN0cyBhcHByb2FjaCBhbmQgcHJvamVjdCBmaXQgdHJhbnNwYXJlbnRseS4iLAogICAgICAiZGUiOiAiRGllc2VyIEFzc2lzdGVudCBnaWJ0IGtlaW5lIHZlcmJpbmRsaWNoZW4gWnVzYWdlbi4gRXIgc3BpZWdlbHQgVm9yZ2VoZW4gdW5kIFByb2pla3QtRml0IHRyYW5zcGFyZW50IHdpZGVyLiIKICAgIH0KICB9Cn0";

  const t = useMemo(() => {
    const copy = {
      en: {
        btn: "Mono AI Chat",
        title: "AI Assistant",
        chatTab: "Chat",
        inviteTab: "Request Invite",
        inviteTitle: "Request access",
        inviteText:
          "If you want access to the full version, email me with a short note about your use case.",
        email: "cagribozgeyik@gmail.com",
        emailCta: "Send email →",
      },
      tr: {
        btn: "Mono AI Chat",
        title: "AI Asistan",
        chatTab: "Chat",
        inviteTab: "Davet İste",
        inviteTitle: "Erişim iste",
        inviteText:
          "Tam sürüm erişimi için kullanım amacını kısaca yazarak bana e-posta at.",
        email: "cagribozgeyik@gmail.com",
        emailCta: "E-posta gönder →",
      },
      de: {
        btn: "Mono AI Chat",
        title: "KI Assistent",
        chatTab: "Chat",
        inviteTab: "Invite anfragen",
        inviteTitle: "Zugang anfragen",
        inviteText:
          "Fuer Vollzugang: kurze Beschreibung deines Use-Cases per E-Mail senden.",
        email: "cagribozgeyik@gmail.com",
        emailCta: "E-Mail senden →",
      },
    } as const;

    return copy[lang];
  }, [lang]);

  const styles = {
    panelBg: "rgba(12,12,14,0.94)",
    panelBorder: "1px solid rgba(255,255,255,0.10)",
    text: "rgba(255,255,255,0.92)",
    muted: "rgba(255,255,255,0.65)",
    subtle: "rgba(255,255,255,0.08)",
    accent: "rgba(255,255,255,0.10)",
    shadow: "0 14px 50px rgba(0,0,0,0.55)",
  } as const;

  const mailto = `mailto:${t.email}?subject=Mono%20AI%20Invite%20Request&body=Hi%20Cagri,%0A%0AI%20want%20access%20to%20the%20Mono%20AI%20bot.%0AUse%20case:%20...%0A%0AThanks`;

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1000,
            padding: "12px 14px",
            borderRadius: 999,
            border: styles.panelBorder,
            background: styles.panelBg,
            color: styles.text,
            cursor: "pointer",
            boxShadow: styles.shadow,
            fontWeight: 700,
            backdropFilter: "blur(10px)",
          }}
        >
          {t.btn}
        </button>
      )}

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            width: 420,
            height: 600,
            background: styles.panelBg,
            color: styles.text,
            border: styles.panelBorder,
            borderRadius: 16,
            zIndex: 1001,
            boxShadow: styles.shadow,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            backdropFilter: "blur(14px)",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: 14,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: `1px solid ${styles.subtle}`,
              fontWeight: 800,
            }}
          >
            {t.title}
            <button
              onClick={() => setOpen(false)}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontSize: 18,
                color: styles.text,
              }}
            >
              ×
            </button>
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", borderBottom: `1px solid ${styles.subtle}` }}>
            <button
              onClick={() => setTab("chat")}
              style={{
                flex: 1,
                padding: 12,
                border: "none",
                background: tab === "chat" ? styles.accent : "transparent",
                color: styles.text,
                cursor: "pointer",
                fontWeight: tab === "chat" ? 800 : 600,
              }}
            >
              {t.chatTab}
            </button>
            <button
              onClick={() => setTab("invite")}
              style={{
                flex: 1,
                padding: 12,
                border: "none",
                background: tab === "invite" ? styles.accent : "transparent",
                color: styles.text,
                cursor: "pointer",
                fontWeight: tab === "invite" ? 800 : 600,
              }}
            >
              {t.inviteTab}
            </button>
          </div>

          {/* Content */}
          {tab === "chat" ? (
            <div style={{ flex: 1 }}>
              <iframe
                title="Mono AI Bot"
                src={BOT_URL}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  background: "transparent",
                }}
                allow="clipboard-write; microphone; camera"
              />
            </div>
          ) : (
            <div style={{ padding: 16, lineHeight: 1.65 }}>
              <div style={{ fontWeight: 900, marginBottom: 8 }}>{t.inviteTitle}</div>
              <div style={{ color: styles.muted, marginBottom: 14 }}>{t.inviteText}</div>

              <a
                href={mailto}
                style={{
                  display: "inline-block",
                  padding: "10px 12px",
                  borderRadius: 12,
                  border: styles.panelBorder,
                  background: styles.accent,
                  color: styles.text,
                  textDecoration: "none",
                  fontWeight: 800,
                }}
              >
                {t.emailCta}
              </a>

              <div style={{ marginTop: 10, fontSize: 12, color: styles.muted }}>
                {t.email}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}