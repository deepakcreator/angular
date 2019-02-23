import { LayoutComponent } from '../layout/layout.component';
//import { HomeComponent} from './home/home.component';


export const routes = [

    {
        path: '',
        component: LayoutComponent,

        children: [
            { path: 'products', loadChildren: './product/products.module#ProductsModule' },
            { path: 'requirements', loadChildren :'./requirement/requirement.module#RequirementModule' },
            { path: '', loadChildren :'./home/home.module#HomeModule' },
            { path: 'farmerorder', loadChildren: './farmerorder/farmerorder.module#FarmerorderModule' },

        ]
        }
];
