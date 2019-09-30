import styled from 'styled-components';

const GUTTER = 20;

const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align ? align : 'flex-start')};
  justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
  padding: ${({ noGutter }) => (noGutter ? 0 : GUTTER / 10)}rem;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: ${({ align }) => (align ? align : 'flex-start')};
  justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
  flex-wrap: ${({ noWrap }) => (noWrap ? 'no-wrap' : 'wrap')};
`;

export const Col = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
  align-items: ${({ align }) => (align ? align : 'flex-start')};
  justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
  flex-wrap: ${({ noWrap }) => (noWrap ? 'no-wrap' : 'wrap')};
  padding: 1rem;

  // Exta Small devices (phones)
  @media (min-width: ${BREAKPOINTS.xs}px) {
    width: ${({ xs }) => {
      let widthModifier = xs;
      let width = '';
      if (widthModifier) {
        switch (widthModifier) {
          case 1:
            width = '8.3333333333%';
            break;
          case 2:
            width = '16.6666666667%';
            break;
          case 3:
            width = '25%';
            break;
          case 4:
            width = '33.3333333333%';
            break;
          case 5:
            width = '41.6666666667%';
            break;
          case 6:
            width = '50%';
            break;
          case 7:
            width = '58.3333333333%';
            break;
          case 8:
            width = '66.6666666667%';
            break;
          case 9:
            width = '75%';
            break;
          case 10:
            width = '83.3333333333%';
            break;
          case 11:
            width = '91.6666666667%';
            break;
          case 12:
            width = '100%';
            break;
          default:
            break;
        }
        return width;
      } else {
        width = '100%';
        return width;
      }
    }};
  }

  // Small devices (phones)
  @media (min-width: ${BREAKPOINTS.sm}px) {
    width: ${({ xs, sm }) => {
      let widthModifier = sm ? sm : xs ? xs : null;
      let width = '';
      if (widthModifier) {
        switch (widthModifier) {
          case 1:
            width = '8.3333333333%';
            break;
          case 2:
            width = '16.6666666667%';
            break;
          case 3:
            width = '25%';
            break;
          case 4:
            width = '33.3333333333%';
            break;
          case 5:
            width = '41.6666666667%';
            break;
          case 6:
            width = '50%';
            break;
          case 7:
            width = '58.3333333333%';
            break;
          case 8:
            width = '66.6666666667%';
            break;
          case 9:
            width = '75%';
            break;
          case 10:
            width = '83.3333333333%';
            break;
          case 11:
            width = '91.6666666667%';
            break;
          case 12:
            width = '100%';
            break;
          default:
            break;
        }
        return width;
      } else {
        width = '100%';
        return width;
      }
    }};
  }

  // Medium devices (tablets)
  @media (min-width: ${BREAKPOINTS.md}px) {
    width: ${({ xs, sm, md }) => {
      let widthModifier = md ? md : sm ? sm : xs ? xs : null;
      let width = '';
      if (widthModifier) {
        switch (widthModifier) {
          case 1:
            width = '8.3333333333%';
            break;
          case 2:
            width = '16.6666666667%';
            break;
          case 3:
            width = '25%';
            break;
          case 4:
            width = '33.3333333333%';
            break;
          case 5:
            width = '41.6666666667%';
            break;
          case 6:
            width = '50%';
            break;
          case 7:
            width = '58.3333333333%';
            break;
          case 8:
            width = '66.6666666667%';
            break;
          case 9:
            width = '75%';
            break;
          case 10:
            width = '83.3333333333%';
            break;
          case 11:
            width = '91.6666666667%';
            break;
          case 12:
            width = '100%';
            break;
          default:
            break;
        }
        return width;
      } else {
        width = '100%';
        return width;
      }
    }};
  }

  // Large devices (laptops/desktops)
  @media (min-width: ${BREAKPOINTS.lg}px) {
    width: ${({ xs, sm, md, lg }) => {
      let widthModifier = lg ? lg : md ? md : sm ? sm : xs ? xs : null;
      let width = '';
      if (widthModifier) {
        switch (widthModifier) {
          case 1:
            width = '8.3333333333%';
            break;
          case 2:
            width = '16.6666666667%';
            break;
          case 3:
            width = '25%';
            break;
          case 4:
            width = '33.3333333333%';
            break;
          case 5:
            width = '41.6666666667%';
            break;
          case 6:
            width = '50%';
            break;
          case 7:
            width = '58.3333333333%';
            break;
          case 8:
            width = '66.6666666667%';
            break;
          case 9:
            width = '75%';
            break;
          case 10:
            width = '83.3333333333%';
            break;
          case 11:
            width = '91.6666666667%';
            break;
          case 12:
            width = '100%';
            break;
          default:
            break;
        }
        return width;
      } else {
        width = '100%';
        return width;
      }
    }};
  }

  // Extra large devices (large laptops/desktops)
  @media (min-width: ${BREAKPOINTS.xl}px) {
    width: ${({ xs, sm, md, lg, xl }) => {
      let widthModifier = xl
        ? xl
        : lg
        ? lg
        : md
        ? md
        : sm
        ? sm
        : xs
        ? xs
        : null;
      let width = '';
      if (widthModifier) {
        switch (widthModifier) {
          case 1:
            width = '8.3333333333%';
            break;
          case 2:
            width = '16.6666666667%';
            break;
          case 3:
            width = '25%';
            break;
          case 4:
            width = '33.3333333333%';
            break;
          case 5:
            width = '41.6666666667%';
            break;
          case 6:
            width = '50%';
            break;
          case 7:
            width = '58.3333333333%';
            break;
          case 8:
            width = '66.6666666667%';
            break;
          case 9:
            width = '75%';
            break;
          case 10:
            width = '83.3333333333%';
            break;
          case 11:
            width = '91.6666666667%';
            break;
          case 12:
            width = '100%';
            break;
          default:
            break;
        }
        return width;
      } else {
        width = '100%';
        return width;
      }
    }};
  }
`;
