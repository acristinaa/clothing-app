import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '../constants/Colors';

export default function UploadPage() {
  // These functions would be implemented to handle the actual functionality
  const handleCameraUpload = () => console.log('Camera upload');
  const handleLibraryUpload = () => console.log('Library upload');
  const handleFilesUpload = () => console.log('Files upload');
  const handleCategorySelect = (category: string, type?: string) => {
    console.log('Selected:', category, type ? `(${type})` : '');
  };

  const renderCategoryButtons = (type?: string) => {
    const categories = ['Sweater', 'Jacket', 'Shoes', 'Shirts', 'T-Shirt', 'Shorts', 'Pants', 'Suits'];
    
    return (
      <View style={styles.categoryButtonsContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity 
            key={`${type}-${category}-${index}`}
            style={styles.categoryButton}
            onPress={() => handleCategorySelect(category, type)}
          >
            <Text style={styles.buttonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderAccessories = () => {
    const accessories = ['Rings', 'Belts', 'Jewerly'];
    
    return (
      <View style={styles.categoryButtonsContainer}>
        {accessories.map((accessory, index) => (
          <TouchableOpacity 
            key={`accessory-${index}`}
            style={styles.categoryButton}
            onPress={() => handleCategorySelect(accessory, 'Accessories')}
          >
            <Text style={styles.buttonText}>{accessory}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>UPLOAD PHOTO</Text>
        <View style={styles.uploadButtonsContainer}>
          <TouchableOpacity style={styles.uploadButton} onPress={handleCameraUpload}>
            <Text style={styles.buttonText}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.uploadButton} onPress={handleLibraryUpload}>
            <Text style={styles.buttonText}>Library</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.uploadButton} onPress={handleFilesUpload}>
            <Text style={styles.buttonText}>Files</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>CATEGORY</Text>
        <Text style={styles.categoryTitle}>Unisex</Text>
        {renderCategoryButtons('Unisex')}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>WOMEN</Text>
        {renderCategoryButtons('Women')}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>MEN</Text>
        {renderCategoryButtons('Men')}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ACCESSORIES</Text>
        {renderAccessories()}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.light.white,
  },
  section: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    marginBottom: 15,
  },
  uploadButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
  },
  categoryButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 20,
  },
  uploadButton: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    minWidth: 120,
    alignItems: 'center',
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    minWidth: 100,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    width: '100%',
  },
});
