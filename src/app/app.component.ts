import { Component } from '@angular/core';
// const { GoogleSpreadsheet } = require('google-spreadsheet');
import productJson from '../assets/products.json';
declare var ga;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'indian-products';
  final_array = []
  constructor(){
    // ga('set', 'page', 'home');
    // ga('send', 'pageview');
    for (let index = 0; index < productJson.length; index+=2) {
      const element = productJson[index];
      const element2 = productJson[index+1];

      var temp = {
        'key': element['Category'],
        'india': [],
        'foriegn': []
      }
      if(element['Country'] == 'Swadeshi'){
        temp['india'] = [element['1'],element['2'],element['3'],element['4'],element['5']];
      } else {
        temp['foriegn'] = [element['1'],element['2'],element['3'],element['4'],element['5']];
      }
      if(element2['Country'] == 'Swadeshi'){
        temp['india'] = [element2['1'],element2['2'],element2['3'],element2['4'],element2['5']];
      } else {
        temp['foriegn'] = [element2['1'],element2['2'],element2['3'],element2['4'],element2['5']];
      }
      this.final_array.push(temp)
    }
      
    console.log(this.final_array);
    // const doc = new GoogleSpreadsheet('<the sheet ID from the url>');

  }
  
}
