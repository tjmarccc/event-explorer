import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  StatusBar,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EventCard } from '../components/EventCard';
import { MOCK_EVENTS } from '../services/EventData';
import { StorageServices } from '../services/StorageServices';
import { Event, RootStackParamList } from '../types';
import { COLORS } from '../theme/colors';
import styles from '../constants/styles';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export const FavoritesScreen: React.FC<Props> = ({ navigation }) => {
  const [favoriteEvents, setFavoriteEvents] = useState<Event[]>([]);

  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [])
  );

  const loadFavorites = async () => {
    const favoriteIds = await StorageServices.getFavorites();
    const favorites = MOCK_EVENTS.filter(event =>
      favoriteIds.includes(event.id)
    );
    setFavoriteEvents(favorites);
  };

  const handleEventPress = (event: Event) => {
    navigation.navigate('EventDetails', { event });
  };

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyIcon}>❤️</Text>
      <Text style={styles.emptyTitle}>No Favorites Yet</Text>
      <Text style={styles.emptyText}>
        Start adding events to your favorites to see them here!
      </Text>
    </View>
  );

  return (
    <View style={styles.favContainer}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <View style={styles.favHeader}>
        <Text style={styles.favHeaderTitle}>Favorites</Text>
      </View>
      <FlatList
        data={favoriteEvents}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <EventCard event={item} onPress={() => handleEventPress(item)} />
        )}
        contentContainerStyle={
          favoriteEvents.length === 0 ? styles.emptyList : styles.favListContent
        }
        ListEmptyComponent={renderEmptyState}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

