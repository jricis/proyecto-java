import React, { useState, useEffect } from 'react';

const ViewPedidoUser = (prod) => {
    return (
            
                <tr>
                    <td>{prod.prod.name}</td>
                    <td>{prod.prod.price} €</td>
                </tr>
              

    )
}
export default ViewPedidoUser