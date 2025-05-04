// hooks/useSwipeHandler.ts
import { runOnJS, useSharedValue, withSpring } from 'react-native-reanimated';
import { Dimensions } from 'react-native';
import { useAnimatedGestureHandler } from 'react-native-reanimated';
import { PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;

type GestureContext = {
  startX: number;
};

export default function useSwipeHandler(
  translateX: any,
  rotate: any,
  likeOpacity: any,
  skipOpacity: any,
  handleLike: () => void,
  handleSkip: () => void
) {
  return useAnimatedGestureHandler<PanGestureHandlerGestureEvent, GestureContext>({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
      rotate.value = (event.translationX / SCREEN_WIDTH) * 15;
      
      if (event.translationX > 0) {
        likeOpacity.value = Math.min(event.translationX / SWIPE_THRESHOLD, 1);
        skipOpacity.value = 0;
      } else if (event.translationX < 0) {
        skipOpacity.value = Math.min(Math.abs(event.translationX) / SWIPE_THRESHOLD, 1);
        likeOpacity.value = 0;
      }
    },
    onEnd: (event) => {
      if (event.translationX > SWIPE_THRESHOLD) {
        translateX.value = withSpring(SCREEN_WIDTH);
        runOnJS(handleLike)();
      } else if (event.translationX < -SWIPE_THRESHOLD) {
        translateX.value = withSpring(-SCREEN_WIDTH);
        runOnJS(handleSkip)();
      } else {
        translateX.value = withSpring(0);
        rotate.value = withSpring(0);
        likeOpacity.value = withSpring(0);
        skipOpacity.value = withSpring(0);
      }
    }
  });
}