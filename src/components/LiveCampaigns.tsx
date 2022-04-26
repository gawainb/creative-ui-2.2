import React from "react";

import { Box, Badge, useToken, useColorModeValue } from "@chakra-ui/react";
import Icon from "@chakra-ui/icon";
import ReactPlayer from 'react-player/lazy';
import { useRouter } from 'next/router';

const StarIcon = ({ color }) => <Icon name="star" color={color} />

export default function LiveCampaigns() {
  const router = useRouter()
  const property = {
    videoUrl: "https://youtu.be/vax0IOXIi44",
    imageAlt: "Pepsi Campaign",
    crtv: 40,
    apr: 18.78,
    title: "Pepsi - That's What I Like",
    formattedPrice: "$20,100.00",
    reviewCount: 2,
    rating: 3
  };

  const [brand400, brand200] = useToken(
    // the key within the theme, in this case `theme.colors`
    "colors",
    // the subkey(s), resolving to `theme.colors.red.100`
    ["brand.400", "brand.200"],
    // a single fallback or fallback array matching the length of the previous arg
  )

  const goTo = () => {
    router.push('/details/2')
  };

  return (
    <Box 
      onClick={() => goTo()}
      maxW="sm" 
      borderWidth="1px" 
      rounded="lg" 
      overflow="hidden" 
      alignContent={"center"} 
      height="511px" 
      width="full"
      margin={5}
      boxShadow={`inset 0 4px 0 ${brand400}, 0 0 8px ${brand200}`}>
      <ReactPlayer 
        url={property.videoUrl}
        playing={true}
        loop={true}
        width='100%'
        height='70%'
      />

      <Box p="6">
        <Box d="flex" alignItems="center">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            
          >
            {property.crtv} CRTV &bull; {property.apr} % APR
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h2"
          lineHeight="1.5"
          isTruncated
          color="white"
        >
          {property.title}
        </Box>

        <Box color={useColorModeValue("black", "white")}>
          {property.formattedPrice}
          <Box as="span" 
            bgGradient="linear(to-l, #7928CA, #e50168)"
            bgClip="text"
            fontSize="lg"
            fontWeight="extrabold" 
          >
            &nbsp;/ Prize Reward
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "pink.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
