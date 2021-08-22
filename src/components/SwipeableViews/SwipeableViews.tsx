import * as React from 'react';
import clamp from 'ramda/src/clamp';
import { useSprings, to } from 'react-spring';
import { useDrag } from 'react-use-gesture';

/* Styles */
import { StyledSwipeableViews, StyledNextButton, StyledBackButton } from './styles';

type Props = Partial<{
  className: string;
  children: string | string[] | JSX.Element | JSX.Element[];
  style: React.CSSProperties;
  width: number;
}> &
  Omit<React.DOMAttributes<HTMLDivElement>, 'children'>;

const SwipeableViews: React.FC<Props> = React.memo(
  ({
    children = [],
    style = {},
    width = window.innerWidth,
    ...restHtmlAttributes
  }: Props) => {
    const childrenArray: any  = React.useMemo(
      () => React.Children.toArray(children),
      [children]
    );

    const index = React.useRef(0);

    const [[renderPrevBtn, renderNextBtn], setControlsVisibility] = React.useState<boolean[]>([false, true]);

    const toggleControls = React.useCallback((index: number) => {
      setControlsVisibility([
        index > 0, 
        index < childrenArray.length - 1
      ])
    }, []);

    const [springs, api] = useSprings(childrenArray.length, i => {
      index.current = 0; 
      
      return {
        x: i * width
      }
    }, [width]);

    const bind = useDrag(
      ({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
        if (active && distance > width / 3) {
          const clampedIndex = clamp(
            0,
            childrenArray.length - 1,
            index.current + (xDir > 0 ? -1 : 1)
          );

          toggleControls(clampedIndex);

          cancel(
            //@ts-ignore
            (index.current = clampedIndex)
          );
        }


        api.start(i => {
          return {
            x: (i - index.current) * width + (active ? mx : 0)
          };
        });
      },
      { 
        axis: 'x', 
        filterTaps: true 
      }
    );

    const changeViewIndex = React.useCallback((newIndex: number) => {
      if (index.current === newIndex) {
        return;
      }

      const clampedIndex = clamp(0, childrenArray.length - 1, newIndex);

      toggleControls(clampedIndex);

      index.current = clampedIndex;

      api.start(i => {
        return {
          x: (i - index.current) * width,
        };
      });
    }, []);

    return (
      <>
        {springs.map(({ x }, key) => (
          <StyledSwipeableViews
            key={key}
            style={{
              ...style,
              transform: to([x], x => `translateX(${x}px)`)
            }}
            {...bind()}
            {...restHtmlAttributes}
          >
            {childrenArray[key]}
          </StyledSwipeableViews>
        ))}

        {renderPrevBtn && (
          <StyledBackButton onClick={() => changeViewIndex(index.current - 1)}>
            &#8668;
          </StyledBackButton>
        )}

        {renderNextBtn && (
          <StyledNextButton onClick={() => changeViewIndex(index.current + 1)}>
            &#8669;
          </StyledNextButton>
        )}
      </>
    );
  }
);

export { SwipeableViews };
