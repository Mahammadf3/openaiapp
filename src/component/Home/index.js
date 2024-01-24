import {useState} from "react"

import * as XLSX from "xlsx"
import excel from "../Images/excel.jpg"



import "./index.css"

const Home=()=>{

    const[data,setData]=useState([])

    const handleFileUpload=(e)=>{
     const reader=new FileReader();
     reader.readAsBinaryString(e.target.files[0]);
     reader.onload=(e)=>{
        const data=e.target.result;
        const workbox=XLSX.read(data,{type:"binary"});
        const sheetName=workbox.SheetNames[0]
        const sheet=workbox.Sheets[sheetName];
        const parseData=XLSX.utils.sheet_to_json(sheet);
        setData(parseData);

     };

    }



    return(
        <div className="xlContainer">
         
   
        <div className="fileContainer">
            <img src={excel}alt="logo"/>
            <p>Drop your excel sheet here or Browse</p>
            <input type="file"
            accept=".xlsx, .xls"
            onChange={handleFileUpload}
            className="inputData"
            />
            </div>

            {
                data.length>0 && (
                    <table>
                        <thead>
                            <tr>
                                {Object.keys(data[0]).map((key)=>(
                                    <th key={key}>{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
    {data.map((row, index) => (
        <tr key={index} className="tableRow">
            {Object.values(row).map((value, index) => (
                <td key={index} className="dataRow">{value}</td>
            ))}
        </tr>
    ))}
</tbody>

                    </table>
                )
            }


        </div>
    )
}

export default Home
