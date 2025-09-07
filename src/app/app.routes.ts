import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { TermsConditionComponent } from './pages/terms-condition/terms-condition.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { HeroComponent } from './pages/hero/hero.component';
import { DisclemerComponent } from './pages/disclemer/disclemer.component';
import { NumeralogyComponent } from './pages/services/numeralogy/numeralogy.component';
import { VastuComponent } from './pages/services/vastu/vastu.component';
import { PremarrigeComponent } from './pages/services/premarrige/premarrige.component';
import { JewaanhumsafarComponent } from './pages/services/jewaanhumsafar/jewaanhumsafar.component';
import { MasterlayoutComponent } from './pages/masterlayout/masterlayout.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProductsComponent } from './pages/products/products.component';
import { BlogComponent } from './pages/blog/blog.component';
import { EventsComponent } from './pages/events/events.component';
import { AskquestionComponent } from './pages/askquestion/askquestion.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: MasterlayoutComponent,
        children: [
            {
                path: '',
                component: LayoutComponent

            },
            {
                path: 'about',
                component: AboutComponent
            }, {
                path: 'service',
                component: ServicesComponent
            },
            {
                path: 'product',
                component: ProductsComponent
            }, 
            {
                path:'blog',
                component:BlogComponent
            },
            {
                path:'event',
                component:EventsComponent
            },
            {
                path:'ask-question',
                component:AskquestionComponent
            },
            { path: 'contact', component: ContactComponent },{
                path: 'terms_condition',
                component: TermsConditionComponent
            },
            {
                path: 'privacy-policy',
                component: PrivacypolicyComponent
            },
            {
                path: 'disclaimer',
                component: DisclemerComponent
            },
            {
                path: 'hero',
                component: HeroComponent
            },
            {
                path: 'numeralogy',
                component: NumeralogyComponent
            },

            {
                path: 'vastu',
                component: VastuComponent
            },
            { path: 'pre-marriage-counselling', component: PremarrigeComponent, title: 'Pre Marriage Counselling' },

            {
                path: 'jewan-humsafar',
                component: JewaanhumsafarComponent
            },
        {path:'**',component:LayoutComponent}]
    }
    // {
    //     path:'terms_condition',
    //     component:TermsConditionComponent
    // },
    // {
    //     path:'privacy-policy',
    //     component:PrivacypolicyComponent
    // },
    // {
    //     path:'disclaimer',
    //     component:DisclemerComponent
    // },
    // {
    //     path:'hero',
    //     component:HeroComponent
    // },
    // {
    //     path:'numeralogy',
    //     component:NumeralogyComponent
    // },

    // {
    //     path:'vastu',
    //     component:VastuComponent
    // },
    // { path: 'pre-marriage-counselling', component: PremarrigeComponent, title: 'Pre Marriage Counselling' },

    // {
    //     path:'jewan-humsafar',
    //     component:JewaanhumsafarComponent
    // }

];
