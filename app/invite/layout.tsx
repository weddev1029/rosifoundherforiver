import React from "react";
import BackToTop from "@/components/back-to-top";
import BGMButton from "@/components/bgm-button";

export default function InvitationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <BGMButton />
      {children}
      <BackToTop />
    </React.Fragment>
  );
}
