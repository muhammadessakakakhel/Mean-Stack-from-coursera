import { Component, OnInit } from '@angular/core';
// import { ProviderService } from '../services/provider.service';
import { providers } from '../models/providers.data';
// import { providerClass } from '../models/providers.class';
@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styles: [
  ]
})
export class ProvidersComponent implements OnInit {

  providers= providers;
  // providers= providerClass;
  // constructor(private providerService: ProviderService ){ }
  constructor() { }
  ngOnInit(): void {
    // this.loadData();


  }

  // loadData(){
  //   this.providerService.getProviders()
  //   .subscribe(
  //     data =>{
  //       this.providers = data;
  //     },
  //     error =>{
  //       console.log(error);
  //     }
  //   )
  // }

}

// import { Component, OnInit } from '@angular/core';
// import { providers } from '../models/providers.data';

// @Component({
//   selector: 'app-providers',
//   templateUrl: './providers.component.html',
//   styles: [
//   ]
// })
// export class ProvidersComponent implements OnInit {

//   providers =[];
//   constructor(){ }
//   ngOnInit(): void {

//   }
// }

