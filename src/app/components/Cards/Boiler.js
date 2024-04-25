 
 import Card from "../card/card"
 

const Boiler = ({data}) => {

  
 
  const country = Array.isArray(data) ? data : [];
 
    
  return (
     <>
     {
         country.map((country, index) => (
            <Card key={country.name.common} country={country} index={index} />
          ))
          }
 
     </>
  )
}

export default Boiler