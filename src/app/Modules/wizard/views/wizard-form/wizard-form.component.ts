import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BonusService } from 'src/app/services/bonus.service';
import IWizard from 'src/app/Models/wizard';
import IWand from 'src/app/Models/wizard';
import { take } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-wizard-form',
  templateUrl: './wizard-form.component.html',
  styleUrls: ['./wizard-form.component.css']
})
export class WizardFormComponent implements OnInit {


  //for fixed form inputs
  protected formTemplate = [
    { label: 'Wizard name', ControlName: 'name' },
    { label: 'Wizard house', ControlName: 'house' }

  ]

  //for form array inputs
  protected formarrayTemplate = [
    { label: 'Wand Wood', ControlName: 'wood' },
    { label: 'Wand Core', ControlName: 'core' },
    { label: 'Wand Length', ControlName: 'length' }
  ]

  //for form buttons 
  protected formbutton = [

    { type: 'button', label: 'Add Wand', Action: () => this.addWand({}) },
    { type: 'submit', label: 'Add', Action: () => { } },

  ]

  // main wozard form
  protected wizardForm!: FormGroup;

  // current wizard ID
  protected wizardId: string = '';

  constructor(
    private fb: FormBuilder,
    private bonusService: BonusService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // get current wizard ID
    this.wizardId = this.route.snapshot.params['id'];

    // create initial wizard fprm
    this.createForm();

    // get wizard details
    if (this.wizardId !== '0')
      this.getWizardDetails(this.wizardId);
  }


  getWizardDetails(id: string) {
    this.bonusService.getWizardByid(id)
      .pipe(take(1))
      .subscribe({
        next: (wizard: Partial<IWizard>) => {
          this.patchForm(wizard);

          if (wizard.wands && wizard.wands.length > 0)
            this.syncViewToIncludeWands(wizard.wands ?? []);
        }
      });
  }

  save() {
    if (!this.wizardForm.valid) return false;


    const wizard: IWizard = this.wizardForm.value;
    if (this.wizardId !== '0') {
      this.bonusService.edit(this.wizardId, wizard).subscribe({
        next: (data) => {
          this.router.navigateByUrl('wizards');
        },
        error: (er) => {
          console.log(er);
        }
      });
    } else {
      this.bonusService.create(wizard).subscribe({
        next: (data) => {
          this.router.navigateByUrl('wizards');
        },
        error: (er) => {
          console.log(er);
        }
      });
    }
    return true
  }

  syncViewToIncludeWands(wands: Partial<IWand[]>) {
    // this.wands.clear();
    wands.forEach((wand) => {
      this.addWand(wand);
    });
  }

  // #region FORM METHODS
  // **** FORM RELATED METHODS *****

  createForm() {
    this.wizardForm = this.fb.group({
      name: ['', Validators.required],
      house: ['', Validators.required],
      wands: this.fb.array([])
    });
  }

  patchForm(payload: Partial<IWizard>) {
    this.wizardForm.patchValue({
      name: payload.name,
      house: payload.house
    });
  }

  // get form array of current formGroup (all wands)
  get wands(): FormArray {
    return this.wizardForm.get('wands') as FormArray;
  }

  // add new formGroup to formArray (new wand)
  addWand(payload: any) {
    const NEW_WAND_FORM_GROUP = this.fb.group({
      wood: [payload?.wood, Validators.required],
      core: [payload?.core, Validators.required],
      length: [payload?.length, Validators.required]
    });

    this.wands.push(NEW_WAND_FORM_GROUP);
  }

  // remove formGroup from formArray (remove wand)
  removeWand(index: number) {
    this.wands.removeAt(index);
  }

}

