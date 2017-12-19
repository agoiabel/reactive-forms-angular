import { FormGroup } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
    static matchPassword(control: AbstractControl) : ValidationErrors | null {
        
        const formGroup = control.parent;

        if (formGroup) {
            const passwordControl = formGroup.get('password');
            const passwordConfirmControl = formGroup.get('passwordConfirmation');

            if (passwordControl && passwordConfirmControl) {
                const password = passwordControl.value;
                const confirm_password = passwordConfirmControl.value;

                if (password !== confirm_password) {
                    return {
                        matchPassword: true
                    }
                }
                return null;
            }
        }


        return null;
    }
}