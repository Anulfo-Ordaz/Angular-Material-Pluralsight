import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  openAddContactDialog(): void{
    let dialogRef = this.dialog.open(NewContactDialogComponent, {
      width: '450px'

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        this.openSnackBar('Contact added', 'navigate')
          .onAction()
          .subscribe(() => {
            this.router.navigate(['/contactmanager', result.id])
        });
      }
    });
  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
   return this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
