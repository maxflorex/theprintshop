import React from 'react';
import { Flex } from '../../Styled/divs/Styled';

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
        <Flex color="none" m="0" p="0"  radius='0'>
            <table className="table">
                <thead>
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
                </thead>
                <tbody>
                    <tr>
                        <td data-label='Order Placed By'>{name}</td>
                        <td data-label='Email'>{email}</td>
                        <td data-label='Medium'>{medium}</td>
                        <td data-label='Borders'>{borders}</td>
                        <td data-label='Stretchers'>{stretchers}</td>
                        <td data-label='Floters'>{floaters}</td>
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

export default OrderPreview;
