export const validatePasswordStrength = (password) => {
    // At least 8 characters long
    // Contains at least one uppercase letter
    // Contains at least one lowercase letter
    // Contains at least one number
    // Contains at least one special character (!@#$%^&*()_+{}[]:;<>,.?~\-)

    if (password.length < 8) {
        return { isValid: false, message: 'Password must be at least 8 characters long.' };
    }

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}[\]:;<>,.?~-]/.test(password);

    if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
        return {
            isValid: false,
            message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
        };
    }

    return { isValid: true, message: 'Strong password' };
};
