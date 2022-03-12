import React from 'react';
import { Flex } from '../Styled/divs/Styled';

const OrderPreview = ({
    name,
    email,
    medium,
    borders,
    stretchers,
    floaters,
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
                    <th>Medium</th>
                    <th>Borders</th>
                    <th>Stretchers</th>
                    <th>Floaters</th>
                    <th>Quantity</th>
                    <th>Height</th>
                    <th>Width</th>
                    <th>Instructions</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{medium}</td>
                    <td>{borders}</td>
                    <td>{stretchers}</td>
                    <td>{floaters}</td>
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
