export default async function getCountries(){
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();

    const sortedCountries = data
      .filter((country) => country.area)
      .sort((a, b) => b.area - a.area);
  
    let topCountries = sortedCountries.slice(0, 10);
   
  // console.log(topCountries)
    return topCountries;
} catch (error) {
  console.error("Error fetching countries:", error);
  return [];
}
}