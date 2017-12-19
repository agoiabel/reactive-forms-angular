import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CannotContainSpaceValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {

        const formGroup = control.parent;

        if (formGroup) {
            const firstnameControl = formGroup.get('firstname');

            if (firstnameControl.value.indexOf(" ") >= 0) {
                return {
                    cannotContainSpace: true
                }
            }
            return null;
        }


        return null;
    }
}