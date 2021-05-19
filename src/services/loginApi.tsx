class LoginApi {
    verifyCredentials(email: string, password: string) {
        if (email === 'admin@admin.com' && password === '4321') {
            return true;
        }
        else {
            return false;
        }
    }
}

export default new LoginApi();