import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

function formatPrice(value) {
  return `$${value.toFixed(2)}`;
}

export default function ProductDetailScreen({ product, onBack }) {
  const [qty, setQty] = useState(1);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* TOP BAR */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={onBack}>
            <Ionicons name="chevron-back" size={24} color={COLORS.text} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Feather name="upload" size={20} color={COLORS.text} />
          </TouchableOpacity>
        </View>

        {/* IMAGE */}
        <View style={styles.imageBox}>
          <Image
            source={product?.image}
            style={styles.image}
            resizeMode="contain"
          />

          <View style={styles.dots}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* CONTENT */}
        <View style={styles.body}>
          
          {/* TITLE */}
          <View style={styles.titleRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{product?.name}</Text>
              <Text style={styles.sub}>{product?.subtitle}</Text>
            </View>

            <TouchableOpacity>
              <Feather name="heart" size={22} color="#7C7C7C" />
            </TouchableOpacity>
          </View>

          {/* QTY + PRICE */}
          <View style={styles.qtyRow}>
            <View style={styles.qtyWrap}>
              <TouchableOpacity onPress={() => setQty((v) => Math.max(1, v - 1))}>
                <AntDesign name="minus" size={18} color="#B3B3B3" />
              </TouchableOpacity>

              <View style={styles.qtyBox}>
                <Text style={styles.qtyText}>{qty}</Text>
              </View>

              <TouchableOpacity onPress={() => setQty((v) => v + 1)}>
                <AntDesign name="plus" size={18} color={COLORS.primary} />
              </TouchableOpacity>
            </View>

            <Text style={styles.price}>{formatPrice(product?.price || 0)}</Text>
          </View>

          {/* DETAIL */}
          <View style={styles.section}>
            <View style={styles.row}>
              <Text style={styles.sectionTitle}>Product Detail</Text>
              <Feather name="chevron-down" size={20} />
            </View>

            <Text style={styles.desc}>
              {product?.description || 'Apples are nutritious. Apples may be good for weight loss and improve gut health.'}
            </Text>
          </View>

          {/* NUTRITIONS */}
          <View style={styles.section}>
            <View style={styles.row}>
              <Text style={styles.sectionTitle}>Nutritions</Text>
              <View style={styles.right}>
                <Text style={styles.tag}>100gr</Text>
                <Feather name="chevron-right" size={18} />
              </View>
            </View>
          </View>

          {/* REVIEW */}
          <View style={styles.section}>
            <View style={styles.row}>
              <Text style={styles.sectionTitle}>Review</Text>
              <View style={styles.right}>
                <Text style={styles.stars}>★★★★★</Text>
                <Feather name="chevron-right" size={18} />
              </View>
            </View>
          </View>

          {/* BUTTON */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add To Basket</Text>
          </TouchableOpacity>

        </View>
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
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  imageBox: {
    marginTop: 10,
    backgroundColor: '#F2F3F2',
    borderRadius: 20,
    marginHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },

  image: {
    width: '85%',
    height: 220,
  },

  dots: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 6,
  },

  dot: {
    width: 6,
    height: 6,
    backgroundColor: '#ccc',
    borderRadius: 3,
  },

  activeDot: {
    width: 16,
    backgroundColor: COLORS.primary,
  },

  body: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  name: {
    fontSize: 26,
    fontWeight: '700',
    color: COLORS.text,
  },

  sub: {
    color: COLORS.subText,
    marginTop: 4,
  },

  qtyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  qtyWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  qtyBox: {
    width: 44,
    height: 44,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  qtyText: {
    fontSize: 18,
    fontWeight: '600',
  },

  price: {
    fontSize: 26,
    fontWeight: '700',
  },

  section: {
    borderTopWidth: 1,
    borderColor: '#E2E2E2',
    paddingVertical: 16,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },

  desc: {
    marginTop: 10,
    color: COLORS.subText,
    lineHeight: 20,
  },

  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  tag: {
    backgroundColor: '#eee',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    fontSize: 12,
  },

  stars: {
    color: '#F3603F',
    letterSpacing: 2,
  },

  button: {
    marginTop: 20,
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});