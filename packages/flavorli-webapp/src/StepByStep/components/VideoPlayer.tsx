import React from 'react';
import {Stack} from '@flavorli/elements';
import Video from '../../components/Video';

const VideoPlayer = ({video}: {video: string}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Stack
      width={isExpanded ? '100%' : '70px'}
      onClick={() => setIsExpanded(e => !e)}
    >
      <Video video={video} />
    </Stack>
  );
};

export default VideoPlayer;
