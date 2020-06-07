import { Component } from '@angular/core';
// const { GoogleSpreadsheet } = require('google-spreadsheet');
import productJson from '../assets/products.json';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
declare var ga;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'indian-products';
  final_array = []
  sheetData: any = null;
  dataId: string;
  products: Array<any>;
  constructor(public http: HttpClient){
    // ga('set', 'page', 'home');
    // ga('send', 'pageview');
    this.dataId = '1Q3SlagluvXo-CA6CWNvVakarwlA3VrbzvSxMiAxp6I0';
    this.load( this.dataId )
      .then( ( data ) => {
        this.products = data;
        this.showdata();
      }, (error) => {
        console.log( error );
      });
    
    // const doc = new GoogleSpreadsheet('<the sheet ID from the url>');
    
  

  }

  showdata(){
    for (let index = 0; index < this.products.length; index+=2) {
      const element = this.products[index];
      const element2 = this.products[index+1];

      var temp = {
        'key': element['category'],
        'india': [],
        'foriegn': []
      }
      if(element['country'] == 'Swadeshi'){
        temp['india'] = [element['product1'],element['product2'],element['product3'],element['product4'],element['product5']];
      } else {
        temp['foriegn'] = [element['product1'],element['product2'],element['product3'],element['product4'],element['5']];
      }
      if(element2['country'] == 'Swadeshi'){
        temp['india'] = [element2['product1'],element2['product2'],element2['product3'],element2['product4'],element2['5']];
      } else {
        temp['foriegn'] = [element2['product1'],element2['product2'],element2['product3'],element2['product4'],element2['5']];
      }
      this.final_array.push(temp)
    }
  }
  load( id ) {
    if (this.sheetData) {
      // already loaded data
      return Promise.resolve(this.sheetData);
    }

    var url = 'https://spreadsheets.google.com/feeds/list/' + id + '/od6/public/values?alt=json'; 
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get(url)
        .map((res:Response) => res )
        .subscribe( data => {
          this.sheetData = data['feed']['entry'];
          
          let returnArray: Array<any> = [];
          if( this.sheetData && this.sheetData.length > 0 ) {
            this.sheetData.forEach( ( entry, index ) => {
              var obj = {};
              for( let x in entry ) {
                if( x.includes('gsx$') && entry[x].$t ){
                  obj[x.split('$')[1]] = entry[x]['$t'];
                  // console.log( x.split('$')[1] + ': ' + entry[x]['$t'] );
                }
              }
              returnArray.push( obj );
            });
          }
          resolve(returnArray);
        });
    });
  }

  
}
