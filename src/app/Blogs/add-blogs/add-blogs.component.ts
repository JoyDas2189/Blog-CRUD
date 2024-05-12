import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BlogService } from '../../services/blog.service';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrl: './add-blogs.component.css',
})
export class AddBlogsComponent {
  blogForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _blogService: BlogService,
    private _dialogRef: MatDialogRef<AddBlogsComponent>,
    private _coreService: CoreService,
  ) {
    this.blogForm = this._formBuilder.group({
      blogTitle: '',
      summary: '',
      description: '',
      author: '',
      publishingDate: '',
      imageUrl: '',
    });
  }
  onFormSubmit() {
    if (this.blogForm.valid) {
      this._blogService.addBlogs(this.blogForm.value).subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('Location Added Successfully', 'Done');
          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }
  }
}
