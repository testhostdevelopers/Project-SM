import { Col, Divider, Row } from 'antd';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArtCard } from '../../components/ArtCard';
import { MetaAvatar } from '../../components/MetaAvatar';
import { CardLoader } from '../../components/MyLoader';
import { useCreator, useCreatorArts } from '../../hooks';

export const ArtistView = (props) => {
  const { id } = useParams<{ id: string }>();
  const creator = useCreator(id);
  const artwork = useCreatorArts(id);

  const { prismicContent } = props || [];

  const creatorDeatil = (prismicContent && prismicContent.length > 0 && prismicContent[0].data.creator.length > 0) && prismicContent[0].data.creator.filter((x) => x.creator_id[0].text == id);
  const artworkGrid = (
    <div className="artwork-grid">
      {artwork.length > 0
        ? artwork.map((m, idx) => {
          // const id = m.pubkey;
          return (
            <Link to={`/art/${m.pubkey}`} key={idx}>
              <ArtCard
                key={m.pubkey}
                artkey={id}
                pubkey={m.pubkey}
                preview={false}
                artView={true}
                prismicContent={prismicContent}
              />
            </Link>
          );
        })
        : [...Array(6)].map((_, idx) => <CardLoader key={idx} />)}
    </div>
  );

  return (
    <>
      <div className='cover-img'>
        <div className='cover-img-box'>
          {(creatorDeatil && creatorDeatil[0]) ? <img src={creatorDeatil[0].cover_pic.url} /> : <img src="/RectangleBanner.jpg" />}

        </div>
        <div className='profile-img-box'>
          {(creatorDeatil && creatorDeatil[0]) ? <img src={creatorDeatil[0].profile_pic.url} /> : <img src="/profile-img.png" />}
        </div>
      </div>

      <Col>
        {/* <Divider /> */}
        <Row
          style={{ margin: '0 30px', textAlign: 'left', fontSize: '1.4rem' }}
        >
          <Col className='center-all' span={24}>

            <h2 className='p-address'>
              {(creatorDeatil && creatorDeatil[0]) ? creatorDeatil[0].creator_name[0].text : '' }
              {/* <MetaAvatar creators={creator ? [creator] : []} size={100} /> */}
              <span className='profile-address'>
                {creator?.info.name || creator?.info.address}
              </span>
            </h2>
            {/* <div className="info-header">ABOUT THE CREATOR</div> */}
            <div className="info-content">
              {(creatorDeatil && creatorDeatil[0]) ? creatorDeatil[0].creator_description[0].text : ''}
              {creator?.info.description}
            </div>
            <div className='profile-siteinfo'>
              <Link target="_blank" to={"#0"}>
                <span>
                  <img src='/world.svg' />
                </span>
                <span>{(creatorDeatil && creatorDeatil[0]) ? creatorDeatil[0].creator_webite_url[0].text : ''}</span>
              </Link>
            </div>
            {/* <div className="info-header">Art Created</div> */}
            {artworkGrid}
          </Col>
        </Row>
      </Col>
    </>
  );
};
