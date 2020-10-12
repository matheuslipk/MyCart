import { StyleSheet } from 'react-native';
import { colors } from '../../utils/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundModal,
  },
  header: {
    display: 'flex',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  btnBack: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHeader: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,

  },
});
