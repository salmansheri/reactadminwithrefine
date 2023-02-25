import React from 'react'; 
import { useList } from '@pankod/refine-core'; 
import {
    PieChart, 
    PropertyReferrels, 
    TotalRevenue, 
    PropertyCard, 
    TopAgent, 
} from 'components'; 
import {
    Box, 
    Typography, 
    Stack, 

} from '@pankod/refine-mui'; 

const Home = () => {
    return(
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142D">
                Dashboard
            </Typography>
            <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
                <PieChart title="Properties for sale"
                value={333}
                series={[75, 25]}
                colors={["#475be8", "#e4e8ef"]}
                />
                <PieChart title="Properties for Rent"
                value={333}
                series={[7, 25]}
                colors={["#475be8", "#e4e8ef"]}
                />
                <PieChart title="Total Customers"
                value={333}
                series={[5, 25]}
                colors={["#475be8", "#e4e8ef"]}
                /> 
                <PieChart title="Total Cities"
                value={333}
                series={[5, 25]}
                colors={["#475be8", "#e4e8ef"]}
                />

            </Box>
            <Stack mt="25px" width="100%" direction={{xs: 'column', lg: 'row'}}>
                <TotalRevenue />
                <PropertyReferrels />

            </Stack>
        </Box>
    )   
}

export default Home; 