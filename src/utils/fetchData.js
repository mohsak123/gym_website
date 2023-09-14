export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "b7c63a67f9msh733319aa3bdeadfp14d390jsnb103f9b31ed3",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

// let requestCount = 0;
// let lastRequestTime = 0;

// export const fetchData = async (url, options) => {
//   const now = Date.now();

//   // Calculate the time elapsed since the last request
//   const timeElapsed = now - lastRequestTime;

//   // If the time elapsed is less than a minute, check the request count
//   if (timeElapsed < 60000) {
//     if (requestCount >= 120) {
//       // Wait until the next minute to respect the rate limit
//       await new Promise((resolve) => setTimeout(resolve, 60000 - timeElapsed));
//       requestCount = 0; // Reset the request count
//     }
//   } else {
//     // Reset the request count when a new minute starts
//     requestCount = 0;
//   }

//   try {
//     const response = await fetch(url, options);
//     const data = await response.json();

//     // Update request count and last request time
//     requestCount++;
//     lastRequestTime = now;

//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };
