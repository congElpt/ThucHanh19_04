import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SearchBar from '../components/SearchBar';
import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';
import { COLORS } from '../constants/colors';

const homeSections = {
  exclusive: [
    {
      id: 'p1',
      name: 'Organic Bananas',
      subtitle: '7pcs, Price',
      price: 4.99,
      image: require('../../assets/images/banana.jpg'),
    },
    {
      id: 'p2',
      name: 'Red Apple',
      subtitle: '1kg, Price',
      price: 4.99,
      image: require('../../assets/images/apple.png'),
    },
  ],
  bestSelling: [
    {
      id: 'p3',
      name: 'Bell Pepper Red',
      subtitle: '1kg, Price',
      price: 4.99,
      image: require('../../assets/images/Beef_bone.png'),
    },
    {
      id: 'p4',
      name: 'Fresh Ginger',
      subtitle: '250gm, Price',
      price: 4.99,
      image: require('../../assets/images/ginger.png'),
    },
  ],
  groceries: [
    {
      id: 'p5',
      name: 'Beef Bone',
      subtitle: '1kg, Price',
      price: 4.99,
      image: require('../../assets/images/Beef_bone.png'),
    },
    {
      id: 'p6',
      name: 'Broiler Chicken',
      subtitle: '1kg, Price',
      price: 4.99,
      image: require('../../assets/images/BroilerChicken.png'),
    },
  ],
};

export default function HomeScreen({ onOpenProduct }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* HEADER ICON */}
        <View style={styles.headerIcon}>
          <Image
            source={require('../../assets/images/icon_carrot_home.png')}
            style={styles.carrot}
            resizeMode="contain"
          />
        </View>

        {/* LOCATION */}
        <View style={styles.locationRow}>
          <Ionicons name="location-sharp" size={16} color="#4C4F4D" />
          <Text style={styles.locationText}>Dhaka, Banassre</Text>
        </View>

        {/* SEARCH */}
        <SearchBar />

        {/* BANNER */}
        <View style={styles.banner}>
          <Image
            source={require('../../assets/images/sell_banner.png')}
            style={styles.bannerImg}
          />
        </View>

        {/* DOT */}
        <View style={styles.sliderDots}>
          <View style={[styles.dotItem, styles.dotActive]} />
          <View style={styles.dotItem} />
          <View style={styles.dotItem} />
        </View>

        {/* EXCLUSIVE */}
        <SectionHeader title="Exclusive Offer" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.list}>
          {homeSections.exclusive.map((item) => (
            <ProductCard key={item.id} item={item} onPress={onOpenProduct} />
          ))}
        </ScrollView>

        {/* BEST SELL */}
        <SectionHeader title="Best Selling" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.list}>
          {homeSections.bestSelling.map((item) => (
            <ProductCard key={item.id} item={item} onPress={onOpenProduct} />
          ))}
        </ScrollView>

        {/* GROCERIES */}
        <SectionHeader title="Groceries" />

        <View style={styles.smallRow}>
          <View style={[styles.smallCard, { backgroundColor: '#F8EFE4' }]}>
            <Text style={styles.smallText}>Pulses</Text>
          </View>
          <View style={[styles.smallCard, { backgroundColor: '#F0E4D8' }]}>
            <Text style={styles.smallText}>Rice</Text>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.list}>
          {homeSections.groceries.map((item) => (
            <ProductCard key={item.id} item={item} onPress={onOpenProduct} />
          ))}
        </ScrollView>

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  headerIcon: {
    alignItems: 'center',
    marginTop: 10,
  },

  carrot: {
    width: 28,
    height: 28,
  },

  locationRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
    marginBottom: 14,
    gap: 4,
  },

  locationText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4C4F4D',
  },

  banner: {
    marginHorizontal: 20,
    borderRadius: 16,
    overflow: 'hidden',
    height: 110,
  },

  bannerImg: {
    width: '100%',
    height: '100%',
  },

  sliderDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    gap: 6,
  },

  dotItem: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ccc',
  },

  dotActive: {
    width: 16,
    backgroundColor: COLORS.primary,
  },

  list: {
    paddingHorizontal: 20,
  },

  smallRow: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 20,
  },

  smallCard: {
    flex: 1,
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 14,
  },

  smallText: {
    fontSize: 16,
    fontWeight: '600',
  },
});