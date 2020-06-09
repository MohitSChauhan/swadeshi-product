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
  services = [];
  indianProducts = [];
  constructor() {
    console.log('Hello');
    
    // ga('set', 'page', 'home');
    // ga('send', 'pageview');
    for (let index = 0; index < productJson.length; index += 2) {
      const element = productJson[index];
      const element2 = productJson[index + 1];

      var temp = {
        'key': element['Category'],
        'india': [],
        'foriegn': []
      }
      if (element['Country'] == 'Swadeshi') {
        temp['india'] = [element['1'], element['2'], element['3'], element['4'], element['5']];
      } else {
        temp['foriegn'] = [element['1'], element['2'], element['3'], element['4'], element['5']];
      }
      if (element2['Country'] == 'Swadeshi') {
        temp['india'] = [element2['1'], element2['2'], element2['3'], element2['4'], element2['5']];
      } else {
        temp['foriegn'] = [element2['1'], element2['2'], element2['3'], element2['4'], element2['5']];
      }
      this.final_array.push(temp)
    }

    console.log(this.final_array);
    this.getServices();
    this.getIndianProducts();
    // const doc = new GoogleSpreadsheet('<the sheet ID from the url>');

  }


  getServices() {
    var obj = {
      'title': 'Bansi Gir Gaushala',
      'desc': 'Revive, regain and re-establish Bharat’s ancient Vedic culture',
      'url': 'https://www.bansigir.in/',
      'icon': 'tree',
      'color': 'red'
    }
    var obj1 = {
      'title': 'SOSE',
      'desc': 'Organic foods, natural home care and handmade personal care brand from the house of Suryan Organic',
      'url': 'https://www.sose.in/',
      'icon': 'archway',
      'color': "yellow"
    }
    var obj2 = {
      'title': 'Natureland Organics',
      'desc': 'Creating an effective and efficient bridge between Indian marginal farmers and buyers across the world seeking high-quality organic produce',
      'url': 'https://naturelandorganics.com/',
      'icon': 'leaf',
      'color': 'aqua'
    }
    var obj3 = {
      'title': 'Samrudddhi Organic Farm',
      'desc': 'Our assortment of products includes Organic Pulse, Organic Jaggery & Sugar, and Organic Ghee. To uphold our reputation among customers, we are looking to constantly innovate and refine our products and processes',
      'url': 'https://samruddhiorganic.com/',
      'icon': 'seedling',
      'color': 'green'
    }
    var obj4 = {
      'title': 'Keventer Agro Ltd',
      'desc': 'To build on our heritage and expertise of over 125 years in food processing and Dairy business.',
      'url': 'https://www.keventer.com/',
      'icon': 'spa',
      'color': 'lime'
    }
    var obj5 = {
      'title': 'Rallis India Ltd (TATA)',
      'desc': 'Deep understanding of Indian agriculture, sustained contact with farmers, quality agrochemicals, branding and marketing expertise',
      'url': 'https://www.rallis.co.in/',
      'icon': 'tractor',
      'color': 'blue'
    }
    this.services = [obj, obj1, obj2, obj3, obj4, obj5];
  }

  getIndianProducts() {
    this.indianProducts = [
      {
        'title': 'Soap',
        'desc': 'Medimix, Santoor, No. 1, Cinthol, Margo, Himalaya, Patanjali Soaps, Mysore, Nirma',
        'id': 'faq1'
      },
      {
        'title': 'Battery',
        'desc': 'Nippo, Godrej GP',
        'id': 'faq2'
      },
      {
        'title': 'Automobiles',
        'desc': 'Tata, Bajaj, Mahindra, Hero, TVS',
        'id': 'faq3'
      },
      {
        'title': 'Soft Drinks',
        'desc': 'Frooti, Maaza, Paper Boat and Real.',
        'id': 'faq4'
      },
      {
        'title': 'Dairy Products and Ice cream',
        'desc': 'Vadilal, Amul, Havmor',
        'id': 'faq5'
      },
      {
        'title': 'Cafe',
        'desc': ' CCD, Coffee roaster, Blue Tokai, KC Roasters ',
        'id': 'faq6'
      },
      {
        'title': 'Skincare Products',
        'desc': 'Vicco, Himalaya, Roop Mantra, Lotus, Shahnaz Hussein, and Biotique',
        'id': 'faq7'
      },
      {
        'title': 'Toothpaste',
        'desc': 'Patanjali Dant Kanti, Dabur Red, Babool, Amar, Meswak',
        'id': 'faq8'
      },
      {
        'title': 'Shaving Cream',
        'desc': 'Vicco, Godrej, Vi-John, Park Avenue',
        'id': 'faq9'
      },
      {
        'title': 'Washing Powder',
        'desc': 'Ujala, Fena, Saras, Hipolin, Ghadi, Nirma',
        'id': 'faq10'
      },
      {
        'title': 'Pain Relief',
        'desc': 'Volini, Himani Fast Relief',
        'id': 'faq11'
      },
      {
        'title': 'Hair Color',
        'desc': 'Neha, Streax, Godrej, Color Mate, Corlin, Indica',
        'id': 'faq12'
      },
      {
        'title': 'Talcum Powder',
        'desc': 'Eva, Fa, Cinthol, Spinz, Boro Plus Ice, Navratna',
        'id': 'faq13'
      },
    ]
  }

}
