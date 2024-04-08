import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Output() baptismCertificateClicked: EventEmitter<void> = new EventEmitter<void>();

  
  constructor(private dialogRef: MatDialogRef<PopupComponent>,private router: Router) { }

  ngOnInit(): void {
  }
  onCertificateButtonClick(certificateType: string): void {
  // onBaptismCertificateClick(): void {
    // Emit event when Baptism Certificate button is clicked
    this.baptismCertificateClicked.emit();

    // Close the dialog
    this.dialogRef.close();

    // Navigate to the certificate route
    this.router.navigate(['/certificate',certificateType]);

  }


}
