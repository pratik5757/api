  
import style from "../AllStyle.module.css";
import Image from "next/image";
import CountryButton from "../CountryButoon";
 

const Card = ({country,index}) => {
    
  
   
  return (
    <>
    <div className={style.oneCard}>
  
      <div className={style.card}>
        <Image
          className={style.flag}
          src={country.flags.png}
           
          width={320}
          height={213} 
        
          priority={false}
          alt={`Picture of ${country.name.common}`}
        />
        <div className={style.text}>
        <div className={style.countryName}>{country.name.common}</div>
          <div>
             
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        </div>
        <CountryButton country={country} index={index} />
      </div>
      </div>
   
 
   
  </>
    
  );
};

export default Card;
