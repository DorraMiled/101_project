// src/app/services/toast.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    private toastSubject = new BehaviorSubject<{ message: string, iconName: string, isVisible: boolean }>({ message: '', iconName: 'check', isVisible: false });
    toastMessage$ = this.toastSubject.asObservable();

    showToast(message: string, iconName: string = 'check') {
        this.toastSubject.next({ message, iconName, isVisible: true });
        setTimeout(() => {
            this.toastSubject.next({ message: '', iconName: 'check', isVisible: false });
        }, 3000);
    }

}
