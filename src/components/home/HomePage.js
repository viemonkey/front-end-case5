import { Grid } from '@mui/material'
import Navbar from '../navbar/Navbar'
import SidebarLeft from '../sidebar/SidebarLeft'
import SidebarRight from '../sidebar/SidebarRight'
import { Outlet  } from "react-router-dom";
import Add from '../add/Add';

export default function HomePage() {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Navbar />
                </Grid>
                <Grid container >
                    <Grid item xs={3}>
                        <SidebarLeft />
                    </Grid>
                    <Grid item xs={6} sx={{mt:5}}>
                        <Add />
                        <Outlet />
                    </Grid>
                    <Grid item xs={3}>
                        <SidebarRight />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}