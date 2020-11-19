import React from 'react';
import { Pagination } from '@material-ui/lab';

const Page = (props)=>{
    return(
        <Pagination count={props.count} page={props.page} onChange={props.change} />
    );
}

export default Page;