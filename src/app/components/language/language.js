  
import style from '../AllStyle.module.css'
const language = ({onChange,searchFilterFunction}) => {
    const data = searchFilterFunction;  
   

     const languageList =[];

     data.filter((item)=>{

      if(item.languages){
        languageList.push(Object.values(item.languages).map((item) => item))

      }})

      const uniqueList = [...new Set(languageList.flat())]

      
   
//     const languages =Object.entries(data) ;

//     let dasa=[];
//     for (const [key, value] of languages ) {
     
//       if(value.languages!=null){
//        dasa.push (value.languages);
//       }
     
//     }
    
//     console.log("dasa:",JSON.stringify(dasa));
// var arrKeys=[];
// var arrValues=[];
//     for(var i=0;i<dasa.length;i++){
//       arrKeys.push(Object.keys(dasa[i]).toString());
//       arrValues.push(Object.values(dasa[i]).toString());
//     }

//     var fkarr=[];
//     var fvarr=[];
//     for(var i=0;i<arrKeys.length;i++){
//       var key=arrKeys[i].split(',');
//       var val=arrValues[i].split(',');

//         for(var k=0;k<key.length;k++){
//           if(!fkarr.includes(key[k])){
//           fkarr.push(key[k]);
//           fvarr.push(val[k]);
//         }
//       }
//       if(!fvarr.includes('All')){
//       fvarr.unshift('All');
//       }
//     }
//     console.log(fkarr)
//     console.log(fvarr)

 

  return (
    <>
    <label htmlFor="filter" className={style.label}>
        Filter by Language:
      </label>

      <select className={style.filter} name="filter" id="filterbyRegion" onChange={onChange}>
      
       
     
            {
              uniqueList.map((item)=>(
                <option key={item}>{item}</option>

              )
              )
            }
            
            
        </select>
     
        </>
  )
}

export default language