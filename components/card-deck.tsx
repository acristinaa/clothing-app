// components/CardDeck.tsx
import React from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import ClothingCard from './clothing-card';
import { View, StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

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
    <View style={styles.container}>
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
              <Animated.View style={styles.cardWrapper}>
                <ClothingCard 
                  item={item}
                  cardStyle={cardStyle}
                  likeStyle={likeStyle}
                  skipStyle={skipStyle}
                  isActive={true}
                />
              </Animated.View>
            </PanGestureHandler>
          );
        }
        
        return (
          <View style={styles.cardWrapper} key={item.id}>
            <ClothingCard 
              item={item}
              zIndex={data.length - index}
              isActive={false}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardWrapper: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_WIDTH * 1.3,
    alignSelf: 'center',
  }
});