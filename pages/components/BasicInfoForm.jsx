import React from 'react';
import { Grid } from './Styled/divs/Styled';
import { SInput } from './Styled/forms/Styled';

export function BasicInfoForm({ name, handleChange, email }) {
    return (
        <Grid gap="2rem">
            <SInput
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={handleChange}
                required
            />
            <SInput
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleChange}
                required
            />
        </Grid>
    );
}
