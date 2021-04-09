import { Component } from "@angular/core";
// const { GoogleSpreadsheet } = require('google-spreadsheet');
import productJson from "../assets/products.json";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

declare var ga;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "indian-products";
  final_array = [];
  sheetData: any = null;
  dataId: string;
  products: Array<any>;
  services = [];
  indianProducts = [];
  constructor(public http: HttpClient) {
    // ga('set', 'page', 'home');

    // ga('send', 'pageview');
    this.dataId = "1Q3SlagluvXo-CA6CWNvVakarwlA3VrbzvSxMiAxp6I0";
    this.load(this.dataId).then(
      (data) => {
        this.products = data;
        this.showdata();
      },
      (error) => {
        console.log(error);
      }
    );
    this.getServices();
    this.getIndianProducts();
    // const doc = new GoogleSpreadsheet('<the sheet ID from the url>');
  }

  showdata() {
    for (let index = 0; index < this.products.length; index += 2) {
      const element = this.products[index];
      const element2 = this.products[index + 1];

      var temp = {
        key: element["category"],
        india: [],
        foriegn: [],
      };
      if (element["country"] == "Swadeshi") {
        temp["india"] = [
          element["product1"],
          element["product2"],
          element["product3"],
          element["product4"],
          element["product5"],
        ];
      } else {
        temp["foriegn"] = [
          element["product1"],
          element["product2"],
          element["product3"],
          element["product4"],
          element["5"],
        ];
      }
      if (element2["country"] == "Swadeshi") {
        temp["india"] = [
          element2["product1"],
          element2["product2"],
          element2["product3"],
          element2["product4"],
          element2["5"],
        ];
      } else {
        temp["foriegn"] = [
          element2["product1"],
          element2["product2"],
          element2["product3"],
          element2["product4"],
          element2["5"],
        ];
      }
      this.final_array.push(temp);
    }
  }
  load(id) {
    if (this.sheetData) {
      // already loaded data
      return Promise.resolve(this.sheetData);
    }

    var url =
      "https://spreadsheets.google.com/feeds/list/" +
      id +
      "/od6/public/values?alt=json";
    // don't have the data yet
    return new Promise((resolve) => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http
        .get(url)
        .map((res: Response) => res)
        .subscribe((data) => {
          this.sheetData = data["feed"]["entry"];

          let returnArray: Array<any> = [];
          if (this.sheetData && this.sheetData.length > 0) {
            this.sheetData.forEach((entry, index) => {
              var obj = {};
              for (let x in entry) {
                if (x.includes("gsx$") && entry[x].$t) {
                  obj[x.split("$")[1]] = entry[x]["$t"];
                  // console.log( x.split('$')[1] + ': ' + entry[x]['$t'] );
                }
              }
              returnArray.push(obj);
            });
          }
          resolve(returnArray);
        });
    });
  }

  getServices() {
    var obj = {
      title: "Bansi Gir Gaushala",
      desc: "Revive, regain and re-establish Bharat’s ancient Vedic culture",
      url: "https://www.bansigir.in/",
      icon: "tree",
      color: "red",
    };
    var obj1 = {
      title: "SOSE",
      desc:
        "Organic foods, natural home care and handmade personal care brand from the house of Suryan Organic",
      url: "https://www.sose.in/",
      icon: "archway",
      color: "yellow",
    };
    var obj2 = {
      title: "Natureland Organics",
      desc:
        "Creating an effective and efficient bridge between Indian marginal farmers and buyers across the world seeking high-quality organic produce",
      url: "https://naturelandorganics.com/",
      icon: "leaf",
      color: "aqua",
    };
    var obj3 = {
      title: "Samrudddhi Organic Farm",
      desc:
        "Our assortment of products includes Organic Pulse, Organic Jaggery & Sugar, and Organic Ghee. To uphold our reputation among customers, we are looking to constantly innovate and refine our products and processes",
      url: "https://samruddhiorganic.com/",
      icon: "seedling",
      color: "green",
    };
    var obj4 = {
      title: "Keventer Agro Ltd",
      desc:
        "To build on our heritage and expertise of over 125 years in food processing and Dairy business.",
      url: "https://www.keventer.com/",
      icon: "spa",
      color: "lime",
    };
    var obj5 = {
      title: "Rallis India Ltd (TATA)",
      desc:
        "Deep understanding of Indian agriculture, sustained contact with farmers, quality agrochemicals, branding and marketing expertise",
      url: "https://www.rallis.co.in/",
      icon: "tractor",
      color: "blue",
    };
    this.services = [obj, obj1, obj2, obj3, obj4, obj5];
    console.log(this.services);
  }

  getIndianProducts() {
    this.indianProducts = [
      {
        title: "Soap",
        desc:
          "Medimix, Santoor, No. 1, Cinthol, Margo, Himalaya, Patanjali Soaps, Mysore, Nirma",
        id: "faq1",
      },
      {
        title: "Battery",
        desc: "Nippo, Godrej GP",
        id: "faq2",
      },
      {
        title: "Automobiles",
        desc: "Tata, Bajaj, Mahindra, Hero, TVS",
        id: "faq3",
      },
      {
        title: "Soft Drinks",
        desc: "Frooti, Maaza, Paper Boat and Real.",
        id: "faq4",
      },
      {
        title: "Dairy Products and Ice cream",
        desc: "Vadilal, Amul, Havmor",
        id: "faq5",
      },
      {
        title: "Cafe",
        desc: " CCD, Coffee roaster, Blue Tokai, KC Roasters ",
        id: "faq6",
      },
      {
        title: "Skincare Products",
        desc:
          "Vicco, Himalaya, Roop Mantra, Lotus, Shahnaz Hussein, and Biotique",
        id: "faq7",
      },
      {
        title: "Toothpaste",
        desc: "Patanjali Dant Kanti, Dabur Red, Babool, Amar, Meswak",
        id: "faq8",
      },
      {
        title: "Shaving Cream",
        desc: "Vicco, Godrej, Vi-John, Park Avenue",
        id: "faq9",
      },
      {
        title: "Washing Powder",
        desc: "Ujala, Fena, Saras, Hipolin, Ghadi, Nirma",
        id: "faq10",
      },
      {
        title: "Pain Relief",
        desc: "Volini, Himani Fast Relief",
        id: "faq11",
      },
      {
        title: "Hair Color",
        desc: "Neha, Streax, Godrej, Color Mate, Corlin, Indica",
        id: "faq12",
      },
      {
        title: "Talcum Powder",
        desc: "Eva, Fa, Cinthol, Spinz, Boro Plus Ice, Navratna",
        id: "faq13",
      },
    ];
  }
}
