import React from 'react';
import { Tooltip } from 'antd';
import { useWallet } from '@solana/wallet-adapter-react';
import { shortenAddress } from '../../utils';
import { CopyOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Identicon } from '../Identicon';
export const Settings = (props: any, {
  additionalSettings,
}: {
  additionalSettings?: JSX.Element;
}) => {
  const { publicKey } = useWallet() || {}
  const { prismicContent } = props.userDetail.children._owner.memoizedProps;
  let creatorDeatil = (prismicContent && prismicContent.length > 0 && prismicContent[0].data.creator.length > 0) && prismicContent[0].data.creator.filter((x: any) => (x.creator_id[0].text === publicKey?.toBase58()));

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '15px 0',
        }}
      >
        {/* <Identicon
            address={publicKey?.toBase58()}
            style={{
              width: 48,
            }}
          /> */}
        <div className='drop-profile-img'>
          {(creatorDeatil && creatorDeatil.length > 0) ? <img src={creatorDeatil[0].profile_pic.url} /> : <img src="/profile-img.png" />}
        </div>

        {publicKey && (
          <>
            <Tooltip title="Address copied">
              <div className='wallet-address'
                onClick={() =>
                  navigator.clipboard.writeText(publicKey?.toBase58() || '')
                }
              >
                <CopyOutlined />
                &nbsp;{shortenAddress(publicKey?.toBase58())}
              </div>
            </Tooltip>
          </>
        )}
        <br />
        <Link to={`/artists/${publicKey}`} className='profile'>View profile </Link>

        {additionalSettings}
      </div>
    </>
  );
};
