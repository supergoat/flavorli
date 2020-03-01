import React from 'react';
import {Stack, Text, H2} from '@flavorli/elements';
import styled from 'styled-components';

interface INotesStepProps {
  notes?: string[];
}
const NotesStep = ({notes}: INotesStepProps) => {
  if (!notes || !notes.length) return null;
  return (
    <Stack width="100%" gap={16}>
      <Dot />
      <H2>Notes</H2>

      <Stack width="100%" gap={4}>
        {(notes || []).map(note => (
          <Text width="100%" key={note}>
            {note}
          </Text>
        ))}
      </Stack>
    </Stack>
  );
};

export default NotesStep;

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
