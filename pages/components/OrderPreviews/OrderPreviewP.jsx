import React from 'react';
import { Flex } from '../Styled/divs/Styled';

const OrderPreview = ({
    name,
    email,
    type,
    laminate,
    mounts,
    framing,
    qty,
    h,
    w,
    message,
    date,


}) => {
    return (
        <Flex color="none" m="0" p='0'>
            <table className='dataTable'>
                <tr>
                    <th>Order Placed by</th>
                    <th>Email</th>
                    <th>Type</th>
                    <th>Laminate</th>
                    <th>Mounts</th>
                    <th>Framing</th>
                    <th>Quantity</th>
                    <th>Height</th>
                    <th>Width</th>
                    <th>Instructions</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{type}</td>
                    <td>{laminate}</td>
                    <td>{mounts}</td>
                    <td>{framing}</td>
                    <td>{qty}</td>
                    <td>{h}</td>
                    <td>{w}</td>
                    <td>{message}</td>
                    <td>{date.toDate().toDateString()}</td>
                </tr>
            </table>
        </Flex>
    );
};

export default OrderPreview;
