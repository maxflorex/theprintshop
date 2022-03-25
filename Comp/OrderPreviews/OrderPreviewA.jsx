import React from 'react';
import { Flex } from '../../Styled/divs/Styled';

const OrderPreviewA = ({
    name,
    email,
    finish,
    inset,
    qty,
    h,
    w,
    message,
    date,
}) => {
    return (
        <Flex color="none" m="0" p="0" radius='0'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Order Placed by</th>
                        <th>Email</th>
                        <th>Finish</th>
                        <th>Inset</th>
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
                        <td data-label='Finish'>{finish}</td>
                        <td data-label='Inset'>{inset}</td>
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

export default OrderPreviewA;
