import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import ProductCard from '../components/ProductCard';
import { COLORS } from '../constants/colors';

const beverages = [
  {
    id: 'b1',
    name: 'Diet Coke',
    subtitle: '355ml, Price',
    price: 1.99,
    image: require('../../assets/images/dietcoke.png'),
  },
  {
    id: 'b2',
    name: 'Sprite Can',
    subtitle: '325ml, Price',
    price: 1.5,
    image: require('../../assets/images/spritecan.png'),
  },
  {
    id: 'b3',
    name: 'Apple & Grape Juice',
    subtitle: '2L, Price',
    price: 15.99,
    image: require('../../assets/images/juice-apple.png'),
  },
  {
    id: 'b4',
    name: 'Orange Juice',
    subtitle: '2L, Price',
    price: 15.99,
    image: require('../../assets/images/orangerjuice.png'),
  },
  {
    id: 'b5',
    name: 'Coca Cola Can',
    subtitle: '325ml, Price',
    price: 4.99,
    image: require('../../assets/images/cocacolacan.png'),
  },
  {
    id: 'b6',
    name: 'Pepsi Can',
    subtitle: '330ml, Price',
    price: 4.99,
    image: require('../../assets/images/pepsican.png'),
  },
];

export default function BeveragesScreen({ onBack, onOpenProduct }) {
  return (
    <SafeAreaView style={styles.safe}>
      
      {/* TOP BAR */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={onBack}>
          <Ionicons name="chevron-back" size={24} color={COLORS.text} />
        </TouchableOpacity>

        <Text style={styles.title}>Beverages</Text>

        <TouchableOpacity>
          <Feather name="sliders" size={20} color={COLORS.text} />
        </TouchableOpacity>
      </View>

      {/* GRID */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {beverages.map((item) => (
            <View key={item.id} style={styles.cardWrap}>
              <ProductCard item={item} onPress={onOpenProduct} />
            </View>
          ))}
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

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 12,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  cardWrap: {
    width: '48%',
    marginBottom: 16,
  },
});