import type { TWeddingTimeline } from "./config/types";

export const heroImages = [];

export const weddingDate = "2026-01-10T12:30:00"; // January 10, 2026, 12:30 PM

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
