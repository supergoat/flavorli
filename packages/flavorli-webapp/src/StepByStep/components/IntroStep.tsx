import React from 'react';
import {ProfileAvatar, BookmarkRecipe} from '../../components';
import {Stack, H1, H3, Text, H2} from '@flavorli/elements';
import styled from 'styled-components';
import Video from '../../components/Video';
import {IIngredient, IItem} from '../../types';

interface IIntroProps {
  author: string;
  name: string;
  image?: string;
  video?: string;
  preparationTime: number;
  cookingTime: number;
  portions: string;
  difficulty: string;
  notes?: string[];
  ingredients: IIngredient[];
  items: IItem[];
}

const Intro = ({
  author,
  name,
  image,
  video,
  preparationTime,
  cookingTime,
  portions,
  difficulty,
  notes,
  ingredients,
  items,
}: IIntroProps) => {
  return (
    <Stack
      width="100%"
      gap={32}
      background="surface"
      padding={24}
      shadow="LIGHT"
      borderRadius={8}
    >
      <Stack width="100%" gap={16}>
        <H1>{name}</H1>
        <ProfileAvatar name={author} />

        {!!notes?.length && (
          <>
            <Stack width="100%" gap={4}>
              {(notes || []).map(note => (
                <Text width="100%" key={note}>
                  {note}
                </Text>
              ))}
            </Stack>
          </>
        )}

        <Stack width="100%" gap={16}>
          <Stack direction="horizontal" width="100%">
            <InfoItem name="Hands On" value={`${preparationTime}'`} />
            <InfoItem name="Hands Off" value={`${cookingTime}'`} />
            <InfoItem name="Portions" value={portions} />
            <InfoItem name="Difficulty" value={difficulty} />
          </Stack>
        </Stack>

        {(image || video) &&
          (video ? <Video video={video} /> : <Image src={image} alt="" />)}
      </Stack>

      <Stack width="100%" gap={8}>
        <H2>Ingredients</H2>
        {ingredients.map((ingredients, index) => {
          return (
            <Stack key={index} width="100%">
              <H3>{ingredients.for}</H3>
              {ingredients.list.map(ingredient => {
                return (
                  <Label
                    htmlFor={`ingredient-${ingredient.name}-${ingredient.qty}`}
                    key={`ingredient-${ingredient.name}-${ingredient.qty}`}
                  >
                    <CheckBox
                      id={`ingredient-${ingredient.name}-${ingredient.qty}`}
                    />

                    <Stack gap={4} width="calc(100% - 24px)">
                      {ingredient.link ? (
                        <Link target="_blank" href={ingredient.link}>
                          <Stack width="100%" gap={4} direction="horizontal">
                            {ingredient.qty !== '-' && (
                              <Text intent="secondary">{ingredient.qty}</Text>
                            )}
                            <Text>{ingredient.name}</Text>
                          </Stack>
                        </Link>
                      ) : (
                        <Stack width="100%" gap={4} direction="horizontal">
                          {ingredient.qty !== '-' && (
                            <Text intent="secondary">{ingredient.qty}</Text>
                          )}
                          <Text>{ingredient.name}</Text>
                        </Stack>
                      )}
                      <Text intent="secondary">{ingredient?.notes}</Text>
                    </Stack>
                  </Label>
                );
              })}
            </Stack>
          );
        })}
      </Stack>

      {!!items.length && (
        <Stack width="100%" gap={8}>
          <H2>Items</H2>
          <Stack width="100%">
            {items.map((item, index) => {
              return (
                <Label
                  htmlFor={`item-${item.name}-${item.qty}`}
                  key={`item-${item.name}-${item.qty}`}
                >
                  <CheckBox id={`item-${item.name}-${item.qty}`} />
                  <div>
                    {item.link ? (
                      <Link target="_blank" href={item.link}>
                        {item.qty} {item.name}
                      </Link>
                    ) : (
                      <>
                        {item.qty} {item.name}
                      </>
                    )}
                    <Text intent="secondary">{item?.notes}</Text>
                  </div>
                </Label>
              );
            })}
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default Intro;

const Image = styled.img`
  width: 100%;
  border-radius: ${p => `${p.theme.spacings[8]}px`};
`;

const InfoItem = ({name, value}: {name: string; value: string}) => {
  return (
    <Stack width="25%" gap={4} alignment="center" distribution="center">
      <Text intent="highlight">{value}</Text>
      <Text fontSize={14} intent="secondary">
        {name}
      </Text>
    </Stack>
  );
};

const CheckBox = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  flex-shrink: 0;
  margin-right: 8px;
`;

const Link = styled.a`
  color: ${p => p.theme.colors.primary};
`;

const Label = styled.label`
  display: flex;
  width: 100%;
  padding: 8px 0;
  width: 100%;
`;
