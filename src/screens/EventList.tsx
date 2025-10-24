import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StatusBar,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EventCard } from '../components/EventCard';
import { MOCK_EVENTS } from '../services/EventData';
import { Event, RootStackParamList } from '../types';
import { COLORS } from '../theme/colors';
import styles from '../constants/styles';


type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MainTabs'>;
};

export const EventListScreen: React.FC<Props> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = MOCK_EVENTS.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEventPress = (event: Event) => {
    navigation.navigate('EventDetails', { event });
  };

  return (
    <View style={styles.elContainer}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Events</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search events by name..."
          placeholderTextColor={COLORS.text + '60'}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <FlatList
        data={filteredEvents}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <EventCard event={item} onPress={() => handleEventPress(item)} />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

 
    </View>
  );
};

