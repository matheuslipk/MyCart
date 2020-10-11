import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    borderWidth: 1,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  textName: {
    flex: 1,
    fontSize: 14,
  },
});
