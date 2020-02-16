import React from 'react';
import {Stack, H1, H2} from '@flavorli/elements';
import styled from 'styled-components';
import Info from './Info';
import Step from './Step';
import Recipe from '../../Recipe';

const Intro = ({
  author,
  name,
  image,
  preparationTime,
  cookingTime,
  portions,
  difficulty,
  notes,
}: IIntroProps) => {
  return (
    <Step>
      <Recipe
        author={author}
        name={name}
        image={image}
        preparationTime={preparationTime}
        cookingTime={cookingTime}
        portions={portions}
        difficulty={difficulty}
        notes={notes}
      />
    </Step>
  );
};

export default Intro;

interface IIntroProps {
  author: string;
  name: string;
  image: string;
  preparationTime: number;
  cookingTime: number;
  portions: string;
  difficulty: string;
  notes?: string[];
}
