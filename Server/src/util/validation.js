module.exports = {
    validateNewUser(req, res, next) {
        const { user_name, nick_name, password } = req.body;

        // Check for missing inputs
        if (!user_name || !nick_name || !password) {
            console.log("Missing required inputs");
            return res.status(400).json({ error: "Missing required inputs"});
        }

        // Check for additional / disallowed fields are present
        const allowedFields = ['user_name', 'nick_name', 'password'];
        const receivedFields = Object.keys(req.body);
        const invalidFields = receivedFields.filter(field => !allowedFields.includes(field));
        if (invalidFields.length > 0) {
            return res.status(400).json({ error: `Invalid field(s) prensent in request: ${invalidFields.join(', ')}` });
        }

        next();
    },

    validateExisitingUser(req, res, next) {
        const { user_name, password } = req.body;

        // Check for missing inputs
        if (!user_name || !password) {
            console.log("Missing required inputs");
            return res.status(400).json({ error: "Missing required inputs"});
        }

        // Check for additional / disallowed fields are present
        const allowedFields = ['user_name', 'password'];
        const receivedFields = Object.keys(req.body);
        const invalidFields = receivedFields.filter(field => !allowedFields.includes(field));
        if (invalidFields.length > 0) {
            return res.status(400).json({ error: `Invalid field(s) prensent in request: ${invalidFields.join(', ')}` });
        }

        next();
    }

    
}
