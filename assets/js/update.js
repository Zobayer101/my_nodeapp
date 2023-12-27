
// const Submit= document.querySelector('#form');

//     Submit.addEventListener('submit', manupulate);

//     async function manupulate(){

//         var Fname=document.querySelector('input[name="fname"]').value;
//         var Lname=document.querySelector('input[name="lname"]').value;
//         var Age=document.querySelector('input[name="age"]').value;
//         var Email=document.querySelector('input[name="email"]').value;
//         var Gendar=document.querySelectorAll('input[name="gendar"]');
//         var Status=document.querySelectorAll('input[name="status"]');

//         //GeNder//
//         const GL=Gendar.length;
//         for(let i=0;i<GL;i++){
//             var chack=Gendar[i].checked;
//             if(chack){
//                 var gender=Gendar[i].value;
//                 break;
//             }
//         }
//         console.log(gender)
//         //StaTs//
//         const ST=Status.length;
//         for(let j=0;j<ST; j++){
//             var CH=Status[j].checked;
//             if(CH){
//                 var status= Status[j].value;
//                 break;
//             }
//         }
//         console.log(Fname,Lname,Age,Email,gender,status,ID)
//         try{
//             const response = await fetch(`http://localhost:3300/route/api/update/${ID}`,{
//                 method:"PUT",
//                 'Content-Type':'application/json',
//                 body:JSON.stringify({
//                     fname:Fname,
//                     lname:Lname,
//                     age:Age,
//                     email:Email,
//                     gender:gender,
//                     status:status,
//                 })
//             })
//             const data = await response.json()
//             alert('Data update successfully!')
//             console.log(data)
//         }
//         catch(error){
//             console.log(error.message)
//         }

//         alert(`page update!`)
//     }



    
document.querySelector('#form')
.addEventListener('submit', async function (event) {
 event.preventDefault();

        const Fname=document.querySelector('input[name="fname"]').value;
        const Lname=document.querySelector('input[name="lname"]').value;
        const Age=document.querySelector('input[name="age"]').value;
        const Email=document.querySelector('input[name="email"]').value;
        const Gendar=document.querySelectorAll('input[name="gendar"]');
        const Status=document.querySelectorAll('input[name="status"]');

        //GeNder//
        const GL=Gendar.length;   
        for(let i=0;i<GL;i++){
            var chack=Gendar[i].checked;
            if(chack){
                var gender=Gendar[i].value;
                break;
            }
        }
        console.log(gender)
        //StaTs//
        const ST=Status.length;
        for(let j=0; j <ST; j++){
            var CH=Status[j].checked;
            if(CH){
                var status= Status[j].value;
                break;
            }
        }
        //console.log(Fname,Lname,Age,Email,gender,status) 

 try {
    console.log(ID)
   
   const response = await fetch(`http://localhost:3300/route/api/update/${ID}`, {
     method: 'PUT',
     headers: {
        'Content-Type': 'application/json',
     },   
     body: JSON.stringify({ 
                           fname: Fname,
                            lname:Lname,
                            age:Age,
                            email:Email,
                            gender:gender,
                            status:status,

                          }),
   });

   if (!response.ok) {
     throw new Error('Failed to update data');
   }
   alert(`Data update successfully!`) 
    const data= await response.json();
   
   
   //console.log(data.message);
 } catch (error) {
  
   console.log(error.message);
 }
});

let submit=document.querySelector('nput[name="submit"]').addEventListener('click', function(){
   alert(`Data updated successfully!`)
})
console.log(submit) 
