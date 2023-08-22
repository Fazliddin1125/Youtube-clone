import { CardContent, Box, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from "@mui/icons-material"
import { Link } from 'react-router-dom'
const ChannelCard = ({ video, marginTop }) => {
    return (
       
        <Box sx={{ boxShadow: 'none', borderRadius: "20px", display: "flex", justifyContent: 'center', alignItems: 'center', width: { xs: "356px", md: '320px' }, height: "326px", margin: "auto", marginTop: marginTop }} >
           <Link to={`/channel/${video?.id?.channelId}`} >
           <CardContent sx={{ display: "flex", justifyContent: "center", textAlign: "center", flexDirection: "column" }} >
                <Typography display={'flex'} width={'100%'} justifyContent={'center'} alignItems={'center'} >
                
                <CardMedia image={video?.snippet?.thumbnails?.high?.url} alt={video?.snippet?.title} sx={{ borderRadius: "50%", height: "180px", width: "180px", mb: "2", border: "1px solid #e3e3e3", textAlign: "center"}} />
                </ Typography>
                <>
                <Typography variant='h6' >
                    {video?.snippet?.title}{" "}
                    <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
                </Typography>
                {video?.statistics?.subscriberCount && (
                    <Typography>
                        {parseInt(video?.statistics?.subscriberCount).toLocaleString("en-US")} Subscribers
                    </Typography>
                )}
                </>
            </CardContent>
           </Link>
            

        </Box>
       
        
    )
}

export default ChannelCard