import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { StorageServices } from '../services/StorageServices';
import { COLORS } from '../theme/colors';
import styles from '../constants/styles';

type Props = NativeStackScreenProps<RootStackParamList, 'EventDetails'>;

export const EventDetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { event } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    checkFavoriteStatus();
  }, []);

  const checkFavoriteStatus = async () => {
    const favoriteStatus = await StorageServices.isFavorite(event.id);
    setIsFavorite(favoriteStatus);
  };

  const toggleFavorite = async () => {
    if (isFavorite) {
      await StorageServices.removeFavorite(event.id);
      setIsFavorite(false);
    } else {
      await StorageServices.addFavorite(event.id);
      setIsFavorite(true);
    }
  };

  return (
    <View style={styles.EDcontainer}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title2}>{event.title}</Text>
          
          <View style={styles.infoCard}>
            <Text style={styles.label}> Date & Time</Text>
            <Text style={styles.info}>
              {event.date}, {event.time}
            </Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.label}> Location</Text>
            <Text style={styles.info}>{event.location}</Text>
          </View>

          <View style={styles.EventDescriptionCard}>
            <Text style={styles.label}>About This Event</Text>
            <Text style={styles.description}>{event.fullDescription}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={toggleFavorite}
          activeOpacity={0.8}>
          <Text style={styles.buttonText}>
            {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

