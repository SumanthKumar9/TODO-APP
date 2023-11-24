import { TODO, authHeaders, authToken } from '../utilities/ApiEndPoints';
import { GetApiCall } from '../utilities/CommonHttpService';
import SimpleBadge from './Badge';
import './Todos.css';
import SearchIcon from '@mui/icons-material/Search';

const Todos = () => {

  const todosApiResponse: any = GetApiCall(TODO, authHeaders)

  return (
    <>
      <nav style={
        { textAlign: 'center' }}>
        <input type="text" className='searchBar' placeholder={'Search todos...'} />
        <SearchIcon sx={{ ml: -5, mt: '60px', paddingTop: '10px' }} color={'primary'} />
      </nav>
      <div className='todos-wrapper'>

        {todosApiResponse?.data?.data?.map((todo: any) => (
          <div className='todos-main-container'>
            <div className='todos-description-container'>
              <h1 title='prority'>{todo.title} &nbsp; <SimpleBadge  /></h1>
              <p>{todo.description}</p>
            </div>
            <div className='todo-container'>
              <p>{todo.complete}</p>
            </div>
          </div>
        ))}

      </div>

    </>

  );
};
export default Todos;
