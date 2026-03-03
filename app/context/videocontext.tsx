import { createContext,  useState} from "react";

const [src,setSrc] = useState("https://www.youtube.com/embed/hIQ-RrU_r7M")
const VideoContext = createContext({
    src,setSrc
})

export default VideoContext;