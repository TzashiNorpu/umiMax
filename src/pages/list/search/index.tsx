import { PageContainer } from '@ant-design/pro-layout';
import { Outlet, history, matchPath } from '@umijs/max';
import { Input } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

type SearchProps = {
  match: {
    url: string;
    path: string;
  };
  location: {
    pathname: string;
  };
};

const tabList = [
  {
    key: 'articles',
    tab: '文章',
  },
  {
    key: 'projects',
    tab: '项目',
  },
  {
    key: 'applications',
    tab: '应用',
  },
];

const Search: FC<SearchProps> = () => {
  const [tabKey, setTabKey] = useState('articles');
  let location = useLocation();
  useEffect(() => {
    const m = matchPath({ path: 'list/search/:type' }, location.pathname);
    setTabKey(m?.params.type as string);
  }, [location]);

  const handleTabChange = (key: string) => {
    setTabKey(key);

    const match = matchPath(
      { path: 'list/search/:type' },
      window.location.pathname,
    );
    const url = match?.pathname.replace(match.params.type as string, '');
    switch (key) {
      case 'articles':
        history.push(`${url}articles`);
        break;
      case 'applications':
        history.push(`${url}applications`);
        break;
      case 'projects':
        history.push(`${url}projects`);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (value: string) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  // const getTabKey = () => {
  //   const match = matchPath(
  //     { path: 'list/search/:type' },
  //     window.location.pathname,
  //   );
  //   // const { match, location } = props;
  //   // const url = match?.pathname === '/' ? '' : match?.pathname;
  //   // console.log('----', url, '----', location.pathname);

  //   location.pathname.replace(`${match?.pathname}`, '');
  //   const tabKey = match?.params.type;
  //   console.log('***', tabKey);
  //   if (tabKey && tabKey !== '/') {
  //     return tabKey;
  //   }
  //   return 'articles';
  // };

  return (
    <PageContainer
      content={
        <div style={{ textAlign: 'center' }}>
          <Input.Search
            placeholder="请输入"
            enterButton="搜索"
            size="large"
            onSearch={handleFormSubmit}
            style={{ maxWidth: 522, width: '100%' }}
          />
        </div>
      }
      tabList={tabList}
      tabActiveKey={tabKey}
      // tabActiveKey={getTabKey()}
      onTabChange={handleTabChange}
    >
      <Outlet />
    </PageContainer>
  );
};

export default Search;
