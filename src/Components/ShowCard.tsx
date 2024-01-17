import { Link } from "react-router-dom";
import { Show } from "../model/Show";
import { FC } from "react";
type ShowCartProps = { show: Show };
const placeholderImage =
  "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2t8ZW58MHx8MHx8fDA%3D";

const ShowCard: FC<ShowCartProps> = ({ show }) => {
  return (
    <div className="max-w-xs rounded-md shadow-md p-2 m-1">
      <img
        src={show.image?.medium || show.image?.original || placeholderImage}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{show.name}</h2>
          <p>{show.summary}</p>
        </div>
        <Link
          to={"/show/" + show.id}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ShowCard;
