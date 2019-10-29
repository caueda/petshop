import { FormControl } from '@angular/forms';

export class CustomValidators {
  static isNameValid(formControl: FormControl): {[s: string]:boolean} {
    if(formControl.value === 'Test'){
      return {'isNameInvalid' : true};
    } else {
      return null;
    }
  }
}
