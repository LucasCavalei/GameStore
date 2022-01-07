import React from 'react';
import "./form.css";

const  AlertForm =({error})=> {
    return (
        <div className='alert'>
         <h3>{error}</h3>   
        </div>
    )
}
export default AlertForm;
// export  function successForm({error}) {
//     return (
//         <div className='alert'>
//          <h3>{error}</h3>   
//         </div>
//     )
// }

