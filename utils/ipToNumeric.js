exports.ipToNumeric = (ipAddress) => {
  const octets = ipAddress.split(".").map(Number);

  return octets.reduce((numeric, octet, index) => {
    return numeric + (octet << (24 - 8 * index));
  }, 0);
};
