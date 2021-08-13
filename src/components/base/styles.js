import { StyleSheet } from 'react-native';
import colors from '../../colors';

export const HEIGHT = 61;

export default StyleSheet.create({
  base: {
    flexDirection: 'row',
    borderRadius: 16,
    backgroundColor: colors.white,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
		elevation: 2,
		borderWidth: 3,
		borderColor: 'white',
		marginTop: 20,
		marginHorizontal: 16,
		paddingLeft: 16,
		paddingRight: 12,
		paddingVertical:12
  },

  leadingIconContainer: {
		marginTop: -32,
	},
    leadingIcon: {
    width: 40,
    height: 40
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
	  alignItems: 'flex-start' ,// in case of rtl the text will start from the right
	 paddingLeft:12
  },
  trailingIconContainer: {
	  width: 32,
	  height: 32,
    justifyContent: 'center',
	  alignItems: 'center',
  },

  trailingIcon: {
    width: 20,
    height: 20
  },
  text1: {
    fontSize: 14,
    fontWeight: 'bold',
	 color:'white'
  },
  text2: {
    fontSize: 12,
	 color:'white'
  }
});
