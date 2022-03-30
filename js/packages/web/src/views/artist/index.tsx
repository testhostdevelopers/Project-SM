import { Col, Divider, Row } from 'antd';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArtCard } from '../../components/ArtCard';
import { MetaAvatar } from '../../components/MetaAvatar';
import { CardLoader } from '../../components/MyLoader';
import { useCreator, useCreatorArts } from '../../hooks';

export const ArtistView = () => {
  const { id } = useParams<{ id: string }>();
  const creator = useCreator(id);
  const artwork = useCreatorArts(id);

  const artworkGrid = (
    <div className="artwork-grid">
      {artwork.length > 0
        ? artwork.map((m, idx) => {
            const id = m.pubkey;
            return (
              <Link to={`/art/${id}`} key={idx}>
                <ArtCard
                  key={id}
                  pubkey={m.pubkey}
                  preview={false}
                  artView={true}
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
                <img src="/RectangleBanner.jpg" />
          </div>
          <div className='profile-img-box'>
                <img src="/profile-img.png" />
          </div>
      </div>

      <Col>
        {/* <Divider /> */}
        <Row
          style={{ margin: '0 30px', textAlign: 'left', fontSize: '1.4rem' }}
        >
          <Col className='center-all' span={24}>
            
            <h2 className='p-address'>
              Pete Jackson
              {/* <MetaAvatar creators={creator ? [creator] : []} size={100} /> */}
              <span className='profile-address'>
               {creator?.info.name || creator?.info.address}
              </span>
            </h2>
            {/* <div className="info-header">ABOUT THE CREATOR</div> */}
            <div className="info-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              {creator?.info.description}
            </div>
            <div className='profile-siteinfo'>
              <span>
                <img src='/world.svg'/>
              </span>
              <span>pixeldrops.com</span>
            </div>
            {/* <div className="info-header">Art Created</div> */}
            {artworkGrid}
          </Col>
        </Row>
      </Col>
    </>
  );
};
