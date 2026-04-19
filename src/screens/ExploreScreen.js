import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import SearchBar from '../components/SearchBar';
import { COLORS } from '../constants/colors';

const categories = [
  {
    id: 'c1',
    title: 'Fresh Fruits\n& Vegetable',
    image: require('../../images/freshFruits&vege.png'),
    bg: '#EEF7F1',
    border: '#B4E1C3',
  },
  {
    id: 'c2',
    title: 'Cooking Oil\n& Ghee',
    image: require('../../images/Cookingoil&ghee.png'),
    bg: '#FFF6EB',
    border: '#F6D1A8',
  },
  {
    id: 'c3',
    title: 'Meat & Fish',
    image: require('../../images/meat&fish.png'),
    bg: '#FDEEEF',
    border: '#F1C3C8',
  },
  {
    id: 'c4',
    title: 'Bakery & Snacks',
    image: require('../../images/bakery&snacks.png'),
    bg: '#F5EFFA',
    border: '#DCC9F0',
  },
  {
    id: 'c5',
    title: 'Dairy & Eggs',
    image: require('../../images/dairy&eggs.png'),
    bg: '#FFF9E8',
    border: '#F1E0A4',
  },
  {
    id: 'c6',
    title: 'Beverages',
    image: require('../../images/beverages.png'),
    bg: '#EDF7FD',
    border: '#C7E4F7',
  },
];

export default function ExploreScreen({ onOpenBeverages }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* TITLE */}
        <Text style={styles.title}>Find Products</Text>

        {/* SEARCH */}
        <SearchBar />

        {/* GRID */}
        <View style={styles.grid}>
          {categories.map((item) => {
            const isBeverage = item.title === 'Beverages';

            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.9}
                style={[
                  styles.card,
                  { backgroundColor: item.bg, borderColor: item.border },
                ]}
                onPress={isBeverage ? onOpenBeverages : undefined}
              >
                {/* IMAGE */}
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode="contain"
                />

                {/* TEXT */}
                <Text style={styles.text}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

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

  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 16,
    marginBottom: 16,
    color: COLORS.text,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  card: {
    width: '47%',
    borderRadius: 18,
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 16,
  },

  image: {
    width: 90,
    height: 70,
    marginBottom: 12,
  },

  text: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
    lineHeight: 22,
  },
});