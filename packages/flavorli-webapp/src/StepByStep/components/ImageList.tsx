import React from 'react';
import styled from 'styled-components';
import {Stack} from '@flavorli/elements';
import ChevronRight from '../../images/right-chevron.svg';
import {IImage} from '../types';

/**
 * Implemented according to
 * @see https://w3c.github.io/aria-practices/#carousel
 */
export interface IImageListProps {
  images: IImage[];
}
const ImageList = ({images}: IImageListProps) => {
  const [currentImage, setCurrentImage] = React.useState(1);

  const onChangeImage = (direction: 1 | -1) => {
    setCurrentImage(s => s + direction);
  };

  return (
    <section aria-label="List of step images">
      <Stack
        width="100%"
        height="100%"
        id="step-images"
        data-testid="step-images"
        aria-live="polite"
        paddingLeft={8}
        paddingRight={8}
      >
        <Stack
          width="100%"
          height="100%"
          paddingBottom={24}
          role="group"
          aria-label={`Image ${currentImage} of ${images.length}`}
        >
          <ImageContainer>
            {images.map((image, index) => {
              const isCurrentImage = index === currentImage - 1;
              return (
                isCurrentImage && <Image src={image.src} alt={image.alt} />
              );
            })}

            <LeftArrowButton
              hide={currentImage === 1}
              aria-label="Previous Image"
              aria-controls="step-images"
              onClick={() => onChangeImage(-1)}
            >
              <img src={ChevronRight} alt="" />
            </LeftArrowButton>

            <RightArrowButton
              hide={currentImage === images.length}
              aria-label="Next Image"
              aria-controls="step-images"
              onClick={() => onChangeImage(1)}
            >
              <img src={ChevronRight} alt="" />
            </RightArrowButton>
          </ImageContainer>
        </Stack>
      </Stack>
    </section>
  );
};

export default ImageList;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 300px;

  height: 300px;

  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
`;

const ArrowButton = styled.button<{hide: boolean}>`
  visibility: ${p => (p.hide ? 'hidden' : 'visible')};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
  background: rgb(255, 255, 255);

  img {
    margin-top: 3px;
    width: 60%;
  }
`;

const LeftArrowButton = styled(ArrowButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -20px;

  img {
    transform: rotate(180deg);
  }
`;

const RightArrowButton = styled(ArrowButton)`
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
`;
