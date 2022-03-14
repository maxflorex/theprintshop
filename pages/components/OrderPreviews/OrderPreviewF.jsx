import React from 'react';
import { Flex } from '../Styled/divs/Styled';

const OrderPreviewF = ({
    name,
    email,
    color,
    moulding,
    glass,
    mat,
    matW,
    qty,
    h,
    w,
    message,
    date,
}) => {
    return (
        <Flex color="none" m="0" p="0"  radius='0'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Order Placed by</th>
                        <th>Email</th>
                        <th>Color</th>
                        <th>Moulding</th>
                        <th>Glass</th>
                        <th>Mat</th>
                        <th>Mat Width</th>
                        <th>Quantity</th>
                        <th>Height</th>
                        <th>Width</th>
                        <th>Instructions</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label='Order Placed By'>{name}</td>
                        <td data-label='Email'>{email}</td>
                        <td data-label='Color'>{color}</td>
                        <td data-label='Moulding'>{moulding}</td>
                        <td data-label='Glass'>{glass}</td>
                        <td data-label='Mat'>{mat}</td>
                        <td data-label='Mat Width'>{matW}</td>
                        <td data-label='Quantity'>{qty}</td>
                        <td data-label='Height'>{h}</td>
                        <td data-label='Width'>{w}</td>
                        <td data-label='Instructions'>{message}</td>
                        <td data-label='Date'>{date.toDate().toDateString()}</td>
                    </tr>
                </tbody>
            </table>
        </Flex>
    );
};

export default OrderPreviewF;
