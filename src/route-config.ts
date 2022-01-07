import CompanyNameList from "./Company/CompanyNameList";
import CreateCompanyName from "./Company/CreateCompanyName";
import EditCompanyName from "./Company/EditCompanyName";
import CreateDailySales from "./DailySales/CreateDailySales";
import DailySalesList from "./DailySales/DailySalesList";
import EditDailySales from "./DailySales/EditDailySales";
import LandingPage from "./LandingPage/LandingPage";
import CreateProduct from "./Products/CreateProduct";
import EditProduct from "./Products/EditProduct";
import ProductList from "./Products/ProductList";
import RegisterStaff from "./RegisterPage/RegisterStaff";
import CreateRoles from "./Roles/CreateRoles";
import EditRoles from "./Roles/EditRoles";
import RolesList from "./Roles/RolesList";
import CreateStaff from "./Staffs/CreateStaff";
import EditStaff from "./Staffs/EditStaff";
import StaffList from "./Staffs/StaffList";
import DailyStockBalanceList from "./StockBalance/DailyStockBalanceList";
import StockBalanceList from "./StockBalance/StockBalanceList";
import CreateSalesTotal from "./Total/CreateSalesTotal";
import IndexTotal from "./Total/IndexTotal";
import RedirectToLandingPage from "./Utils/RedirectToLandingPage";

const routes = [
    {path:'/', component: LandingPage, exact:true},  


    {path: '/staffs', component: StaffList, exact:true},
    {path: '/staffs/create', component: CreateStaff},
    {path: '/staffs/edit/:id(\\d+)', component: EditStaff},

    {path: '/products', component: ProductList, exact:true},
    {path: '/products/create', component: CreateProduct},
    {path: '/products/edit/:id(\\d+)', component: EditProduct},

    {path: '/register', component: RegisterStaff, exact:true},

    {path: '/company', component: CompanyNameList, exact:true},
    {path: '/company/create', component: CreateCompanyName},
    {path: '/company/edit/:id(\\d+)', component: EditCompanyName},


    {path: '/total', component: IndexTotal, exact:true},
    {path: '/total/create', component: CreateSalesTotal},

    {path: '/roles', component: RolesList, exact:true},
    {path: '/roles/create', component: CreateRoles},
    {path: '/roles/edit/:id(\\d+)', component: EditRoles},

    {path: '/dailySales', component: DailySalesList, exact:true},
    {path: '/dailySales/create', component: CreateDailySales},
    {path: '/dailySales/edit/:id(\\d+)', component: EditDailySales},

    {path: '/stockBalance', component: StockBalanceList, exact:true},
    {path: '/dailyStockBalance', component: DailyStockBalanceList},




    {path: '*', component:RedirectToLandingPage}
];

export default routes; 