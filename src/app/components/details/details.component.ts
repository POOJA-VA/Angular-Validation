import { Component } from '@angular/core';
import { Detail } from 'src/app/Models/detail';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  name: string = '';
  email: string = '';
  phnNumber: string = '';
  btnRef: string = 'save';
  editId: number = 0;
  details: Detail[] = [
    { id: 1, name: 'pooja', email: 'pooja@1230', phoneNumber: '9876543210' },
  ];

  getRandom(): number {
    let num = Math.floor(Math.random() * 100 + 1);
    return num;
  }

  save(): Detail[] {
    if (this.editId === 0) {
      let directory: Detail = {
        id: this.getRandom(),
        name: this.name,
        email: this.email,
        phoneNumber: this.phnNumber,
      };

      this.details.push(directory);
    } else {
      this.details = this.details.map((number) => {
        if (number.id === this.editId)
          return {
            ...number,
            name: this.name,
            email: this.email,
            phoneNumber: this.phnNumber,
          };
        else return number;
      });
    }

    this.name = '';
    this.email = '';
    this.phnNumber = '';
    this.btnRef = 'save';
    return this.details;
  }

  delete(id: number): Detail[] {
    this.details = this.details.filter((dir) => dir.id !== id);
    return this.details;
  }

  edit(id: number): Detail[] {
    this.editId = id;
    const checkId = this.details.find((num) => num.id === id);
    if (checkId) {
      this.name = checkId.name;
      this.email = checkId.email;
      this.phnNumber = checkId.phoneNumber;
    }
    this.btnRef = 'update';
    console.log('edit');
    return this.details;
  }
}
