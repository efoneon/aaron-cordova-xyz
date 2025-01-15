import qodeStackConfig from '@qodestack/prettier-config';

export default {
  ...qodeStackConfig,
  semi: true,
  plugins: [
    'prettier-plugin-tailwindcss', // Load this last!
  ],
  tailwindFunctions: ['clsx'],
};
