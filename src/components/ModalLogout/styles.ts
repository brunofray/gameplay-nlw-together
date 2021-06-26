import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    color: theme.colors.heading,
    textAlign: 'center',
    marginVertical: 29,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  button: {
    height: 56,
    width: 160,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
  },
  textButton: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
    fontSize: 15,
  }
});
