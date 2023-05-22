function formatTimestamp(timestamp) { // converts the epoch time to something that's actually discernable for normal people
  const date = new Date(timestamp);
  return date;
}

module.exports = { formatTimestamp };
