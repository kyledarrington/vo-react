module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '37af7ac8ddd4b7a6ba11f7bce3843a7e'),
    },
  },
});
