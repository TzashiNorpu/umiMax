import { BellOutlined } from '@ant-design/icons';
import { Badge, Button, Popover, Spin, Tabs } from 'antd';
import classNames from 'classnames';
import { Tab } from 'rc-tabs/lib/interface';
import useMergedState from 'rc-util/es/hooks/useMergedState';
import React from 'react';
import type { NoticeIconTabProps } from './NoticeList';
import NoticeList from './NoticeList';
import styles from './index.less';

export type NoticeIconProps = {
  count?: number;
  bell?: React.ReactNode;
  className?: string;
  loading?: boolean;
  onClear?: (tabName: string, tabKey: string) => void;
  onItemClick?: (
    item: API.NoticeIconItem,
    tabProps: NoticeIconTabProps,
  ) => void;
  onViewMore?: (tabProps: NoticeIconTabProps, e: MouseEvent) => void;
  onTabChange?: (tabTile: string) => void;
  style?: React.CSSProperties;
  onPopupVisibleChange?: (visible: boolean) => void;
  popupVisible?: boolean;
  clearText?: string;
  viewMoreText?: string;
  clearClose?: boolean;
  emptyImage?: string;
  children?: React.ReactElement<NoticeIconTabProps>[];
};

const NoticeIcon: React.FC<NoticeIconProps> & {
  Tab: typeof NoticeList;
} = (props) => {
  const getNotificationBox = (): React.ReactNode => {
    const {
      children,
      loading,
      onClear,
      onTabChange,
      onItemClick,
      onViewMore,
      clearText,
      viewMoreText,
    } = props;
    if (!children) {
      return null;
    }
    const panes: Tab[] = [];

    React.Children.forEach(
      children,
      (child: React.ReactElement<NoticeIconTabProps>): void => {
        if (!child) {
          return;
        }
        const { list, title, count, tabKey, showClear, showViewMore } =
          child.props;

        const len = list && list.length ? list.length : 0;
        const msgCount = count || count === 0 ? count : len;
        const tabTitle: string =
          msgCount > 0 ? `${title} (${msgCount})` : title;
        panes.push({
          label: tabTitle,
          key: tabKey,
          children: (
            <NoticeList
              clearText={clearText}
              viewMoreText={viewMoreText}
              list={list}
              tabKey={tabKey}
              onClear={(): void => onClear && onClear(title, tabKey)}
              onClick={(item): void =>
                onItemClick && onItemClick(item, child.props)
              }
              onViewMore={(event): void =>
                onViewMore && onViewMore(child.props, event)
              }
              showClear={showClear}
              showViewMore={showViewMore}
              title={title}
            />
          ),
        });
      },
    );
    {
      /* <TabPane tab={tabTitle} key={tabKey}>
            <NoticeList
              clearText={clearText}
              viewMoreText={viewMoreText}
              list={list}
              tabKey={tabKey}
              onClear={(): void => onClear && onClear(title, tabKey)}
              onClick={(item): void =>
                onItemClick && onItemClick(item, child.props)
              }
              onViewMore={(event): void =>
                onViewMore && onViewMore(child.props, event)
              }
              showClear={showClear}
              showViewMore={showViewMore}
              title={title}
            />
          </TabPane>, */
    }

    return (
      <>
        <Spin spinning={loading} delay={300}>
          <Tabs className={styles.tabs} onChange={onTabChange} items={panes} />
        </Spin>
      </>
    );
  };

  const { className, count, bell } = props;

  const [visible, setVisible] = useMergedState<boolean>(false, {
    value: props.popupVisible,
    onChange: props.onPopupVisibleChange,
  });

  const noticeButtonClass = classNames(className, styles.noticeButton);
  const notificationBox = getNotificationBox();
  const NoticeBellIcon = bell || <BellOutlined className={styles.icon} />;
  const trigger = (
    <span className={classNames(noticeButtonClass, { opened: visible })}>
      <Badge
        count={count}
        style={{ boxShadow: 'none' }}
        className={styles.badge}
      >
        {NoticeBellIcon}
      </Badge>
    </span>
  );
  if (!notificationBox) {
    return trigger;
  }

  return (
    <Popover
      placement="bottomRight"
      trigger={['click']}
      content={notificationBox}
      open={visible}
      onOpenChange={setVisible}
      overlayClassName={styles.popover}
    >
      {trigger}
    </Popover>
  );
  // return <Tabs items={items} />;
  // return (
  // <HeaderDropdown
  //   placement="bottomRight"
  //   menu={{ items: notificationBox }}
  //   dropdownRender={(menu) => <div className="dropdown-content">{menu}</div>}
  //   overlayClassName={styles.popover}
  //   trigger={['click']}
  //   open={visible}
  //   onOpenChange={setVisible}
  // >
  //   {trigger}
  // </HeaderDropdown>
  // );
};
{
}

NoticeIcon.defaultProps = {
  emptyImage: '/assets/notice.svg',
};

NoticeIcon.Tab = NoticeList;

export default NoticeIcon;
