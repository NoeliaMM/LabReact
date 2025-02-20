import {validateForm} from './login.validation';
import {Credentials} from './login.vm';

describe('pages/login/login.validation.ts', () => {
    it('should return succed if user and password are not empty', () => {

        const credentials: Credentials = { user: 'noe', password: '123' };
        const {succedded,errors} = validateForm(credentials);

        expect(succedded).toBeTruthy();
        expect(errors.user).toEqual("");
        expect(errors.user).toEqual("");
    });
    it('should return error if user is empty', () => {

        const credentials: Credentials = { user: '', password: '123' };
        const {succedded,errors}  = validateForm(credentials);

        expect(succedded).toBeFalsy();
        expect(errors.user).toEqual("Debe informar el campo usuario");
    });

    it('should return error if user is empty', () => {

        const credentials: Credentials = { user: 'noe', password: '' };
        const {succedded,errors}  = validateForm(credentials);

        expect(succedded).toBeFalsy();
        expect(errors.password).toEqual("Debe informar el campo contraseña");
    });

});


