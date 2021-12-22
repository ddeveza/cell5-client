import  { FC ,useState ,useEffect} from "react";
import AddBookMark from "./components/AddBookMark";
import Header from "./components/Header";
import ListBookMark from "./components/ListBookMark";
import axios from 'axios'
interface Bookmarks {
  id: number;
  title: string;
  link: string;
  summary: string;
  thumbnail:string;
  tag: string;
  createdAt : string;
  updatedAt : string;
}
const App: FC = () => {

  const [listOfBookmark, setListOfBookmark] = useState<Bookmarks[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
      axios.get('http://localhost:3001/')
           .then(async res=>{
             // console.log(res);
             if (res.data !== 'Empty Data') setListOfBookmark (await res.data);
           })
           .catch(err=>console.log(err)) 
  }, [])

  return (
    <div className="App">
      <Header search={search} setSearch={setSearch}/>
      <AddBookMark  setListOfBookmark={setListOfBookmark}/>
      <ListBookMark search={search} listOfBookmark={listOfBookmark} setListOfBookmark={setListOfBookmark}/>
     
    {/*   <ul>

    
      {listOfBookmark.map((val:Bookmarks,index:number)=>{
          return <li key={val.id}>{val.title}</li>
      })}

</ul> */}
      {/* <Header/> Title Header Only Search Bar
         
            -<Button>
            -<Modal/>
              -<Form> (Title , link , thumbnail , summary , hashtag  , add and save button)
        <ListBookMark/>
            -Title , Thumbnail , summary and hashtag , edit and delete button
     
     */}
      {/* <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} /> */}
    </div>
  );
};

export default App;
