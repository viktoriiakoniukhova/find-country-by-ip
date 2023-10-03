# find-country-by-ip
Web app in Express, allocating an endpoint by which a server-hosted algorithm can detect where the user is coming from and return both the IP address value and the country from which the request was made.

# Requirements
So, we have a CSV table where you will find a long list of rows with IP ranges (from and to - 1st and 2nd columns respectively), as well as the country to which these IPs are issued.

The task is to write a web application in Express, allocating an endpoint by which a server-hosted algorithm can detect where the user is coming from and return both the IP address value and the country from which the request was made.

So, in this API works this way:

- Detects user's IP;
- Determines user's location by IP using a CSV database;
- Returns the user's address range (in a human-readable form) and country from the csv table.
