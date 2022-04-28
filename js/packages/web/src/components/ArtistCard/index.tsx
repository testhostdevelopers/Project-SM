import React from 'react';
import { Card } from 'antd';

// import { Artist } from '../../types';
// import { shortenAddress } from '@oyster/common';
// import { MetaAvatar } from '../MetaAvatar';

export const ArtistCard = (props: any) => {
  const { artistDetail, artist } = props;

  const creatorDeatil =
    artistDetail.prismicContent &&
    artistDetail.prismicContent.length > 0 &&
    artistDetail.prismicContent[0].data.creator.length > 0 &&
    artistDetail.prismicContent[0].data.creator.filter(
      x => x.creator_id[0].text === artist.address,
    );

  return (
    <Card
      hoverable={true}
      className={`artist-card`}
      cover={
        <div className="header-container">
          {creatorDeatil && creatorDeatil.length > 0 ? (
            <img src={creatorDeatil[0].profile_pic.url} />
          ) : (
            <img src="/profile-img.png" />
          )}
        </div>
      }
      bordered={false}
    >
      <>
        {/* <MetaAvatar creators={[artist]} size={64} /> */}
        <div className="artist-card-name">
          {creatorDeatil[0].creator_name[0].text ||
            creatorDeatil[0].creator_name[0].text ||
            creatorDeatil[0].creator_id[0].text}
        </div>
        <div className="artist-card-description">{props.artist?.about}</div>
      </>
    </Card>
  );
};
