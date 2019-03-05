const fs=require('fs')
const path=require('path')

const csvFilePath='./customer-data.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
    const folderName = 'jsonfile';
    
    fs.mkdirSync(folderName);
    
     
    
   
    
    fs.writeFileSync(path.join(__dirname, folderName, 'customer-data.json'),  JSON.stringify(jsonObj,null,2));
    
        
    
    console.log('your json file is ready');
  
})
 


  


 