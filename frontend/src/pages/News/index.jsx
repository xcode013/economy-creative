import RootLayout from '../layouts/RootLayout';
import PageHeader from '../../components/PageHeader';
import NewsList from './NewsList';
import Pagination from './Pagination';

import './newsStyle.css';
import {newsDatas} from '../../assets/datas/dummy';

import {useState, useCallback, useEffect} from 'react';

function News() {
  const dataPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [listData, setListData] = useState([]);

  const setCurrentPageHandler = (index) => {
    setCurrentPage(index ? index : 1);
  };

  const getDataPerPage = useCallback((rawData, dataPerPage, currentPage) => {
    let startIndex = dataPerPage * (currentPage - 1);
    let endIndex = dataPerPage * currentPage;
    setListData(rawData.slice(startIndex, endIndex));
  }, []);

  useEffect(() => {
    getDataPerPage(newsDatas, dataPerPage, currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getDataPerPage, currentPage]);

  return (
    <RootLayout>
      <PageHeader content={'News'} />
      <div id="newsPage">
        <NewsList listData={listData} />
        <Pagination
          dataLength={newsDatas.length}
          dataPerPage={dataPerPage}
          currentPage={currentPage}
          paginationOnClickHandler={setCurrentPageHandler}
        />
      </div>
    </RootLayout>
  );
}

export default News;
