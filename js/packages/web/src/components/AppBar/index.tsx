import React, { useCallback, useMemo, useState } from 'react';;
import { Link } from 'react-router-dom';
import { Button, Menu, Modal } from 'antd';
import { useWallet } from '@solana/wallet-adapter-react';
import { Notifications } from '../Notifications';
import useWindowDimensions from '../../utils/layout';
import { MenuOutlined } from '@ant-design/icons';
import { HowToBuyModal } from '../HowToBuyModal';
import {
  Cog,
  CurrentUserBadge,
  CurrentUserBadgeMobile,
} from '../CurrentUserBadge';
import { ConnectButton } from '@oyster/common';
import { MobileNavbar } from '../MobileNavbar';
import { useMeta, useSolPrice } from '../../contexts';

const getDefaultLinkActions = (connected: boolean) => {
  return [
    <Link to={`/`} key={'explore'}>
      <Button className="app-btn">Explore</Button>
    </Link>,
    <Link to={`/artists`} key={'artists'}>
      <Button className="app-btn">Creators</Button>
    </Link>,
    <Link to={`/Upcoming`} key={'Upcoming'}>
      <Button className="app-btn">Upcoming</Button>
    </Link>,
    <Link to={`/`} key={'/'}>
      <HowToBuyModal buttonClassName="modal-button-default no-border" />
    </Link>,



    // <Link to={`/artworks`} key={'artwork'}>
    //   <Button className="app-btn">{connected ? 'My Items' : 'Artwork'}</Button>
    // </Link>,
    
  ];
};

const DefaultActions = ({ vertical = false }: { vertical?: boolean }) => {
  const { connected } = useWallet();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: vertical ? 'column' : 'row',
      }}
    >
      {getDefaultLinkActions(connected)}
    </div>
  );
};

export const MetaplexMenu = () => {
  const { width } = useWindowDimensions();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const { connected } = useWallet();

  if (width < 768)
    return (
      <>
        <Modal
          title={<img src={'/metaplex-logo.svg'} />}
          visible={isModalVisible}
          footer={null}
          className={'modal-box'}
          closeIcon={
            <img
              onClick={() => setIsModalVisible(false)}
              src={'/modals/close.svg'}
            />
          }
        >
          <div className="site-card-wrapper mobile-menu-modal">
            <Menu onClick={() => setIsModalVisible(false)}>
              {getDefaultLinkActions(connected).map((item, idx) => (
                <Menu.Item key={idx}>{item}</Menu.Item>
              ))}
            </Menu>
            <div className="actions">
              {!connected ? (
                <div className="actions-buttons">
                  <ConnectButton
                    onClick={() => setIsModalVisible(false)}
                    className="secondary-btn"
                  />
                  <HowToBuyModal
                    onClick={() => setIsModalVisible(false)}
                    buttonClassName="black-btn"
                  />
                </div>
              ) : (
                <>
                  <CurrentUserBadgeMobile
                    showBalance={false}
                    showAddress={true}
                    iconSize={24}
                    closeModal={() => {
                      setIsModalVisible(false);
                    }}
                  />
                  <Notifications />
                  <Cog />
                </>
              )}
            </div>
          </div>
        </Modal>
        <MenuOutlined
          onClick={() => setIsModalVisible(true)}
          style={{ fontSize: '1.4rem' }}
        />
      </>
    );

  return <DefaultActions />;
};

export const LogoLink = () => {
  return (
    <Link to={`/`}>
      <img src={'/metaplex-logo.svg'} />
    </Link>
  );
};

export const AppBar = () => {
  const { connected } = useWallet();

  const { publicKey } = useWallet();
  const { whitelistedCreatorsByCreator, store } = useMeta();
  const pubkey = publicKey?.toBase58() || '';

  const canCreate = useMemo(() => {
    return (
      store?.info?.public ||
      whitelistedCreatorsByCreator[pubkey]?.info?.activated
    );
  }, [pubkey, whitelistedCreatorsByCreator, store]);

  return (
    <>
      <MobileNavbar />
      <div id="desktop-navbar">
        <div className="app-left">
          <LogoLink />
          &nbsp;&nbsp;&nbsp;
          <MetaplexMenu />
        </div>
        <div className="app-right">
          {/* {!connected && (
            <HowToBuyModal buttonClassName="modal-button-default no-border" />
          )} */}

          {!connected && (
            <>
            <ConnectButton allowWalletChange />
            </>
          )}
          {connected && (
            <>
            <div className='profile-action-button'>
              {canCreate && (
                <>
                  <Link to={`/art/create`}>
                    <Button className="metaplex-button-default">
                      Create
                    </Button>
                  </Link>
                  &nbsp;&nbsp;
                </>
              )}
            </div>
              <Notifications />
              <CurrentUserBadge
                showBalance={false}
                showAddress={true}
                iconSize={24}
              />
              
              <Cog />
            </>
          )}
        </div>
      </div>
    </>
  );
};
