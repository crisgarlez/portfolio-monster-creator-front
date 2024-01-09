import { Box } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function Layout({ children }: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box
          sx={{
            background: "#F5F5F5",
            width: "100%",
            flex: 5,
            height: "100vh",
            overflowX: "hidden",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
