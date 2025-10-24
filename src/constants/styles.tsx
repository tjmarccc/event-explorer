import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({

  // EVENT CARD 
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    width: width - 32,
  },
  content: {
    gap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 4,
  },
  dateTime: {
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: COLORS.text,
    opacity: 0.8,
    lineHeight: 20,
  },
  location: {
    fontSize: 13,
    color: COLORS.text,
    opacity: 0.7,
    marginTop: 4,
  },

  //  LOADING SPINNER
  
   spinContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },

  //  EVENT DETAILS 

   EDcontainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  scrollView: {
    flex: 1,
  },
  EDcontent: {
    padding: 16,
    paddingBottom: 100,
  },
  title2: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 24,
  },
  infoCard: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  EventDescriptionCard: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    color: COLORS.text,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.primary,
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    color: COLORS.text,
    lineHeight: 22,
  },
  description2: {
    fontSize: 16,
    color: COLORS.text,
    lineHeight: 24,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: COLORS.background,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  favoriteButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },

  // EVENT LIST 

    elContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    padding: 16,
    paddingTop: 8,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: COLORS.card,
    borderRadius: 8,
    padding: 12,
    color: COLORS.text,
    fontSize: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  listContent: {
    paddingBottom: 16,
  },

  // FAVORITES

    favContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  favHeader: {
    padding: 16,
    paddingTop: 8,
  },
  favHeaderTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  favListContent: {
    paddingBottom: 16,
  },
  emptyList: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
    color: COLORS.text,
    opacity: 0.7,
    textAlign: 'center',
    lineHeight: 24,
  },


});

export default styles