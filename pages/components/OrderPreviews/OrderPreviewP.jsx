import React from 'react';
import { Flex } from '../../../Styled/divs/Styled';

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
        <Flex color="none" m="0" p="0"  radius='0'>
            <table className="table">
                <thead>
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
                </thead>
                <tbody>
                    <tr>
                        <td data-label='Order Placed By'>{name}</td>
                        <td data-label='Email'>{email}</td>
                        <td data-label='Type'>{type}</td>
                        <td data-label='Laminate'>{laminate}</td>
                        <td data-label='Mounts'>{mounts}</td>
                        <td data-label='Framing'>{framing}</td>
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
