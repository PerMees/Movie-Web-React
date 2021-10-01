import React from "react";
import Cinema from "./Cinema/Cinema";
import SubCinema from "./SubCinema/SubCinema";

export default function ScheduleFilmDetail() {
  return (
    <div className="container mx-auto my-5">
      <div className="schedule flex flex-col md:flex-row shadow">
        <Cinema />
        <SubCinema />
      </div>
    </div>
  );
}
