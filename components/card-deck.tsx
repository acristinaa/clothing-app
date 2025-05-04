// components/CardDeck.tsx
import { PanGestureHandler } from 'react-native-gesture-handler';
import ClothingCard from './clothing-card';
import useSwipeHandler from './swipe-handler';
import React from 'react';
type CardDeckProps = {
  data: Array<{id: string, name: string, image: string}>;
  currentIndex: number;
  gestureHandler: any;
  cardStyle: any;
  likeStyle: any;
  skipStyle: any;
}

export default function CardDeck({ 
  data, 
  currentIndex, 
  gestureHandler, 
  cardStyle, 
  likeStyle, 
  skipStyle 
}: CardDeckProps) {
  return (
    <>
      {data.map((item, index) => {
        if (index < currentIndex) return null;
        
        if (index === currentIndex) {
          return (
            <PanGestureHandler 
              key={item.id} 
              onGestureEvent={gestureHandler}
              activeOffsetX={[-20, 20]}
              failOffsetY={[-20, 20]}
            >
              <ClothingCard 
                item={item}
                cardStyle={cardStyle}
                likeStyle={likeStyle}
                skipStyle={skipStyle}
                isActive={true}
              />
            </PanGestureHandler>
          );
        }
        
        return (
          <ClothingCard 
            key={item.id}
            item={item}
            zIndex={data.length - index}
            isActive={false}
          />
        );
      })}
    </>
  );
}