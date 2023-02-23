import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { CustomDialog, dialogOpenSubject$ } from "../CustomDialog"
import { FavoriteTable } from "./FavoriteTable"
import { IconButton } from '@mui/material';
import { Favorite as FavoriteIcon } from '@mui/icons-material';
import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
interface Navbar { }
export const Navbar: React.FC<Navbar> = () => {
  useSelector((store: AppStore) => store.favorites)

  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };
  return (<>
    <CustomDialog>
      <FavoriteTable />
    </CustomDialog>
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React Test
        </Typography>
        <IconButton color="secondary" aria-label="favorite" component="label" onClick={handleClick}>
          <FavoriteIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </>
  )
}
