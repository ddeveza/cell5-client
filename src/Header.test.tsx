import Header from './components/Header';
import ReactDom from 'react-dom';
import { ExpansionPanelActions } from '@material-ui/core';


describe('Header Component Rendering Test' , ()=>{
    
    let container: HTMLDivElement;
    beforeEach(()=>{
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDom.render(<Header search={""} setSearch={()=>{}}/>, container);
    })

    afterEach(()=>{
        document.body.removeChild(container);
        container.remove();
    })

    it('To check if title is correct and  searchbox and icon are existing' , ()=>{
        const searchBox = container.querySelector("[data-test='search-box']");
        const headerTitle = container.querySelector("[data-test='main-title']")?.textContent;
        const searchIcon = container.querySelector("[data-testid='SearchIcon']"); //use material ui icon and the test name is data-testid. 
        
       
        expect(searchBox).toBeInTheDocument();
        expect(headerTitle).toBe('Bookmarks for Youtube Programming Tutorial');
        expect(searchIcon).toBeInTheDocument();
    })
    
})