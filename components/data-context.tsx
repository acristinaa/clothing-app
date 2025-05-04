// context/DataContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';

const DUMMY_DATA = [
  {
    id: '1',
    name: 'Casual Summer Outfit',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
  },
  // ... other items
];

type DataContextType = {
  items: typeof DUMMY_DATA;
  likedItems: string[];
  skippedItems: string[];
  currentIndex: number;
  handleLike: () => void;
  handleSkip: () => void;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedItems, setLikedItems] = useState<string[]>([]);
  const [skippedItems, setSkippedItems] = useState<string[]>([]);

  const handleLike = () => {
    const currentItem = DUMMY_DATA[currentIndex];
    setLikedItems(prev => [...prev, currentItem.id]);
    nextCard();
  };

  const handleSkip = () => {
    const currentItem = DUMMY_DATA[currentIndex];
    setSkippedItems(prev => [...prev, currentItem.id]);
    nextCard();
  };

  const nextCard = () => {
    setCurrentIndex(prev => prev + 1);
  };

  return (
    <DataContext.Provider value={{
      items: DUMMY_DATA,
      likedItems,
      skippedItems,
      currentIndex,
      handleLike,
      handleSkip
    }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};