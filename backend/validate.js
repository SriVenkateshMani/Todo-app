const { z } = require("zod");

// Validate incoming todo payload
const payload = z.object({
    title: z.string(),
    description: z.string()
});

module.exports = (
    payload
)