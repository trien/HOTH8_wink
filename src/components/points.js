
import React from 'react';

import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

import AlbumIcon from '@material-ui/icons/Album';
export default function Page(props) {
const direction = props.d ||''
return (
    <React.Fragment>
        <Grid item>
            {props.desc && <small>{props.desc}</small>}&nbsp;
            <Tooltip title={direction + ' '+ props.nb + ' points'}>
                <Badge badgeContent={props.nb} color="primary">
                    <AlbumIcon />
                </Badge>
            </Tooltip>
        </Grid>
    </React.Fragment>
);
}