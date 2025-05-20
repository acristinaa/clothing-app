import React, { forwardRef } from "react";
import { Image, Text, View, StyleSheet, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import { Colors } from "../constants/Colors";
const SCREEN_WIDTH = Dimensions.get("window").width;

type CardProps = {
  item: {
    id: string;
    name: string;
    image: string;
  };
  cardStyle?: any;
  likeStyle?: any;
  skipStyle?: any;
  isActive?: boolean; 
  zIndex?: number;
}

const ClothingCard = forwardRef<View, CardProps>(({ 
  item, 
  cardStyle, 
  likeStyle, 
  skipStyle, 
  isActive = false,
  zIndex
}, ref) => {
  if (isActive) {
    return (
      <Animated.View ref={ref} style={[styles.card, cardStyle]}>
        <Image source={{ uri: item.image }} style={styles.cardImage} />
        <Animated.View style={[styles.likeOverlay, likeStyle]}>
          <Text style={styles.likeText}>love</Text>
        </Animated.View>
        <Animated.View style={[styles.skipOverlay, skipStyle]}>
          <Text style={styles.skipText}>nah</Text>
        </Animated.View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.swipeHint}>Swipe left to skip, right to like</Text>
        </View>
      </Animated.View>
    );
  }
  
  return (
    <View style={[styles.card, styles.nextCard, { zIndex }]}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
    </View>
  );
});

export default ClothingCard;

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_WIDTH * 1.3,
    borderRadius: 20,
    backgroundColor: Colors.light.strawberryMilk,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: "hidden",
    left: SCREEN_WIDTH * -0.00,
  },
  nextCard: {
    top: 10,
    opacity: 0.8,
  },
  cardImage: {
    width: "100%",
    height: "80%",
    resizeMode: "cover",
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  swipeHint: {
    fontSize: 14,
    color: "#888",
    marginTop: 5,
  },
  likeOverlay: {
    position: "absolute",
    top: 50,
    right: 40,
    transform: [{ rotate: "20deg" }],
    borderWidth: 4,
    borderColor: Colors.light.lightGreen,
    borderRadius: 10,
    padding: 10,
  },
  likeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.light.lightGreen,
  },
  skipOverlay: {
    position: "absolute",
    top: 50,
    left: 40,
    transform: [{ rotate: "-20deg" }],
    borderWidth: 4,
    borderColor: Colors.light.darkPink,
    borderRadius: 10,
    padding: 10,
  },
  skipText: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.light.darkPink,
  }
});