import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'roboto',
      },
      '.input': {
        borderRadius: '6px',
        height: '5vh',
        border: 'solid 1px #D9D9D9',
        width: '100%',
      },
    },
  },

  components: {
    Button: {
      variants: {
        solid: {
          backgroundColor: '#F5222D',
          color: '#FFFFFF',
          fontFamily: 'roboto',
          fontWeight: '400',
          fontSize: '12px',
          padding: '6px 16px',
          borderRadius: '4px',
        },
      },
    },
    Text: {
      variants: {
        title: {
          fontFamily: 'Inter',
          fontWeight: '600',
          fontSize: '24px',
          color: 'rgba(0, 0, 0, 0.85)',
        },
        subtitle: {
          fontSize: '12px',
          lineHeight: '20px',
          color: 'rgba(0, 0, 0, 0.45)',
        },
        text: {
          fontSize: '14px',
          lineHeight: '20px',
          color: 'rgba(0, 0, 0, 0.65)',
        },
      },
    },
  },
});
