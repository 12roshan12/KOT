import { Injectable } from '@angular/core';
declare let alertify: any;
import Swal from 'sweetalert2';
declare let swal: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
  constructor() { }

  Confirm(message: string, type: string, okCallback: () => any) {
    if (type === 'Reset') {
      Swal.fire({
        title: 'Are you sure?',
        text: message,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: type
      }).then((result) => {
        if (result.isConfirmed) {
          okCallback();
        }
      });
    }
    if (type === 'Add') {
      Swal.fire({
        title: 'Are you sure?',
        text: message,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: type
      }).then((result) => {
        if (result.isConfirmed) {
          okCallback();
        }
      });
    }
    if (type === 'Update') {
      Swal.fire({
        title: 'Are you sure?',
        text: message,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: type
      }).then((result) => {
        if (result.isConfirmed) {
          okCallback();
        }
      });
    }
    if (type === 'Delete') {
      Swal.fire({
        title: 'Are you sure?',
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: type
      }).then((result) => {
        if (result.isConfirmed) {
          okCallback();
        }
      });
    }

    if (type === 'Approve') {
      Swal.fire({
        title: 'Are you sure?',
        text: message,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          okCallback();
        }
      });
    }

  }

  Error(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message
    });

  }


  Error1(title: string, message: string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: (message),

    });

  }


  Success(message: string) {
    Swal.fire({
      icon: 'success',
      title: 'Success !',
      text: (message),
    });


  }

  Message(message: string) {
    Swal.fire({
      icon: 'info',
      title: 'You have a Message',
      text: (message)

    });
  }

  Warning(message: string) {
    Swal.fire({
      icon: 'warning',
      title: 'Warning',
      text: (message)
    });
  }







}
