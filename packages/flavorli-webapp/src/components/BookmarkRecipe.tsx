import React from 'react';
import {Button, usePortal, Dialog, H2, Stack, Text} from '@flavorli/elements';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import {colors} from '@flavorli/elements/lib/theme/colors';

const el = document.createElement('div');
const BookmarkRecipe = () => {
  usePortal(el);

  const [isAddingToCookbook, setIsAddingToCookbook] = React.useState(false);

  const onSave = () => {
    setIsAddingToCookbook(false);
  };
  return (
    <>
      <Button
        intent="secondary"
        width="120px"
        onClick={() => setIsAddingToCookbook(true)}
      >
        Bookmark
      </Button>
      {isAddingToCookbook &&
        ReactDOM.createPortal(
          <Backdrop
            label="Add to cookbook"
            onClose={() => setIsAddingToCookbook(false)}
            describedbyID="add-to-cookbook"
          >
            <Modal borderRadius={4} padding={24} gap={16} shadow="LIGHT">
              <H2 id="add-to-cookbook">Select a cookbook</H2>

              <Stack gap={8} width="100%">
                <Text>Cookbooks</Text>
                <Stack width="100%">
                  <Stack
                    width="100%"
                    padding={16}
                    borderRadius={4}
                    border={`1px solid #eee`}
                    gap={4}
                  >
                    <Text>My Cookbook</Text>
                    <Text fontSize={14}>18 Recipes</Text>
                  </Stack>
                </Stack>
              </Stack>

              <Stack
                direction="horizontal"
                gap={16}
                distribution="end"
                width="100%"
              >
                <Button
                  intent="secondary"
                  onClick={() => setIsAddingToCookbook(false)}
                >
                  Cancel
                </Button>
                <Button onClick={onSave}>Save</Button>
              </Stack>
            </Modal>
          </Backdrop>,
          el,
        )}
    </>
  );
};

export default BookmarkRecipe;

const Backdrop = styled(Dialog)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${p => p.theme.colors.backdropDark};
  z-index: 1;
`;

const Modal = styled(Stack)`
  margin: 0 auto;
  margin-top: 10%;
  width: 80%;

  background: white;
`;
