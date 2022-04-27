import { useWallet } from '@solana/wallet-adapter-react';
import { Col, Layout, Row, Tabs, Button } from 'antd';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { useMeta } from '../../../../contexts';
import { CardLoader } from '../../../../components/MyLoader';
import { Banner } from '../../../../components/Banner';

import { useAuctionsList } from './hooks/useAuctionsList';
import { AuctionRenderCard } from '../../../../components/AuctionRenderCard';
// import { set } from 'lodash';

const { TabPane } = Tabs;
const { Content } = Layout;

export enum LiveAuctionViewState {
  All = '0',
  Participated = '1',
  Ended = '2',
  Resale = '3',
  Own = '4',
}

export const SalesListView = (props: any) => {

  const [activeKey, setActiveKey] = useState(LiveAuctionViewState.All);
  const [slidercheck, setSlidercheck] = useState(1);
  const { isLoading } = useMeta();
  const { connected } = useWallet();
  const { auctions, hasResaleAuctions } = useAuctionsList(activeKey);
  const { prismicContent } = props || [];
  // let rdo_checked = false;
  // const checkedBox = () => {
  //   if (!rdo_checked) {
  //     // setSlidercheck(true);
  //     rdo_checked = true;
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  useEffect(() => {
    setTimeout(() => {
      if (prismicContent && prismicContent.length > 0) {
        if (slidercheck === prismicContent[0]?.data?.home_collection.length) {
          setSlidercheck(1)
        } else {
          setSlidercheck(slidercheck + 1)
        }
      }
    }, 5000);
  }, [slidercheck])



  return (
    <>
      <div className="hero-slider">
        {prismicContent && prismicContent.length > 0 && (
          prismicContent[0]?.data?.home_collection && prismicContent[0]?.data?.home_collection.length > 0 &&
          prismicContent[0]?.data?.home_collection.map((x, i) =>
            <>
              <input type="radio" id={`trigger-${i + 1}`} name="slider" onChange={() => setSlidercheck(i + 1)} checked={slidercheck === i + 1 ? true : false} />
              <label htmlFor={`trigger-${i + 1}`}></label>
              <div className="slide">
                <Banner
                  src={x.home_collection_image?.url}
                  headingText={x.home_collection_name[0]?.text}
                  byText={x.home_collection_by[0]?.text}
                  subHeadingText={x.home_collection_description[0]?.text}
                  actionComponent={
                    <Link to={x.home_collection_btn_url[0].text} target="_blank">
                      <Button type="primary">{x.home_collection_btn_text[0]?.text}</Button></Link>
                  }
                  useBannerBg
                />
              </div>
            </>
          ))}
      </div>

      <Layout>
        <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Col style={{ width: '100%' }}>
            {prismicContent && prismicContent.length > 0 && (
              <div className="featured-creators">
                <h2>Featured Creators</h2>
                <ul>
                  {(prismicContent[0]?.data?.home_featured_creator && prismicContent[0]?.data?.home_featured_creator.length > 0) &&
                    prismicContent[0]?.data?.home_featured_creator.map((x: any, key: string) => (<li>
                      <Link to={x.creator_link[0]?.text} key={key}>
                        <div className="featuere-img">
                          <img src={x.creator_image.url} />
                        </div>
                        <div className="feature-content">
                          <h5>{x.creator_name[0]?.text}</h5>
                        </div>
                      </Link>
                    </li>))
                  }
                </ul>
              </div>
            )}
          </Col>
        </Content>
      </Layout>

      <Layout>
        <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Col style={{ width: '100%', marginTop: 32 }}>
            <div className="home-tab">
              <h2>Explore</h2>
              <Row>
                <Tabs
                  activeKey={activeKey}
                  onTabClick={key => setActiveKey(key as LiveAuctionViewState)}
                >
                  <TabPane
                    tab={
                      <>
                        <span className="live"></span> Live
                      </>
                    }
                    key={LiveAuctionViewState.All}
                  ></TabPane>
                  {hasResaleAuctions && (
                    <TabPane
                      tab="Secondary Marketplace"
                      key={LiveAuctionViewState.Resale}
                    ></TabPane>
                  )}
                  <TabPane
                    tab="Ended"
                    key={LiveAuctionViewState.Ended}
                  ></TabPane>
                  {connected && (
                    <TabPane
                      tab="Pacrticipated"
                      key={LiveAuctionViewState.Participated}
                    ></TabPane>
                  )}
                  {connected && (
                    <TabPane
                      tab="My Live Auctions"
                      key={LiveAuctionViewState.Own}
                    ></TabPane>
                  )}
                </Tabs>
              </Row>
            </div>

            <div className="explore-tab">
              <Row>
                <div className="artwork-grid">
                  {isLoading &&
                    [...Array(10)].map((_, idx) => <CardLoader key={idx} />)}
                  {!isLoading &&
                    auctions.map(auction => (
                      <Link
                        key={auction.auction.pubkey}
                        to={`/auction/${auction.auction.pubkey}`}
                      >
                        <AuctionRenderCard auctionView={auction} auctionDetail={props} />
                      </Link>
                    ))}
                </div>
              </Row>
            </div>
          </Col>
        </Content>
      </Layout>
    </>
  );
};
