// components/EmptyState.tsx
import { View, Text, StyleSheet } from 'react-native';

type EmptyStateProps = {
  likedCount: number;
  skippedCount: number;
}

export default function EmptyState({ likedCount, skippedCount }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.noMoreCards}>No more outfits to show!</Text>
      <Text style={styles.stats}>
        Liked: {likedCount} | Skipped: {skippedCount}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#f5f5f5',
  },
  noMoreCards: {
    fontSize: 18,
    marginTop: 100,
  },
  stats: {
    fontSize: 16,
    marginTop: 20,
    color: '#666',
  },
});