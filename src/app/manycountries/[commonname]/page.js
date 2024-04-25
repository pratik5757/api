import getCountries from "../../../../desh/getCountries";
import style from "../../components/AllStyle.module.css";
import Image from "next/image";
import Link from "next/link";

 
const Page = async (props) => {
  try {
  const countryList = await getCountries();
 

  
  const currname = (props.params.commonname);

  
  const country = countryList.find(
    (country) => country.name.common === currname
  );
 
  if (!country) {
    return (
      <div>
        <h1>Country not found</h1>
        <Link href="/">
          <button>Go back to homepage</button>
        </Link>
      </div>
    );
  }
  return (
    <> 
    <div className={style.cardSingle}>
     <header>
        <h1>This is detail page</h1>
      </header>
      <main className={style.cardSingle}>
        <section >
          <h2>Country Name: {country.name.common}</h2>
          <p>
            <strong>Capital:</strong>
            <span className={style.capitalheading}>{country.capital}</span>
          </p>
          <div>
           
            <Image
              src={country.flags.png}  
              width={320}
              height={213} 
              className={style.img}
              
              priority={false}
              alt={`${country.name.common} flag`}
            />
          </div>
          <p>
            <strong>Population:</strong>
            <span className={style.capitalheading}>{country.population}</span>
          </p>
          <Link href={"/"}>
            <button className={style.button} aria-label="Go back to homepage">Go to Back</button>
          </Link>
        </section>
      </main>
      </div>
    </>
  );
}catch (error) {
  console.error("Error rendering page:", error);
  return null;
}
};

export default Page;

export async function generateStaticParams() {
  const countryList = await getCountries();
 

  return countryList.map(country => ({
   
      commonname: country.name.common.toString(),
      revalidate:60,
    
  }));
}
