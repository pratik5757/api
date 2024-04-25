
import style from "./components/AllStyle.module.css";

 import Page from './manycountries/page'

 

export default async function Home() {
 
 
  return (
    <>
    
        <div className={style.heading}>
          <h1>Country Application</h1>
          
 
          <Page />
          
        
        </div>
      
    </>
  );
}
