import * as React from "react";
import { extendTheme} from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import DescriptionIcon from "@mui/icons-material/Description";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import DataTable from "../components/DataTable";
import Dummy from "../components/UserDetailsPage";
import OfflinePinIcon from '@mui/icons-material/OfflinePin';
import PaymentsIcon from '@mui/icons-material/Payments';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import CompressIcon from '@mui/icons-material/Compress';
import LeadDatas from "../components/LeadDatas";
import LeadData from "../components/LeadData";
import DefaultLeadTable from "../components/DefaultLeadTable";
import DefaultLead from "../components/DefaultLead";

const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "leads",
    title: "Leads",
    icon: <AccountBalanceIcon />,
  },
  {
    segment: "in-process",
    title: "In Process",
    icon: <HourglassEmptyIcon />,
  },
  {
    segment: "sanctioned",
    title: "Sanctioned",
    icon: <OfflinePinIcon />,
  },
  {
    segment: "disbursed",
    title: "Disbursed",
    icon: <PaymentsIcon />,
  },
  {
    segment: "collections",
    title: "Collections",
    icon: <QueuePlayNextIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "settled",
    title: "Settled",
    icon: <CompressIcon />,
    children: [
      {
        segment: "sales",
        title: "Sales",
        icon: <DescriptionIcon />,
      },
      {
        segment: "traffic",
        title: "Traffic",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "defaults",
    title: "Defaults",
    icon: <DisabledByDefaultIcon />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}


// Component to determine which page to rander
const RenderPage = ({pathname}) =>{
    switch(pathname){
        case "/dashboard":
            return  <Dummy/>
        case "/leads":
            return <LeadData/>
        case "/in-process":
              return <LeadDatas/>
        case "/sanctioned":
          return <LeadDatas/>
        case "/disbursed":
          return <LeadDatas/>
        case "/collections":
          return <LeadDatas/>
        case "/settled":
          return <LeadDatas/>
        case "/settled/sales":
            return <h1>Sales</h1>
        case "/settled/traffic":
            return <h1>Traffic</h1>
        case "/defaults":
            return <DefaultLead/>
        default:
            return <DataTable/>
    }
};



const Home = (props) => {
  const { window } = props;
  const router = useDemoRouter("/dashboard");
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="./squid logo.png" alt="SquidLogo" />,
        title: "Squid Loan",
        homeUrl: "/",
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>
            <RenderPage pathname={router.pathname}/>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}

export default Home;