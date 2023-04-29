
 function fun(){
    let hallNo=document.getElementById('input').value;
    
    fetch(`https://results-restapi.up.railway.app/all-r18/${hallNo}`).then((data)=>{
    let gson;
    // console.log(data.status);    
    gson=data.json() 
     return gson; 
   }).then((objectData)=>{
    // console.log(objectData.data);
    let result=objectData.data;
    let details=result['details'];
    let overall_gpa=result['overall_gpa'];
    let results=result['results'];
    //detalis fetch
    let tableData=`
    <tr>
    <td> ${details['HTNO']}</td>
        <td>${details['NAME']}</td>
        <td>${details['FATHER NAME']}</td>
        <td>${details['COLLEGE CODE']}</td>
    </tr>
    `;
 
    document.getElementById('table_body').innerHTML=tableData;
    document.getElementById("tab1").className ='table table-bordered visible';
    // totalCGPA
    let gpa=document.getElementById('overall_Out');
    overall_gpa?gpa.innerHTML=overall_gpa:gpa.innerHTML='<span style: color: red;>  F </span>';
    results[0]?fun1(results):console.log("no 1-1 result");
    document.getElementById("overall").className ='visible';  
}).catch((err)=>{
     
    console.log(err)
    document.getElementById('error').innerHTML="Invaild Hall Ticket Number"
})
 }
 function fun1(results){
    let table1_1="";
    let value=results[0]['1-1'];
    let SGPA=results[0]['SGPA'];
    Object.keys(value).forEach(
        k=>{
            table1_1+=`<tr>
            <td> ${value[k].subject_code}</td>
                <td>${value[k].subject_name}</td>
                <td>${value[k].subject_credits}</td>
                <td>${value[k].grade_earned}</td>
            </tr>`
        }
        );
        SGPA? table1_1+=` <tr class="table-success ">
        <td></td>
            <td> </td>
            <td>SGPA:-</td>
            <td>${SGPA}</td>
        </tr>`:table1_1+=` <tr class="table-danger">
        <td></td>
            <td> </td>
            <td>SGPA:-</td>
            <td>FAIL</td>
        </tr>`;
        
        document.getElementById('table_body_1_1').innerHTML=table1_1;  
        document.getElementById("tableSem1_1").className ='table table-bordered visible';
        results[1]?fun2(results):console.log("no 1-2 result");
         
 } 
 function fun2(results){
    let table1_2="";
    let value=results[1]['1-2'];
    let SGPA=results[1]['SGPA'];
    Object.keys(value).forEach(
        k=>{
            table1_2+=`<tr>
            <td> ${value[k].subject_code}</td>
                <td>${value[k].subject_name}</td>
                <td>${value[k].subject_credits}</td>
                <td>${value[k].grade_earned}</td>
            </tr>`
        }
        );
        SGPA? table1_2+=` <tr class="table-success ">
        <td></td>
            <td> </td>
            <td>SGPA:-</td>
            <td>${SGPA}</td>
        </tr>`:table1_2+=` <tr class="table-danger">
        <td></td>
            <td> </td>
            <td>SGPA:-</td>
            <td>FAIL</td>
        </tr>`;
        
        document.getElementById('table_body_1_2').innerHTML=table1_2;  
        document.getElementById("tableSem1_2").className ='table table-bordered visible';
       
        results[2]?fun3(results):console.log("no 2-1 result");
 } 
 function fun3(results){
    let table2_1="";
    let value=results[2]['2-1'];
    let SGPA=results[2]['SGPA'];
    Object.keys(value).forEach(
        k=>{
            table2_1+=`<tr>
            <td> ${value[k].subject_code}</td>
                <td>${value[k].subject_name}</td>
                <td>${value[k].subject_credits}</td>
                <td>${value[k].grade_earned}</td>
            </tr>`
        }
        );
        SGPA? table2_1+=` <tr class="table-success ">
        <td></td>
            <td> </td>
            <td>SGPA:-</td>
            <td>${SGPA}</td>
        </tr>`:table2_1+=` <tr class="table-danger">
        <td></td>
            <td> </td>
            <td>SGPA:-</td>
            <td>FAIL</td>
        </tr>`;
        
        document.getElementById('table_body_2_1').innerHTML=table2_1;  
        document.getElementById("tableSem2_1").className ='table table-bordered visible';
        // fun4(results);
        results[3]?fun4(results):console.log("no 2-2 result");
 } 
 function fun4(results){
    let table2_2="";
    let value=results[3]['2-2'];
    let SGPA=results[3]['SGPA'];
    Object.keys(value).forEach(
        k=>{
            table2_2+=`<tr>
            <td> ${value[k].subject_code}</td>
                <td>${value[k].subject_name}</td>
                <td>${value[k].subject_credits}</td>
                <td>${value[k].grade_earned}</td>
            </tr>`
        }
        );
        SGPA? table2_2+=` <tr class="table-success ">
        <td></td>
            <td> </td>
            <td>SGPA:-</td>
            <td>${SGPA}</td>
        </tr>`:table2_2+=` <tr class="table-danger">
        <td></td>
            <td> </td>
            <td>SGPA:-</td>
            <td>FAIL</td>
        </tr>`;
        
        document.getElementById('table_body_2_2').innerHTML=table2_2;  
        document.getElementById("tableSem2_2").className ='table table-bordered visible';
        // fun5(results);
        results[4]?fun5(results):console.log("no 3-1 result");
 } 
 function fun5(results){
    let table3_1="";
    let value=results[4]['3-1'];
    let SGPA=results[4]['SGPA'];
    Object.keys(value).forEach(
        k=>{
            table3_1+=`<tr>
            <td> ${value[k].subject_code}</td>
                <td>${value[k].subject_name}</td>
                <td>${value[k].subject_credits}</td>
                <td>${value[k].grade_earned}</td>
            </tr>`
        }
        );
        SGPA? table3_1+=` <tr class="table-success ">
        <td></td>
            <td> </td>
            <td>SGPA:-</td>
            <td>${SGPA}</td>
        </tr>`:table3_1+=` <tr class="table-danger">
        <td></td>
            <td> </td>
            <td>SGPA:-</td>
            <td>FAIL</td>
        </tr>`;
        
        document.getElementById('table_body_3_1').innerHTML=table3_1;  
        document.getElementById("tableSem3_1").className ='table table-bordered visible';
        // fun6(results);
        results[5]?fun6(results):console.log("no 3-2 result");
 } 
 function fun6(results){
    let table3_2="";
    let value=results[5]['3-2'];
    let SGPA=results[5]['SGPA'];
    Object.keys(value).forEach(
        k=>{
            table3_2+=`<tr>
            <td> ${value[k].subject_code}</td>
                <td>${value[k].subject_name}</td>
                <td>${value[k].subject_credits}</td>
                <td>${value[k].grade_earned}</td>
            </tr>`
        }
        );
        SGPA? table3_2+=` <tr class="table-success ">
        <td></td>
            <td> </td>
            <td>SGPA:-</td>
            <td>${SGPA}</td>
        </tr>`:table3_2+=` <tr class="table-danger">
        <td></td>
            <td> </td>
            <td>SGPA:-</td>
            <td>FAIL</td>
        </tr>`;
        
        document.getElementById('table_body_3_2').innerHTML=table3_2;  
        document.getElementById("tableSem3_2").className ='table table-bordered visible';
        // fun7(results);
        results[6]?fun7(results):console.log("no 4-1 result");
 } 
 function fun7(results){
    let table4_1="";
    let value=results[6]['4-1'];
    let SGPA=results[6]['SGPA'];
    Object.keys(value).forEach(
        k=>{
            table4_1+=`<tr>
            <td> ${value[k].subject_code}</td>
                <td>${value[k].subject_name}</td>
                <td>${value[k].subject_credits}</td>
                <td>${value[k].grade_earned}</td>
            </tr>`
        }
        );
        SGPA? table4_1+=` <tr class="table-success ">
        <td></td>
            <td> </td>
            <td>SGPA:-</td>
            <td>${SGPA}</td>
        </tr>`:table4_1+=` <tr class="table-danger">
        <td></td>
            <td> </td>
            <td>SGPA:-</td>
            <td>FAIL</td>
        </tr>`;
        
        document.getElementById('table_body_4_1').innerHTML=table4_1;  
        document.getElementById("tableSem4_1").className ='table table-bordered visible';
        // fun8(results);
        results[7]?fun8(results):console.log("no 4-2 result");
 } 
 function fun8(results){
    let table4_2="";
    let value=results[7]['4-2'];
    let SGPA=results[7]['SGPA'];
    Object.keys(value).forEach(
        k=>{
            table4_2+=`<tr>
            <td> ${value[k].subject_code}</td>
                <td>${value[k].subject_name}</td>
                <td>${value[k].subject_credits}</td>
                <td>${value[k].grade_earned}</td>
            </tr>`
        }
        );
        SGPA? table4_2+=` <tr class="table-success ">
        <td></td>
            <td> </td>
            <td>SGPA:-</td>
            <td>${SGPA}</td>
        </tr>`:table4_2+=` <tr class="table-danger">
        <td></td>
            <td> </td>
            <td>SGPA:-</td>
            <td>FAIL</td>
        </tr>`;
        
        document.getElementById('table_body_4_2').innerHTML=table4_2;  
        document.getElementById("tableSem4_2").className ='table table-bordered visible';
        // fun8(results);
 } 




    
 
