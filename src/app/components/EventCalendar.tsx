import { useState } from "react";

interface EventData {
  type: "morning" | "afternoon";
  guest: string;
  time: string;
  ticketStatus: "available" | "sold-out";
}

interface DateData {
  month: string;
  day: number;
  dayOfWeek: string;
  events: EventData[];
}

// Sample data for demonstration
const calendarData: DateData[] = [
  {
    month: "SEPT",
    day: 30,
    dayOfWeek: "TUE",
    events: [
      { type: "morning", guest: "Ja Rule", time: "10:00 AM", ticketStatus: "available" },
      { type: "afternoon", guest: "Ja Rule", time: "02:00 PM", ticketStatus: "sold-out" },
    ],
  },
  {
    month: "OCT",
    day: 1,
    dayOfWeek: "WED",
    events: [
      { type: "morning", guest: "Common", time: "10:00 AM", ticketStatus: "available" },
      { type: "afternoon", guest: "Common", time: "02:00 PM", ticketStatus: "available" },
    ],
  },
  {
    month: "OCT",
    day: 2,
    dayOfWeek: "THU",
    events: [
      { type: "morning", guest: "Tiffany Haddish", time: "10:00 AM", ticketStatus: "sold-out" },
    ],
  },
  {
    month: "OCT",
    day: 3,
    dayOfWeek: "FRI",
    events: [
      { type: "morning", guest: "Ne-Yo", time: "10:00 AM", ticketStatus: "available" },
      { type: "afternoon", guest: "Ne-Yo", time: "02:00 PM", ticketStatus: "available" },
    ],
  },
  {
    month: "OCT",
    day: 4,
    dayOfWeek: "MON",
    events: [
      { type: "afternoon", guest: "Keke Palmer", time: "02:00 PM", ticketStatus: "available" },
    ],
  },
  {
    month: "OCT",
    day: 5,
    dayOfWeek: "TUE",
    events: [
      { type: "morning", guest: "Anthony Anderson", time: "10:00 AM", ticketStatus: "sold-out" },
      { type: "afternoon", guest: "Anthony Anderson", time: "02:00 PM", ticketStatus: "sold-out" },
    ],
  },
  {
    month: "OCT",
    day: 6,
    dayOfWeek: "WED",
    events: [
      { type: "morning", guest: "Ice Cube", time: "10:00 AM", ticketStatus: "available" },
    ],
  },
  {
    month: "OCT",
    day: 7,
    dayOfWeek: "THU",
    events: [
      { type: "morning", guest: "Regina Hall", time: "10:00 AM", ticketStatus: "available" },
      { type: "afternoon", guest: "Regina Hall", time: "02:00 PM", ticketStatus: "available" },
    ],
  },
];

interface DateCardProps {
  date: DateData;
  isSelected: boolean;
  onClick: () => void;
}

function DateCard({ date, isSelected, onClick }: DateCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white flex flex-col items-center justify-between rounded-[4px] shrink-0 w-[93px] h-[93px] border border-[#d3d3d3] transition-all hover:shadow-md hover:scale-105 cursor-pointer"
      aria-pressed={isSelected}
    >
      {/* Date Section */}
      <div
        className={`flex flex-col font-['Inter:Black',sans-serif] font-black gap-0 h-[72px] items-center justify-center w-full transition-colors ${
          isSelected ? "text-[#222]" : "text-[#e9e9e9]"
        }`}
      >
        <p className="leading-[14px] text-[14px]">{date.month}</p>
        <p className="leading-[38px] text-[38px] uppercase">{date.day}</p>
      </div>

      {/* Day Label */}
      <div
        className={`h-[21px] w-full rounded-bl-[4px] rounded-br-[4px] flex items-center justify-center transition-colors ${
          isSelected ? "bg-[#fe3b84]" : "bg-[#032a36]"
        }`}
      >
        <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] text-[14px] text-white">
          {date.dayOfWeek}
        </p>
      </div>
    </button>
  );
}

interface EventCardProps {
  event: EventData;
}

function EventCard({ event }: EventCardProps) {
  const isAvailable = event.ticketStatus === "available";

  return (
    <div className="flex flex-col gap-[12px] w-full">
      {/* Event Info */}
      <div className="flex flex-col gap-[4px] text-[#222]">
        <p className="font-['Inter:Black',sans-serif] font-black leading-[20px] text-[18px] uppercase mb-[2px]">
          {event.type === "morning" ? "Morning Taping" : "Afternoon Taping"}
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] text-[12px]">
          Guest: {event.guest}
        </p>
        <p className="font-['Inter:Black',sans-serif] font-black leading-[16px] text-[14px] uppercase">
          {event.time}
        </p>
      </div>

      {/* Ticket Button */}
      <button
        className={`px-[10px] py-[10px] rounded-[4px] font-['Inter:Black',sans-serif] font-black leading-[16px] text-[12px] text-white transition-all ${
          isAvailable
            ? "bg-[#43bbcf] hover:bg-[#3aa8bb] active:bg-[#329099]"
            : "bg-[#fe3b84] cursor-not-allowed opacity-80"
        }`}
        disabled={!isAvailable}
      >
        {isAvailable ? "TICKETS" : "SOLD OUT"}
      </button>
    </div>
  );
}

export function EventCalendar() {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);

  const selectedDate = calendarData[selectedDateIndex];

  return (
    <div className="bg-[#f4f4f4] flex flex-col gap-[10px] items-center justify-center py-[50px] rounded-[8px] border border-[#d3d3d3] w-full overflow-hidden">
      {/* Dates Row */}
      <div className="w-full overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x snap-mandatory">
        <div className="flex gap-[24px] items-center justify-center min-w-min px-4">
          {calendarData.map((date, index) => (
            <div key={`${date.month}-${date.day}`} className="snap-center">
              <DateCard
                date={date}
                isSelected={selectedDateIndex === index}
                onClick={() => setSelectedDateIndex(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Events Section */}
      <div className="flex flex-col min-[834px]:flex-row gap-[24px] items-start justify-center w-full px-4 pt-[20px]">
        {/* Image Placeholder */}
        <div className="bg-[#032a36] h-[262px] rounded-[8px] w-full min-[834px]:w-[443px] shrink-0" />

        {/* Event Details */}
        <div className="flex flex-col gap-[36px] h-[262px] items-start justify-center w-full min-[834px]:w-[443px] shrink-0 px-[24px]">
          {selectedDate.events.length > 0 ? (
            selectedDate.events.map((event, index) => (
              <EventCard key={`${event.type}-${index}`} event={event} />
            ))
          ) : (
            <div className="text-[#7a7a7a] text-center w-full">
              <p className="font-['Inter:Black',sans-serif] font-black text-[18px] uppercase">
                No Events Scheduled
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}