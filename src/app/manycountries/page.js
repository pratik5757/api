import getCountries from "../../../desh/getCountries";

import ViewingArea from "../components/viewingArea/viewingArea";
const Page = async () => {
  const allCountrie = await getCountries();
  const countries= allCountrie;

  return ( 
    <>
      <div>
      <ViewingArea countries={countries} />
      </div>
    </>
  );
};

export default Page;
