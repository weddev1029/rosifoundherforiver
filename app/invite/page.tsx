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
  WeddingTimeline,
} from "@/features";

export default function Invitation() {
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
      <RSVP />
      <RemainingDays isFloating={false} />
      <Footer />
    </div>
  );
}
