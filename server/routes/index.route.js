import express from 'express';
const router = express.Router();

// router.use('/users',expressJwt({ secret: config.jwtSecret }), userRoutes);
router.get('/system-health-check', (req, res) =>
res.send('OK')
);

export default router;