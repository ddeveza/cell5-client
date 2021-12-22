import { Box } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@material-ui/core";
import { Dispatch } from "react";
const styles = makeStyles({
  searchBarStyle: {
    appearance: "none",
    background: "transparent",
    border: 0,
    color: "var(--docsearch-text-color)",
    flex: 1,
    font: "inherit",
    fontSize: "1.2em",
    height: "100%",
    outline: "none",
    padding: "0 0 0 8px",
    width: "50%",
  },
});
type Props = {
  search: string;
  setSearch : Dispatch<any>;
}
const Header: React.FC<Props> = ({search , setSearch}) => {
  const classes = styles();
  const handleChange = (e:React.FormEvent<HTMLInputElement>)=>{
      console.log(e.currentTarget.value)
      setSearch(e.currentTarget.value);
  }
  const headerStyle = {
    color: "gray",
    textShadow: "rgb(137 133 133) 7px 6px 9px",
    fontFamily: "cursive",
    letterSpacing: "1px",
  };

  return (
    <Box
      sx={{
        display: "flex",
        m: 4,
        justifyContent: "space-around",
        marginBottom: "20px",
      }}
    >
      <h1 style={headerStyle}>Bookmarks for Youtube Programming Tutorial</h1>
      <Box sx={{ alignSelf: "center" }}>
        <input
          type="text"
          placeholder="Search Title....."
          className={classes.searchBarStyle}
          value = {search}
          onChange = {handleChange}
        />
        <SearchIcon />
      </Box>
    </Box>
  );
};

export default Header;
