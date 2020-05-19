import React, {Component} from 'react';
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
import video1 from '../Video/Takla.mp4'
import video2 from '../Video/Johnny Sins __ TikTok __ Quarantine __ Stay At Home __ Trendy Dance __ Johnny Si_HD - Copy.mp4'
class Video extends Component {
    render() {
        return (
            <div style={{height:"500px"}} >
                <div style={{
                    position: 'absolute', left: '52%', top: '35%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <Player
                        src={video1}
                        fluid={false}
                        width={450}
                        height={300}
                    />
                </div>
                <div style={{
                    position: 'absolute', left: '18%', top: '35%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <Player
                        src={video2}
                        fluid={false}
                        width={450}
                        height={300}
                    />
                </div>

            </div>

        );
    }
}

export default Video;