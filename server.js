require('dotenv').config({ debug: true }); // Enable debug logging
const app = require('./app');
const PORT = process.env.PORT || 3000;

// Validate critical environment variables
const requiredEnvVars = ['DATABASE_URL', 'JWT_SECRET'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('❌ Missing required environment variables:', missingVars.join(', '));
  console.info('💡 Create a .env file with these variables');
  process.exit(1);
}

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
  console.log(`🔐 JWT secret: ${process.env.JWT_SECRET ? 'Set' : 'Not set!'}`);
  console.log(`🗄️ Database URL: ${process.env.DATABASE_URL}`);
});