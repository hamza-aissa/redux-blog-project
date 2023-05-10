import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";

  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago    `;
  }
  return (
    <small
      title={timestamp}
      className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug"
    >
      &nbsp; <i>{timeAgo}</i>
    </small>
  );
};

export default TimeAgo;
