import styled from 'styled-components';
import {fontSizes} from '../theme/fonts';
import {motion, MotionProps} from 'framer-motion';
import {colors} from '../theme/colors';

interface IText extends MotionProps {
  width?: string;
  align?: 'left' | 'center' | 'right';
  intent?: 'secondary' | 'highlight' | 'textOnPrimary';
  spacing?: {
    line?: string;
    letter?: string;
  };
  fontSize?: keyof typeof fontSizes;
  color?: keyof typeof colors;
}
export const Text = styled(motion.p)<IText>`
  font-family: ${p => p.theme.families.TitilliumWeb};
  color: ${p =>
    p.color
      ? p.theme.colors[p.color]
      : p.intent === 'secondary'
      ? p.theme.colors.secondaryTextColor
      : p.intent === 'highlight'
      ? p.theme.colors.primary
      : p.intent === 'textOnPrimary'
      ? p.theme.colors.textOnPrimary
      : p.theme.colors.textColor};
  font-size: ${p =>
    p.fontSize
      ? p.theme.fontSizes[p.fontSize]
      : p.intent === 'highlight'
      ? p.theme.fontSizes[14]
      : p.theme.fontSizes[16]};
  font-weight: ${p =>
    p.intent === 'highlight'
      ? p.theme.weights.TitilliumWeb.BOLD
      : p.theme.weights.TitilliumWeb.REGULAR};
  width: ${p => p.width};
  text-align: ${p => p.align || 'left'};
  line-height: ${p => p?.spacing?.line};
  letter-spacing: ${p => p?.spacing?.letter};
`;

export default Text;
