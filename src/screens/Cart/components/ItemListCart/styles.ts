import { StyleSheet } from 'react-native';
import { colors } from '../../../../utils/constants';

export default StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 4,
    paddingVertical: 4,
    marginTop: 5,
    backgroundColor: colors.secondary,
    elevation: 3,
    marginHorizontal: 4,
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  textName: {
    flex: 1,
    fontSize: 14,
  },
  viewTotal: {
    display: 'flex',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.secondary,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginHorizontal: 4,
  },
});
