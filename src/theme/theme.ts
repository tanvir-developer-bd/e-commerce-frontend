import type { ThemeConfig } from 'antd';
import { theme as antdTheme } from 'antd';

const theme: ThemeConfig = {
  token: {
    colorPrimary: '#3bb77e',
    borderRadius: 8,
    controlHeight: 40,
  },
  components: {
    Button: {
      colorPrimary: '#3bb77e',   
      colorPrimaryHover: '#36a66e', 
      colorPrimaryActive: '#2e8e5e',
      borderRadius: 8,
      controlHeight: 40,
    },
  },
};

export default theme;
