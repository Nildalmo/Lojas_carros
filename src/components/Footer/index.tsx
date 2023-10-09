import { Flex,Link, Box } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => (
    <Box>
    <Flex>
        <Link href="https://instagram.com">
            <FaInstagram />
        </Link>
        <Link href="https://youtube.com">
            <FaYoutube />
        </Link>
        <Link href="https://twitter.com">
            <FaTwitter />
        </Link>
        <Link href="https://www.facebook.com" >
      <FaFacebook  />
      </Link>
        
       
    </Flex>
</Box> 
);

export default Footer;
