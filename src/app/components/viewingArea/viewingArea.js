"use client";
import React, { useState, useEffect } from "react";
import Search from "../search/search";
import Region from "../region/region";
 
import style from "../AllStyle.module.css";
import Boiler from "../Cards/Boiler";
import Language from "../language/language";

const viewingArea = ({ countries }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [language1, setLanguage] = useState("");

  const [data, setData] = useState(countries);

  // const searchFilterFunction = data.filter((country) =>
  // country.name.common.toLowerCase().includes(search.toLowerCase()) &&
  //       country.region.toLowerCase().includes(filter)
  // );

  // const searchFilterFunction = data.filter((country) => {
  //   const nameMatch = country.name.common
  //     .toLowerCase()
  //     .includes(search.toLowerCase());

  //   const regionMatch = country.region.toLowerCase().includes(filter);

  //   const languageMatch = country.languages  && Object.values(country.values).join().toLowerCase().includes(language1.toLowerCase())
    // if(language1 ===""){
    //   return data ;
    // }else if(data.languages !==null && Object.values(data.values).join().toLowerCase().includes(language1.toLowerCase())){
       
    // }
    // if (language1.toLowerCase() === "all"|| language1.toLowerCase() ==="") {
    //   return nameMatch && regionMatch;
    // } else {
    //   const languageMatch = Object.values(country).some((languageObj) => {
    //     return Object.values(languageObj).some((language) =>
    //       typeof language === 'string' && language.toLowerCase() === language1.toLowerCase()
    //     );
      // });
    //   return nameMatch && regionMatch && languageMatch;
    // });
 
    const searchFilterFunction = data.filter((country) => {
      const nameMatch = country.name.common.toLowerCase().includes(search.toLowerCase());
      const regionMatch = country.region.toLowerCase().includes(filter);
      const languageMatch = country.languages && Object.values(country.languages).join().toLowerCase().includes(language1.toLowerCase());
      return nameMatch && regionMatch && languageMatch;
    });
  const handleFilterByRegion = (e) => {
    setFilter(e.target.value);
  };

  const handleSearchBar = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterByLanguage = (e) => {
    setLanguage(e.target.value);
  };

  useEffect(() => {
    setData(countries);
  }, [countries]);

  return (
    <>
      <div className={style.appli}>
        <div className={style.searchupper}>
          <div className={style.searchregion}>
            <Search searchVal={search} onChange={(e) => handleSearchBar(e)} />
            <Region onChange={(e) => handleFilterByRegion(e)} />
            <Language
              searchFilterFunction={data}
              onChange={(e) => handleFilterByLanguage(e)}
            />
          </div>
        </div>
        <div className={style.countrycards}>
          <Boiler data={searchFilterFunction} />
 
        </div>
      </div>
    </>
  );
};

export default viewingArea;
