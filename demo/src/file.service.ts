import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { environment } from './environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FileService {

  current = '/';

  private baseUrl = environment.API_URL;

  constructor(private http: Http) {
  }

  private post(url: String, data: any): Promise<any> {
    return this.http.post(this.baseUrl + url, data, { withCredentials: true, headers: new Headers({'content-type': 'text/plain'}) })
      .map((response: Response) => { 
        return this.handleResponse(response); 
      })
      .toPromise()
      .catch((error: Response | any) => { return this.handleError(error); });
  }

  private get(url: String): Promise<any> {
    return this.http.get(this.baseUrl + url, { withCredentials: true })
      .map((response: Response) => {
        return this.handleResponse(response);
      })
      .toPromise()
      .catch((error: Response | any) => { return this.handleError(error); });
  }

  private delete(url: String): Promise<any> {
    return this.http.delete(this.baseUrl + url, { withCredentials: true })
      .map((response: Response) => {
        return this.handleResponse(response);
      })
      .toPromise()
      .catch((error: Response | any) => { return this.handleError(error); });
  }

  private download(url: string) {
    const link = document.createElement('a');
    link.download = url.substr(url.lastIndexOf('/') + 1, url.length);
    link.href = url;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  private handleResponse(response: Response): any {
    try {
      return response.json();
    } catch (ex) {
      return response.text();
    }
  }

  private handleError(error: Response | any): any {
    let err = null;
    try {
      err = error && error.json().description;
    } catch (err) {
      throw new Error(error);
    }
    if (err) {
      throw Object.assign(new Error(), error.json());
    } else {
      throw new Error(error);
    }
  }

  private removeDot(path) {
    if (path.indexOf('.') === 0) {
      path = path.substr(1);
    }
    if (path === '//') {
      path = '/';
    }
    return path;
  }

  set currentPath(path) {
    this.current = this.removeDot(path);
    console.log('Going to ' + path);
  }

  get currentPath() {
    return this.current;
  }

  public getFiles() {
    return this.get(this.current);
  }

  public getFolders(path) {
    return this.get('folder/' + this.removeDot(path));
  }

  public openFile(path) {
    return this.get('read/' + this.removeDot(path));
  }

  public saveFile(path, content) {
    return this.post('/' + path, content);
  }

  public search(fileName) {
    return this.get('search/' + fileName);
  }

  public copyFile(origin, destination) {
    return this.post('copy/' + origin, destination);
  }

  public moveFile(origin, destination) {
    return this.post('move/' + origin, destination);
  }

  public deleteFile(path) {
    return this.delete(path);
  }

  public createFolder(path, name) {
    return this.post('folder/' + path + '/' + name, '');
  }

  public downloadFile(path) {
    this.download('/' + path);
  }
}
