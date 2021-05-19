class LoginApi {
    async verifyCredentials(email: string, password: string) {
        if (email === 'admin@admin.com' && password === '4321') {
            return true;
        }

        return false;
    }
}

export default new LoginApi();