import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './productDetailStyle';
import {AuthContext} from '../../context';

export function ProductDetail({route, navigation}) {
  const {state, dispatch} = useContext(AuthContext);
  const furniture = route?.params;

  const handleBackButton = () => {
    navigation?.goBack();
  };

  return (
    <KeyboardAvoidingView style={styles.productDetailContainer}>
      <View style={styles.productDetailContent}>
        <View style={styles.productDetailHeader}>
          <TouchableOpacity
            style={styles.productDetailCircleContainer}
            onPress={() => handleBackButton()}>
            <MaterialIcons name="arrow-back-ios" size={18} color="#333333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.productDetailCircleContainer}>
            <MaterialCommunityIcons
              name="cart-outline"
              size={20}
              color="#333333"
            />
            <Text style={styles.noInCartText}>{state?.cart?.length}</Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.productDetailSection}>
            <Image
              source={{uri: furniture?.image}}
              style={styles.productImage}
            />
            <View style={styles.productDetailRow}>
              <View>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.productDetailName}>
                  {furniture?.name}
                </Text>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={styles.productDetailType}>
                  {furniture?.type}
                </Text>
              </View>
              <Text style={styles.productDetailPrice}>${furniture?.price}</Text>
            </View>
            <Text style={styles.productTitleText}>Quantity</Text>
            <View style={styles.productQuantityRow}>
              <Entypo name="minus" size={23} color="#000" />
              <Text style={styles.productQuantityValue}>4</Text>
              <Entypo name="plus" size={23} color="#000" />
            </View>
            <Text style={styles.productTitleText}>Description</Text>
            <Text style={styles.productDescription}>{furniture?.description}</Text>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.addToCartBtn}>
          <Entypo name="plus" size={25} color="#fff" />
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
