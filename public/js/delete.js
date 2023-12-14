// const elpostList = document.querySelector('.post-list');

// const deleteHandler = async (event) =>{
//     event.preventDefault();

//     if(event.target.hasAttribute('data-id')){
//         const response = await fetch(`/api/blogRoutes/${id}`,{
//             method: 'DELETE',
//             headers: { 'Content-Type': 'application/json' },
//         });
//         if (response.ok) {
//             document.location.replace('/dashboard');
//         } else {
//             alert('Failed  to delete blog.');
//         }
//     }
// };

// elpostList.addEventListener('click', deleteHandler);