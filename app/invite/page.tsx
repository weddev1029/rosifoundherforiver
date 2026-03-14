import RemainingDays from "@/components/remaining-days";
import {
  DressCode,
  Footer,
  GroomNBride,
  Hero,
  Location,
  LoveInGallery,
  LoveStory,
  RSVP,
  TheBigDay,
  TiedByLoveSealedForLife,
  WeddingTimeline,
} from "@/features";
import { weddingDate } from "@/siteConfig";

export default function Invitation() {
  const difference = new Date(weddingDate).getTime() - Date.now();

  return (
    <div className="min-h-screen font-playfair-display overflow-hidden">
      <Hero />
      <GroomNBride />
      <Location />
      <WeddingTimeline />
      <LoveInGallery />
      <LoveStory />
      <TheBigDay />
      <DressCode />
      {difference > 0 && (
        <>
          <RSVP />
          <RemainingDays isFloating={false} />
        </>
      )}
      <TiedByLoveSealedForLife />
      <Footer />
    </div>
  );
}
