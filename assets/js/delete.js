
//const btn=document.querySelectorAll('.delete'); 

// const length=btn.length;
// let j=0;
// console.log(ID);
// for(j;j<length;j++){
//    const MINbtn=document.querySelector(`#x${j}`);
   
//    console.log(MINbtn)
// }


    

// document.addEventListener('DOMContentLoaded', function() {
//     // Ensure the DOM is fully loaded before attaching event listeners
  
//     // Find all buttons with the class 'deleteButton'
//     const deleteButtons = document.querySelectorAll('.delete');
  
//     // Attach a click event listener to each button  
//     deleteButtons.forEach(function(button) {
//       button.addEventListener('click', function() {
//         // Access the data-id attribute to identify the button
//         const buttonId = button.dataset.id;
  
//         // Handle click for the button with the specified ID
//         console.log('Button clicked with ID:', buttonId);
//       });
//     });
//   });






  
// btn.forEach(button => {
//     console.log(button);
//     button.addEventListener('click', () => {
//     fetch(`http://localhost:3300/route/api/delete/${ID}`,{method:'DELETE'})
//         .then((response)=>{
//             return response.json()
//         })
//         alert(`Data Deleted successfully!`)
//         window.location.reload()
//         .catch((error)=>{
//             alert(error.message) 
//         })
        
//     });
   
//   })
 
  



document.addEventListener('DOMContentLoaded', function() {
 
    const deleteButtons = document.querySelectorAll('.delete');
  
    // Attach a click event listener to each button
    deleteButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        // Access the data-id attribute using getAttribute
        var buttonId = button.getAttribute('id');
        fetch(`http://localhost:3300/route/api/delete/${buttonId}`,{method:'DELETE'})
                .then((response)=>{
                    return response.json()
                })
                alert(`Data Deleted successfully!`)
                window.location.reload()
                .catch((error)=>{
                    alert(error.message) 
                })
        // Handle click for the button with the specified ID
        console.log('Button clicked with ID:', buttonId);
      });
    });
  });
  