import type { TWeddingTimeline } from "./config/types";

export const heroImages = [
  // {
  //   id: 1,
  //   src: "/hero/hero-1.webp",
  //   alt: "wedding-1",
  // },
  // {
  //   id: 2,
  //   src: "/hero/hero-2.webp",
  //   alt: "wedding-2",
  // },
  // {
  //   id: 3,
  //   src: "/hero/hero-3.webp",
  //   alt: "wedding-3",
  // },
  {
    id: 4,
    src: "/hero/hero-4.webp",
    alt: "wedding-4",
    className: "object-right",
  },
  {
    id: 5,
    src: "/hero/hero-5.webp",
    alt: "wedding-5",
  },
];

export const theBigDay = [
  {
    id: 10,
    src: "/thebigday/bigday-1.webp",
    alt: "wedding-10",
  },
  {
    id: 11,
    src: "/thebigday/bigday-2.webp",
    alt: "wedding-11",
  },
  {
    id: 12,
    src: "/thebigday/bigday-3.webp",
    alt: "wedding-12",
  },
];

export const rsvpImages = [
  {
    id: 13,
    src: "/rsvp/rsvp-1.webp",
    alt: "wedding-13",
  },
  {
    id: 14,
    src: "/rsvp/rsvp-2.webp",
    alt: "wedding-13",
  },
  {
    id: 15,
    src: "/rsvp/rsvp-3.webp",
    alt: "wedding-13",
  },
];

export const loveInGallery = [
  ...heroImages,
  {
    id: 6,
    src: "/lovegallery/lig1.webp",
    alt: "wedding-6",
  },
  {
    id: 7,
    src: "/lovegallery/lig2.webp",
    alt: "wedding-7",
  },
  {
    id: 8,
    src: "/lovegallery/lig3.webp",
    alt: "wedding-8",
  },
  {
    id: 9,
    src: "/lovestory/ls3.webp",
    alt: "wedding-9",
  },
  ...theBigDay,
  ...rsvpImages,
];

export const weddingDate = "2026-01-10T12:30:00"; // January 10, 2026, 12:30 PM
export const weddingChurch = "Diocesan Shrine and Parish of St. Anthony, Abbot";
export const weddingReception = "E Jose Events Place and Resort";
export const weddingCalendarURL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=%23ROSIfoundherforIVER&dates=20260110T123000Z/20260110T184000Z&details=Tied+by+love,+sealed+for+life.&location=Diocesan+Shrine+and+Parish+of+St.+Anthony,+Abbot";

export const weddingTimeline: TWeddingTimeline[] = [
  {
    id: 1,
    title: "Wedding Ceremony",
    timeline: [
      {
        id: 1,
        time: "12:30 PM",
        description: "Church Arrival",
        subDescription: "(Please be there at the church by 12:30 PM)",
      },
      {
        id: 2,
        time: "1:00 PM",
        description: "Wedding Ceremony",
      },
      {
        id: 3,
        time: "2:00 PM",
        description: "Pictorial",
        subDescription: "(Couple, entourage, and family at church)",
      },
      {
        id: 4,
        time: "2:30 PM",
        description: "Travel to Reception Venue",
      },
      {
        id: 5,
        time: "3:00 PM",
        description:
          "Cocktail Hour / Guest Arrival — Photo booth opens (3:00–6:00 PM)",
      },
    ],
  },
  {
    id: 2,
    title: "Reception",
    timeline: [
      { id: 1, time: "3:30 PM", description: "Guests Seated" },
      { id: 2, time: "3:40 PM", description: "Welcome Remarks" },
      {
        id: 3,
        time: "3:45 PM",
        description: "Grand Entrance",
        subDescription: "(Entrance of entourage and newlyweds)",
      },
      { id: 4, time: "4:05 PM", description: "Opening Prayer" },
      { id: 5, time: "4:08 PM", description: "Game #1" },
      { id: 6, time: "4:23 PM", description: "Dinner" },
      { id: 7, time: "5:00 PM", description: "Couple's First Dance" },
      { id: 8, time: "5:15 PM", description: "Speeches" },
      { id: 9, time: "5:30 PM", description: "Cake Cutting & Wine Toast" },
      { id: 10, time: "5:45 PM", description: "Game #2" },
      { id: 11, time: "6:00 PM", description: "Bouquet and Garter Toss" },
      { id: 12, time: "6:15 PM", description: "Game #3 / Raffle Draw" },
      { id: 13, time: "6:30 PM", description: "Thank You Speech" },
      { id: 14, time: "6:40 PM", description: "Closing Prayer" },
    ],
  },
  {
    id: 3,
    title: "After Party",
    timeline: [
      {
        id: 1,
        time: "6:40 PM Onwards –",
        description: "After-Party",
      },
      {
        id: 2,
        time: "",
        description: "Open dance floor, drinks, and swimming",
      },
      {
        id: 3,
        time: "",
        description: "Relaxed social time with guests",
      },
      {
        id: 4,
        time: "NOTE",
        description:
          "*If you are not part of the entourage but wish to attend the church ceremony, please be there at the church by 12:30 PM.",
      },
      {
        id: 5,
        time: "",
        description:
          "*If you prefer to join us directly at the reception, please be at the reception venue by 3:00 PM.",
      },
    ],
  },
];

export const loveStory = [
  {
    id: 1,
    title: "How It Started, 2013",
    story:
      "We first met in 2013, when we were just 12 and 15 years old. Life took us on separate paths, but fate had other plans. Four years later, we met again, this time as senior high school classmates.",
  },
  {
    id: 2,
    title: "Our Journey, 2017",
    story:
      "What began as friendship soon grew into love. In 2017, we became a couple and faced life’s challenges together. Through every high and low, our bond only grew stronger.",
  },
  {
    id: 3,
    title: "Forever Begins, 2026",
    story:
      "After eight years of love, laughter, and growth, we’re finally saying “I do.” This is the start of our forever, a new chapter as husband and wife.",
  },
];
