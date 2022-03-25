import React from 'react';
import { Grid } from '../../Styled/divs/Styled';
import { SInput } from '../../Styled/forms/Styled';

function BasicInfoForm({ user, setFormName, formName }) {
    return (
        <Grid gap="2rem">
            <SInput
                type="text"
                placeholder="Enter a name..."
                required
                onChange={(e) => {
                    setFormName(e.target.value);
                }}
                value={formName}
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

export default BasicInfoForm
