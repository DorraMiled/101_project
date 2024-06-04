import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BonusService } from 'src/app/services/bonus.service';
import IWizard from 'src/app/Models/wizard';
import IWand from 'src/app/Models/wizard';

@Component({
  selector: 'app-wizard-form',
  templateUrl: './wizard-form.component.html',
  styleUrls: ['./wizard-form.component.css']
})
export class WizardFormComponent implements OnInit {
  wizardForm: FormGroup;
  wizardId: string = '';

  constructor(
    private fb: FormBuilder,
    private bonusService: BonusService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.wizardForm = this.fb.group({
      name: ['', Validators.required],
      house: ['', Validators.required],
      wands: this.fb.array([this.createWandGroup()])
    });
  }
  get wands(): FormArray {
    return this.wizardForm.get('wands') as FormArray;
  }

  createWandGroup(): FormGroup {
    return this.fb.group({
      wood: ['', Validators.required],
      core: ['', Validators.required],
      length: [0, Validators.required]
    });
  }

  addWand() {
    this.wands.push(this.createWandGroup());
  }

  removeWand(index: number) {
    this.wands.removeAt(index);
  }

  save() {
    if (this.wizardForm.valid) {
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
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.wizardId = params.get('id') || '';
      if (this.wizardId) {
        this.getById(this.wizardId);
      }
    });
  }

  getById(id: string) {
    this.bonusService.getWizardByid(id)
      .subscribe((wizard: Partial<IWizard>) => {
        this.wizardForm.patchValue({
          name: wizard.name,
          house: wizard.house
        });

        if (wizard.wand && wizard.wand.length > 0)
          this.setWands(wizard.wand ?? []);
      });
  }

  setWands(wands: Partial<IWand[]>) {
    this.wands.clear();
    wands.forEach((wand) => {
      this.wands.push(this.fb.group({
        wood: wand?.wood,
        core: wand?.core,
        length: wand?.length
      }));
    });
  }
}

