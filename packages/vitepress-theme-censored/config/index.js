export const defaultConfig = {
  // some default configuration
};

export const defineConfig = (config) => {
  return {
    ...defaultConfig,
    ...config
  };
};