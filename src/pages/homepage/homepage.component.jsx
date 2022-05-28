import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.styles';

export const HomePage = () => {
    return(
        // use directory component
        <HomePageContainer>
            <Directory/>
        </HomePageContainer>
    );
}