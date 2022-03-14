import React from 'react';
import { Grid } from './Styled/divs/Styled';
import { SInput } from './Styled/forms/Styled';

export function BasicInfoForm({ name, handleChange, user }) {
    return (
        <Grid gap="2rem">
            <SInput
                type="text"
                placeholder="Enter a name..."
                name="name"
                value={name}
                required
                onChange={handleChange}
            />
            <SInput
                type="email"
                placeholder="Email"
                name="email"
                value={user.email}
                bg="var(--off2)"
                disabled
            />
        </Grid>
    );
}
