import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Event } from '../types';
import styles from '../constants/styles';

interface EventCardProps {
  event: Event;
  onPress: () => void;
}



export const EventCard: React.FC<EventCardProps> = ({ event, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {event.title}
        </Text>
        <Text style={styles.dateTime}>
          {event.date}, {event.time}
        </Text>
        <Text style={styles.EventDescriptionCard} numberOfLines={2}>
          {event.shortDescription}
        </Text>
        <Text style={styles.location} numberOfLines={1}>
           {event.location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

