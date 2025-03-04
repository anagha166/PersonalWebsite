import { useState } from "react";
import { useNavigate } from "react-router-dom";
const EventsDropdown = [
  {
    label: "Upcoming",
    src: "/events/upcoming"
  },
  {
    label: "Datahacks",
    src: "/events/upcoming"
  },
  {
    label: "Workshop",
    src: "/events/upcoming"
  },
  {
    label: "Social",
    src: "/events/upcoming"
  },
  {
    label: "Professional",
    src: "/events/upcoming"
  }
];
const Navbar = () => {

  return (
    <div className="navbar min-h-screen w-screen bg-[#f9dbc7]">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/blog">Blog</a>  
        </li>
      </ul>

    </div>
  );
};

export default Navbar;

