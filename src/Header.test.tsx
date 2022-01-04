import Header from './components/Header';
import ReactDom from 'react-dom';


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

    it('Renders Header correctly to check if searchbox is existing' , ()=>{
        const searchBox = container.querySelector("[data-test='search-box']");
        expect(searchBox).toBeInTheDocument();
    })
    
})