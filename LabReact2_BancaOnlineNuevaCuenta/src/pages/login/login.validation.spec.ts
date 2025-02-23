import { REQUIRED_FIELD_MESSAGE } from '@/common/validations';
import {validateForm} from './login.validation';
import {Credentials} from './login.vm';

describe('pages/login/login.validation.ts', () => {
    it('should return succed if user and password are not empty', () => {

        const credentials: Credentials = { user: 'noe', password: '123' };
        const {succeeded,errors} = validateForm(credentials);

        expect(succeeded).toBeTruthy();
        expect(errors.user).toEqual("");
        expect(errors.user).toEqual("");
    });
    it('should return error if user is empty', () => {

        const credentials: Credentials = { user: '', password: '123' };
        const {succeeded,errors}  = validateForm(credentials);

        expect(succeeded).toBeFalsy();
        expect(errors.user).toEqual(REQUIRED_FIELD_MESSAGE);
    });

    it('should return error if user is empty', () => {

        const credentials: Credentials = { user: 'noe', password: '' };
        const {succeeded,errors}  = validateForm(credentials);

        expect(succeeded).toBeFalsy();
        expect(errors.password).toEqual(REQUIRED_FIELD_MESSAGE);
    });

});


