import React from 'react';
import {
  Stack,
  Text,
  Scroll,
  Button,
  useFocusFirstDescendant,
} from '@flavorli/elements';
import {IStep} from '../types';
import Timer from './Timer';
import Links from './Links';
import Tag from './Tag';
import Kitchenware from './Kitchenware';
import Ingredients from './Ingredients';
import styled from 'styled-components';
import ImageList from './ImageList';
import ChevronRight from '../../images/right-chevron.svg';

interface IStepProps {
  isDialog?: boolean;
  step: IStep;
  noOfSteps: number;
  onChangeStep: (direction: 1 | -1) => void;
  onViewStep: (stepNo: number) => void;
  onClose?: () => void;
  className?: string;
}
export default ({
  isDialog,
  step,
  noOfSteps,
  onChangeStep,
  onViewStep,
  onClose,
  className,
}: IStepProps) => {
  const [currentImage, setCurrentImage] = React.useState(1);

  const refEl = React.useRef<HTMLDivElement>(null);

  useFocusFirstDescendant(refEl);

  const onChangeImage = (direction: 1 | -1) => {
    setCurrentImage(s => s + direction);
  };

  return (
    <Stack
      ref={refEl}
      className={className}
      width="100%"
      height="100%"
      background="surface"
      borderRadiusTopLeft={isDialog ? undefined : 24}
      borderRadiusTopRight={isDialog ? undefined : 24}
      paddingBottom={24}
      role="group"
      aria-label={`Step ${step.no} of ${noOfSteps}`}
    >
      {step.type !== 'MISE_EN_PLACE_STEP' && (
        <Stack paddingLeft={24} paddingTop={24} width="100%">
          <StepNo>{step.no}</StepNo>
        </Stack>
      )}

      {step.type === 'MISE_EN_PLACE_STEP' && (
        <Stack paddingLeft={48} paddingTop={48} paddingBottom={8} width="100%">
          <Stack gap={4}>
            <Heading>Mise en place</Heading>
            <SubHeading>Preparation</SubHeading>
          </Stack>
        </Stack>
      )}

      <Scroll>
        <Stack
          paddingTop={step.type === 'MISE_EN_PLACE_STEP' ? 8 : 48}
          paddingRight={48}
          paddingLeft={48}
          gap={16}
          height="100%"
          width="100%"
        >
          <Tag tag={step.tag} />

          <Links links={step.links} onViewStep={onViewStep} />

          <Kitchenware kitchenware={step.kitchenware} />

          <Ingredients ingredients={step.ingredients} />

          <Text spacing={{line: '1.5'}} id="step-description">
            {step.description}
          </Text>

          {step.timer && <Timer timer={step.timer} />}

          {step?.images && step?.images?.length > 0 && (
            <ImageList>
              <Stack
                width="100%"
                height="100%"
                paddingBottom={24}
                role="group"
                aria-label={`Image ${step.no} of ${step?.images?.length}`}
              >
                <ImageContainer>
                  {step.images.map((image, index) => {
                    const isCurrentImage = index === currentImage - 1;
                    return (
                      isCurrentImage && (
                        <Image src={image.src} alt={image.alt} />
                      )
                    );
                  })}
                  {currentImage !== 1 && (
                    <LeftArrowButton onClick={() => onChangeImage(-1)}>
                      <img src={ChevronRight} alt="" />
                    </LeftArrowButton>
                  )}
                  {currentImage !== step?.images?.length && (
                    <RightArrowButton onClick={() => onChangeImage(1)}>
                      <img src={ChevronRight} alt="" />
                    </RightArrowButton>
                  )}
                </ImageContainer>
              </Stack>
            </ImageList>
          )}
        </Stack>
      </Scroll>

      <Stack
        direction="horizontal"
        gap={8}
        distribution="end"
        width="100%"
        paddingTop={16}
        paddingLeft={48}
        paddingRight={48}
      >
        {!isDialog && (
          <>
            <Button
              aria-label="Previous Step"
              aria-controls="recipe-steps"
              tabIndex={step.no === 1 ? -1 : undefined}
              intent="secondary"
              onClick={() => onChangeStep(-1)}
            >
              Previous
            </Button>

            {step.no !== noOfSteps && (
              <Button
                aria-label="Next Step"
                aria-controls="recipe-steps"
                onClick={() => onChangeStep(1)}
                width="100%"
              >
                Continue
              </Button>
            )}
          </>
        )}
        {isDialog && (
          <Button width="100%" intent="secondary" onClick={onClose}>
            Close
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

const StepNo = styled.p`
  font-family: ${p => p.theme.families.Pacifico};
  font-size: ${p => p.theme.fontSizes[48]};
  color: ${p => p.theme.colors.primary};
  font-weight: normal;
`;

const Heading = styled.h1`
  font-family: ${p => p.theme.families.Pacifico};
  font-size: ${p => p.theme.fontSizes[32]};
  color: ${p => p.theme.colors.primary};
  font-weight: normal;
`;

const SubHeading = styled.h2`
  font-family: ${p => p.theme.families.PatrickHand};
  font-size: ${p => p.theme.fontSizes[24]};
  color: ${p => p.theme.colors.tagRed};
  font-weight: normal;
`;

const Image = styled.img`
  width: 300px;

  height: 300px;

  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
`;

const ImageContainer = styled.div`
  position: relative;
`;

const ArrowButton = styled.button`
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
