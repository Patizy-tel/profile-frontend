import { Injectable } from '@angular/core';
import { ApisService } from './apis.service';
//import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  constructor(private apis: ApisService) {}
  downloadCsv(data: any, currentName: any) {
    // const blob = new Blob([data], { type: 'csv' });
    // const a = saveAs(blob, `Report for ${currentName}.csv`, {
    //     autoBOM: true,
    // });
    // return blob;
  }

  setFile(fileData: any) {
    return this.apis.file('/files/docs', fileData);
  }

  setImageFile(fileData: any) {
    return this.apis.file('/files/image', fileData);
  }

  uploadArchiveFile(filedata: any) {
    return this.apis.file('/files/archive-file', filedata);
  }

  setPdfFile(fileData: any) {
    return this.apis.file('/files/pdf', fileData);
  }
  downloadPdf(data: any): void {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', data.file);
    link.setAttribute('download', `${data.name}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  downloadDoc(data: any): void {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', data.file);
    link.setAttribute('download', `${data.name}`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  convertHtmlBackToDoc(data:any){
    return this.apis.post(`/files/convert-from-docs-html/${data.name}`,data);
  }



}
