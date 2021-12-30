import { Typography,Grid,Box } from '@mui/material'
import React from 'react'

function History() {
    return (
        <div>
            <Typography align='center' sx={{marginTop:10,marginBottom:4.375}}>
                HISTORY
            </Typography>
            <Typography align='center' variant='h3' >
                We Are Passionate About<br /> What We Do
            </Typography>

            <Grid container spacing={15} sx={{marginTop:0,marginBottom:10,paddingLeft:12.5,paddingRight:12.5}}>
                <Grid item xs={12} md={8} lg={6}>
                     <Typography variant='h4'>
                         Our Origin
                     </Typography>
                     <Typography sx={{paddingTop:3.5}}>
                     Nam hendrerit nisi sed sollicitudin pellentesque. 
                     Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
                      Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa.
                       Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. 
                       Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac,
                        convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.
                        nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed
                     </Typography>
                </Grid>
                <Grid item xs={12} md={8} lg={6}>
                    <Typography variant='h4'>
                        Our Story
                    </Typography>
                    <Typography sx={{paddingTop:3.5}}>
                    Quia consequuntur magni dolores eos,
                     qui ratione voluptatem sequi nesciunt,
                      neque porro quisquam est, qui dolorem ipsum,
                       quia dolor sit amet consectetur adipisci[ng] velit,
                        sed quia non numquam [do] eius modi tempora inci[di]dunt,
                         ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                          minima veniam, quis nostrum exercitationem ullam corporis suscipit
                           laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem 
                           vel eum iure reprehenderit qui in ea voluptate velit esse,
                            quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur
                    </Typography>
                </Grid>
               
            </Grid>
        </div>
    )
}

export default History
