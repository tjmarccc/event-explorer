import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@event_explorer_favorites';

export const StorageServices = {
  async getFavorites(): Promise<string[]> {
    try {
      const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
      return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
      console.error('Error getting favorites:', error);
      return [];
    }
  },

  async addFavorite(eventId: string): Promise<void> {
    try {
      const favorites = await this.getFavorites();
      if (!favorites.includes(eventId)) {
        favorites.push(eventId);
        await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
      }
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  },

  async removeFavorite(eventId: string): Promise<void> {
    try {
      const favorites = await this.getFavorites();
      const updated = favorites.filter(id => id !== eventId);
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  },

  async isFavorite(eventId: string): Promise<boolean> {
    try {
      const favorites = await this.getFavorites();
      return favorites.includes(eventId);
    } catch (error) {
      console.error('Error checking favorite:', error);
      return false;
    }
  },
};