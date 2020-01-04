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
    <Section aria-label="List of step images">
      <Stack
        id="step-images"
        data-testid="step-images"
        aria-live="polite"
        width="100%"
        paddingBottom={24}
      >
        {images.map((image, index) => {
          const isCurrentImage = index === currentImage - 1;
          return (
            isCurrentImage && (
              <Stack
                width="100%"
                distribution="center"
                alignment="center"
                role="group"
                aria-label={`Image ${currentImage} of ${images.length}`}
              >
                <Image src={image.src} alt={image.alt} />
              </Stack>
            )
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
      </Stack>
    </Section>
  );
};

export default ImageList;

const Section = styled.section`
  width: 100%;
`;

const Image = styled.img`
  width: 270px;
  height: 270px;
  border-radius: ${p => `${p.theme.spacings[16]}px`};
  object-fit: cover;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
`;

const ArrowButton = styled.button<{hide: boolean}>`
  visibility: ${p => (p.hide ? 'hidden' : 'visible')};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
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
  left: 0;

  img {
    transform: rotate(180deg);
  }
`;

const RightArrowButton = styled(ArrowButton)`
  right: 0;
`;
