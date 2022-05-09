import React, { useState, useEffect } from 'react';
import { Tooltip } from 'antd';
import { useWallet } from '@solana/wallet-adapter-react';
import { shortenAddress } from '../../utils';
import { CopyOutlined } from '@ant-design/icons';
// import { Identicon } from '../Identicon';
// import { Link } from 'react-router-dom';
// import { useMeta } from '@oyster/common';
import Prismic from 'prismic-javascript';

export const Settings = (props: any) => {
  const { publicKey } = useWallet();
  // const { whitelistedCreatorsByCreator } = useMeta();
  // const { prismicContent } = props.userDetail.children._owner.memoizedProps;
  // const creatorDeatil =
  //   prismicContent &&
  //   prismicContent.length > 0 &&
  //   prismicContent[0].data.creator.length > 0 &&
  //   prismicContent[0].data.creator.filter(
  //     (x: any) => x.creator_id[0].text === publicKey?.toBase58(),
  //   );

  const [creatorDetail, setCreatorDetail] = useState<any>();

  useEffect(() => {
    const client = Prismic.client(
      'https://starlight-metaplex.prismic.io/api/v2',
    );
    client
      .query([Prismic.Predicates.at('document.type', 'test')])
      .then(res => {
        const _myPrismicContent = res.results;

        const creatorDetail =
          _myPrismicContent &&
          _myPrismicContent.length > 0 &&
          _myPrismicContent[0].data.creator.length > 0 &&
          _myPrismicContent[0].data.creator.filter(
            (x: any) => x.creator_id[0].text === publicKey?.toBase58(),
          );

        setCreatorDetail(creatorDetail);

        console.log('internal_response:::---', res);
      })
      .catch(err => {
        console.log('err is ', err);
      });
  });

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

        <div className="drop-profile-img">
          {creatorDetail && creatorDetail.length > 0 ? (
            <img src={creatorDetail[0].profile_pic.url} />
          ) : (
            <img src="/profile-img.png" />
          )}
        </div>

        {publicKey && (
          <>
            <Tooltip title="Address copied">
              <div
                className="wallet-address"
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

        {/* {Object.prototype.hasOwnProperty.call(
          whitelistedCreatorsByCreator,
          publicKey + '',
        ) && (
          <Link to={`/artists/${publicKey}`} className="profile">
            View profile 1441{' '}
          </Link>
        )} */}
        {props.additionalSettings}
      </div>
    </>
  );
};
