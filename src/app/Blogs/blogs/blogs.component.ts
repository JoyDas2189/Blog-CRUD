import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBlogsComponent } from '../add-blogs/add-blogs.component';
import { BlogService } from '../../services/blog.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'blogTitle',
    'summary',
    'description',
    'author',
    'publishingDate',
    'imageUrl',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private _dialog: MatDialog,
    private _blogService: BlogService,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getBlogs();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openAddBlogForm() {
    const dialogRef = this._dialog.open(AddBlogsComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getBlogs();
        }
      },
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getBlogs() {
    this._blogService.getBlogs().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },

      error: (err: any) => {
        console.log(err);
      },
    });
  }
  deleteBlog(id: any) {
    this._blogService.deleteBlog(id).subscribe({
      next: () => {
        this._coreService.openSnackBar('Location Deleted Successfully', 'Done');
        this.getBlogs();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
