import React, { useState, useEffect } from 'react';

const ViewPedidoUser = (prod) => {
    return (
       <div>
           <tr>
                <td>{prod.prod.name}</td>
                <td>{prod.prod.price}</td>
           </tr>
       </div>
                
         
    )
}
export default ViewPedidoUser