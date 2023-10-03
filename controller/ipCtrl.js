const { ipToNumeric } = require("../utils/ipToNumeric");
const fs = require("fs");

const getCountryByIP = async (req, res) => {
  const ipv4Address = req.header("x-forwarded-for") || req.socket.remoteAddress;
  if (!ipv4Address) throw new Error("Couldn't get IP address.");

  const countryData = [];

  fs.readFile("ip_data.CSV", "utf-8", (err, data) => {
    if (err) {
      throw new Error(err);
    } else {
      const lines = data.split("\r\n");

      lines.forEach((line) => {
        const [start, end, countryCode, countryName] = line.split(",");
        if (typeof end !== "undefined") {
          countryData.push({
            start: parseInt(start.slice(1, start.length - 1), 10),
            end: parseInt(end.slice(1, end.length - 1), 10),
            countryCode: countryCode.slice(1, countryCode.length - 1),
            countryName: countryName.slice(1, countryName.length - 1),
          });
        }
      });

      for (const range of countryData) {
        if (
          ipToNumeric(ipv4Address) >= range.start &&
          ipToNumeric(ipv4Address) <= range.end
        ) {
          res.status(200).json({
            status: true,
            data: {
              yourIp: ipv4Address,
              country: range.countryName,
            },
          });
        }
      }
    }
  });
};

module.exports = getCountryByIP;
