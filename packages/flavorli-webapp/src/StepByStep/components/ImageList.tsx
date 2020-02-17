import React from 'react';
import styled from 'styled-components';
import {Stack} from '@flavorli/elements';
import ChevronRight from '../icons/right_chevron_primary.svg';
import {IImage} from '../../types';

/**
 * Implemented according to
 * @see https://w3c.github.io/aria-practices/#carousel
 */
export interface IImageListProps {
  images?: IImage[];
}
const ImageList = ({images}: IImageListProps) => {
  const [currentImage, setCurrentImage] = React.useState(1);

  const onChangeImage = (direction: 1 | -1) => {
    setCurrentImage(s => s + direction);
  };

  if (!images || images.length === 0) return null;

  return (
    <Stack width="100%" gap={16} paddingBottom={8}>
      <Stack direction="horizontal" width="100%" overflowY>
        {images.length > 1 &&
          images.map((image, index) => {
            return (
              <SmallImage
                onClick={() => setCurrentImage(index + 1)}
                key={image.alt}
                src={image.src}
                alt={image.alt}
              />
            );
          })}
      </Stack>
      <Section aria-label="List of step images">
        <ImageListContainer
          id="step-images"
          data-testid="step-images"
          aria-live="polite"
        >
          {images.map((image, index) => {
            const isCurrentImage = index === currentImage - 1;
            return (
              isCurrentImage && (
                <Stack
                  width="100%"
                  height="100%"
                  key={image.alt}
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
        </ImageListContainer>
      </Section>
    </Stack>
  );
};

export default ImageList;

const Section = styled.section`
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${p => `${p.theme.spacings[8]}px`};
  object-fit: cover;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
`;

const SmallImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: ${p => `${p.theme.spacings[4]}px`};
  object-fit: cover;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
  margin-right: 10px;
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
  flex-shrink: 0;

  img {
    flex-shrink: 0;
    margin-top: 3px;
    width: 60%;
  }
`;

const LeftArrowButton = styled(ArrowButton)`
  left: -20px;

  img {
    transform: rotate(180deg);
  }
`;

const RightArrowButton = styled(ArrowButton)`
  right: -20px;
`;

const ImageListContainer = styled(Stack)`
  max-width: 100%;
  width: calc(100vw - 73px);
  height: calc(100vw - 73px);
`;
