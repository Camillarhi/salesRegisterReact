import Login from "./Accounts/Login";
import CompanyNameList from "./Company/CompanyNameList";
import CreateCompanyName from "./Company/CreateCompanyName";
import EditCompanyName from "./Company/EditCompanyName";
import CreateDailySales from "./DailySales/CreateDailySales";
import DailySalesList from "./DailySales/DailySalesList";
import Dashboard from "./DashBoard/Dashboard";
import LandingPage from "./LandingPage/LandingPage";
import CreateProduct from "./Products/CreateProduct";
import EditProduct from "./Products/EditProduct";
import ProductList from "./Products/ProductList";
import ViewProduct from "./Products/ViewProduct";
import RegisterStaff from "./RegisterPage/RegisterStaff";
import CreateRoles from "./Roles/CreateRoles";
import EditRoles from "./Roles/EditRoles";
import RolesList from "./Roles/RolesList";
import Routes from "./Routes";
import StockBalanceList from "./StockBalance/StockBalanceList";
import DailyStockBalanceList from "./StockBalance/StockBalanceUpdateList";
import DailyStockBalanceDetailsList from "./StockBalance/StockUpdateDetailsList";
import StockInwardsDetailsList from "./StockInwards/StockInwardsDetailsList";
import StockInwardsList from "./StockInwards/StockInwardsList";
import CreateSalesTotal from "./Total/CreateSalesTotal";
import IndexTotal from "./Total/IndexTotal";
import UpdateText from "./UpdateText";
import CreateAdmin from "./User/CreateAdmin";
import CreateStaff from "./User/CreateStaff";
import EditAdmin from "./User/EditAdmin";
import EditStaff from "./User/EditStaff";
import StaffList from "./User/StaffList";
import ViewAdminProfile from "./User/ViewAdminProfile";
import ViewStaff from "./User/ViewStaff";
import { RedirectToDashBoard, RedirectToLandingPage } from "./Utils/RedirectToLandingPage";

const routes = [
   {path:'/dashboard', component: Dashboard, exact:true},  


    {path: '/staffs', component: StaffList, exact:true},
    {path: '/staffs/create', component: CreateStaff},
    {path: '/staffs/edit/:id', component: EditStaff},
    {path: '/staffs/view/:id', component: ViewStaff},


    {path: '/products', component: ProductList, exact:true},
    {path: '/products/create', component: CreateProduct, isAdmin:true},
    {path: '/products/edit/:id', component: EditProduct},
    {path: '/products/view/:id', component: ViewProduct},


    {path: '/register', component: RegisterStaff, exact:true},

    {path: '/company', component: CompanyNameList, exact:true},
    {path: '/company/create', component: CreateCompanyName},
    {path: '/company/edit/:id', component: EditCompanyName},


    {path: '/total', component: IndexTotal, exact:true},
    {path: '/total/create', component: CreateSalesTotal},

    {path: '/roles', component: RolesList, exact:true},
    {path: '/roles/create', component: CreateRoles},
    {path: '/roles/edit/:id', component: EditRoles},

    {path: '/dailySales', component: DailySalesList, exact:true},
    {path: '/dailySales/create', component: CreateDailySales},

    {path: '/stockBalance', component: StockBalanceList, exact:true},
    {path: '/dailyStockBalance', component: DailyStockBalanceList,exact:true},
    {path: '/viewdailyStockBalance/:id', component: DailyStockBalanceDetailsList,exact:true},


    // {path: '/login', component: Login, exact:true},
    {path: '/account/create', component: CreateAdmin},
    {path: '/account/edit/:id', component: EditAdmin},
    {path: '/account/view/:id', component: ViewAdminProfile},

   {path: '/launch', component: Routes, exact:true},
   {path: '/test', component: UpdateText, exact:true},
   {path: '/login', component: Login, exact:true},

   {path: '/stockinwardslist', component: StockInwardsList, exact:true},
   {path: '/viewstockinwards/:id', component: StockInwardsDetailsList, exact:true},

    {path: '*', component:RedirectToDashBoard}
];
export const routers=[
   {path:'/', component: LandingPage, exact:true},  
   {path: '/login', component: Login, exact:true},
   {path: '*', component:RedirectToLandingPage}
]

export default routes; 