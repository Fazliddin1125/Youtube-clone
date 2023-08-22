import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ApiService } from '../../service/api.service'
import { Box, Container } from '@mui/material'
import { ChannelCard, Videos } from '../'

const Channel = () => {
  const { id } = useParams()
  const [channelDetail, setChannelDetail] = useState([])
  const [videos, setVideos] = useState([])


  useEffect(() => {
    const getData = async () => {
      try {
        const dataChannelDetail = await ApiService.fetching(`channels?part=snippet&id=${id}`)
        console.log(dataChannelDetail);
        setChannelDetail(dataChannelDetail.items[0])
        const dataVideo = await ApiService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`)
        console.log(dataVideo);
        setVideos(dataVideo?.items)
      } catch (error) {
        console.log(error);
      }
    }

    getData()
  }, [])
  return (
    <Box minHeight={'95vh'} mt={'10vh'} >
      <Box>
        <Box width={'100%'} height={'300px'} zIndex={10} 
      sx={{ background: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`, backgroundPosition: "center", backgroundSize: "cover", objectFit:"cover", backgroundRepeat: "no-repeat" }} >
        
      </Box>
      <ChannelCard video={channelDetail} marginTop={"-130px"} />
      </Box>
      <Container maxWidth={"90%"} >
        <Videos videos={videos} />
      </Container>
    </Box>
    )
}

export default Channel