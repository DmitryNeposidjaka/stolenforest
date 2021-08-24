import * as React from 'react';
import clamp from 'ramda/src/clamp';
import { useSprings, to } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { useDebouncedCallback } from 'use-debounce';

/* Styles */
import { StyledSwipeableViews } from './styles';

type ListConfig = {
  defaultItemSize: number;
  paddingLeftRight: number;
  gap: number;
  correction: number;
};

type ListDimensions = {
  width: number;
  height: number;
  itemsCount: number;
};

type ViewProps = Partial<{
  listDimensions: ListDimensions;
  activeViewIndex: number;
  viewsCount: number;
  changeViewIndex: (index: number) => void;
}>;

type View = string | string[] | JSX.Element | JSX.Element[];
type ViewFunction = (props?: ViewProps) => View;

type Props = Partial<{
  className: string;
  children: ViewFunction | View;
  style: React.CSSProperties;
  axis: 'x' | 'y';
  config: ListConfig;
  renderControls: (props?: ViewProps) => JSX.Element | JSX.Element[];
}> &
  Omit<React.DOMAttributes<HTMLDivElement>, 'children'>;

const flattenChildren = children =>
  (React.Children.toArray(children).reduce(
    (acc: any[], child: any) =>
      child.type === Symbol.for('react.fragment')
        ? acc.concat(child.props.children)
        : acc.concat(child),
    []
  )).filter(child => !!child);

const SwipeableViews: React.FC<Props> = React.memo(
  ({
    children = [],
    style = {},
    axis = 'x',
    config = {
      defaultItemSize: axis === 'x' ? window.innerWidth : window.innerHeight,
      paddingLeftRight: 0,
      gap: 0,
      get correction() {
        return 2 * this.paddingLeftRight - this.gap
      } 
    },
    renderControls,
    ...restHtmlAttributes
  }: Props) => {

    const index = React.useRef(0);

    const [listDimensions, setDimensions] = React.useState<ListDimensions>({
      width: window.innerWidth - config.correction,
      height: window.innerHeight,
      itemsCount: Math.floor((window.innerWidth - config.correction) / config.defaultItemSize) 
    });

    const [[showPrevBtn, showNextBtn], setControlsVisibility] = React.useState<boolean[]>([false, true]);

    const childrenArray = React.useMemo(
      () => 
        flattenChildren(
          typeof children === 'function' 
          ? children({ 
              listDimensions, 
              activeViewIndex: 0,
            })
          : children
        ),
      [children]
    );

    const debouncedCallback = useDebouncedCallback(
      (vw: number, vh: number) => {
        const width = vw - config.correction;
        const itemsCount = Math.floor(width / config.defaultItemSize);
        
        setDimensions({
          width,
          height: vh,
          itemsCount: itemsCount <= 0 ? 1 : itemsCount
        });
      },
      500
    );

    React.useEffect(() => {
      const resizeHandler = _ => {
        debouncedCallback(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', resizeHandler);

      return () => {
        window.removeEventListener('resize', resizeHandler);
      };
    }, []);

    const toggleControls = React.useCallback((index: number) => {
      setControlsVisibility([
        index > 0, 
        index < childrenArray.length - 1
      ])
    }, []);

    const [springs, api] = useSprings(childrenArray.length, i => {
      index.current = 0;

      return {
        x: i * listDimensions.width,
        y: i * listDimensions.height
      }
    }, [listDimensions]);

    const bind = useDrag(
      ({ active, movement: [mx, my], direction: [xDir, yDir], distance, cancel }) => {
        if (active && distance > (axis === 'x' ? listDimensions.width : listDimensions.height) / 3) {
          const clampedIndex = clamp(
            0,
            childrenArray.length - 1,
            index.current + ((axis === 'x' ? xDir : yDir) > 0 ? -1 : 1)
          );

          toggleControls(clampedIndex);

          cancel(
            //@ts-ignore
            (index.current = clampedIndex)
          );
        }


        api.start(i => {
          return {
            x: (i - index.current) * listDimensions.width + (active ? mx : 0),
            y: (i - index.current) * listDimensions.height + (active ? my : 0),
          };
        });
      },
      { 
        axis, 
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
          x: (i - index.current) * listDimensions.width,
          y: (i - index.current) * listDimensions.height,
        };
      });
    }, [listDimensions]);

    return (
      <>
        {springs.map(({ x, y }, key) => (
          <StyledSwipeableViews
            key={key}
            style={{
              ...style,
              touchAction: axis === 'x' ? 'pan-y' : 'pan-x',
              transform: to([x, y], (x, y) => axis === 'x' ? `translateX(${x}px)` : `translateY(${y}px)`)
            }}
            {...bind()}
            {...restHtmlAttributes}
          >
            {flattenChildren(
              typeof children === 'function'    
              ? children({
                  listDimensions,
                  activeViewIndex: index.current,
                  viewsCount: childrenArray.length,
                  changeViewIndex
                })
              : childrenArray)[key]}
          </StyledSwipeableViews>
        ))}

        {renderControls?.({
          activeViewIndex: index.current,
          viewsCount: childrenArray.length,
          changeViewIndex
        })}
      </>
    );
  }
);

export { SwipeableViews };
