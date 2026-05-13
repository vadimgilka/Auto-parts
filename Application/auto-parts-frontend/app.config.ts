import 'dotenv/config';

export default {
  expo: {
    name: "Auto Parts",
    slug: "auto-parts",
    extra: {
      API_URL: process.env.API_URL,
    },
  },
};
