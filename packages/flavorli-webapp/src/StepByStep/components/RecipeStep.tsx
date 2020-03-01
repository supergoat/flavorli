import React from 'react';
import {IStep} from '../../types';
import Tag from './Tag';

import StepTasks from './StepTasks';
import {Stack, Text, Icon} from '@flavorli/elements';
import styled, {keyframes, css} from 'styled-components';
import ImageList from './ImageList';

interface IRecipeStepProps {
  step: IStep;
}
const RecipeStep = ({step}: IRecipeStepProps) => {
  return (
    <Stack width="100%" gap={16}>
      <Dot />

      <Tag tag={`for ${step.for}`} />
      {step?.notes && (
        <Stack
          background="primary"
          padding={16}
          gap={8}
          borderRadius={4}
          width="100%"
          direction="horizontal"
        >
          <Icon name="exclamation" />

          <Stack width="calc(100% - 26px)" gap={4}>
            {(step?.notes || []).map(note => (
              <Text width="100%" key={note} color="textOnPrimary">
                {note}
              </Text>
            ))}
          </Stack>
        </Stack>
      )}

      {(step.images || step.video) &&
        (step.video ? (
          <Video video={step.video} />
        ) : (
          <ImageList images={step.images} />
        ))}

      <StepTasks tasks={step.tasks} />
    </Stack>
  );
};

export default RecipeStep;

const Video = ({video}: {video: string}) => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [isVideoLoading, setIsVideoLoading] = React.useState(true);
  const [isVideoPaused, setIsVideoPaused] = React.useState(true);

  const [startTime, endTime] = video.split('#t=')[1].split(',');

  const onToggleVideo = () => {
    if (videoRef?.current?.paused) {
      if (videoRef?.current && endTime) {
        if (videoRef?.current?.currentTime >= Number(endTime)) {
          videoRef.current.load();
        }
      }

      videoRef?.current?.play?.();
    } else {
      videoRef?.current?.pause?.();
    }
  };

  function onPlay() {
    setIsVideoPaused(false);
  }

  function onPause() {
    setIsVideoPaused(true);
  }

  React.useEffect(() => {
    const onLoadStart = () => {
      setIsVideoLoading(true);
    };
    const onCanPlay = () => {
      setIsVideoLoading(false);
    };
    videoRef?.current?.addEventListener('loadstart', onLoadStart);
    videoRef?.current?.addEventListener('canplay', onCanPlay);

    return () => {
      videoRef?.current?.removeEventListener('loadstart', onLoadStart);
      videoRef?.current?.removeEventListener('canplay', onCanPlay);
    };
  }, []);

  React.useEffect(() => {
    // Playing event
    videoRef?.current?.addEventListener('playing', onPlay);

    // Pause event
    videoRef?.current?.addEventListener('pause', onPause);

    return () => {
      videoRef?.current?.removeEventListener('play', onPlay);
      videoRef?.current?.removeEventListener('pause', onPause);
    };
  });

  return (
    <Media>
      <video ref={videoRef} width="100%" height="100%" playsInline>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Controls onClick={onToggleVideo} isVideoPaused={isVideoPaused}>
        {isVideoLoading && <Icon name="chef_male" />}
        {!isVideoLoading &&
          (isVideoPaused ? <Icon name="play" /> : <Icon name="pause" />)}
      </Controls>
    </Media>
  );
};

const fade = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const Controls = styled.div<{isVideoPaused: boolean}>`
  display: flex;
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;
  cursor: pointer;
  border-radius: ${p => `${p.theme.spacings[8]}px`};

  ${p =>
    !p.isVideoPaused &&
    css`
      animation: ${fade} 0.5s forwards;
      animation-delay: 1s;
    `}
`;

const Media = styled(Stack)`
  overflow: hidden;

  background: none;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  position: relative; /* If you want text inside of it */

  video {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: ${p => `${p.theme.spacings[8]}px`};
  }

  &:hover {
    ${Controls} {
      display: flex;
    }
  }
`;

const Dot = styled.div`
  position: absolute;
  top: 4px;
  left: -24px;
  width: 15px;
  height: 15px;
  background: white;
  border-radius: 50%;
  border: 2px solid ${p => p.theme.colors.tagRed};
`;
