import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';
import styles from '../constants/styles';


export const LoadingSpinner: React.FC = () => (
  <View style={styles.spinContainer}>
    <ActivityIndicator size="large" color={COLORS.primary} />
  </View>
);

