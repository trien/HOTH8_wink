
import React from 'react';

import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

import AlbumIcon from '@material-ui/icons/Album';
export default function Page(props) {
    const direction = props.d ||''
    const nb = props.nb || '0'
return (
    <React.Fragment>
        <Grid item>
            {props.desc && <small>{props.desc}</small>}&nbsp;
            <Tooltip title={direction + ' '+ nb + ' points'}>
                <Badge badgeContent={nb} color="primary">
                    <AlbumIcon />
                </Badge>
            </Tooltip>
        </Grid>
    </React.Fragment>
);
}