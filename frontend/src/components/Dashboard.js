import { SearchMovies } from "./search/SearchMovies";
import {Header} from "./Header";

const Dashboard = () => {
    
    return(            
        <div>
            <Header/>
            <SearchMovies />
        </div>
    );
}

export default Dashboard;