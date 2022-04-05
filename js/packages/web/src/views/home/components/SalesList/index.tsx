import { useWallet } from '@solana/wallet-adapter-react';
import { Col, Layout, Row, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import { useMeta } from '../../../../contexts';
import { CardLoader } from '../../../../components/MyLoader';
import { Banner } from '../../../../components/Banner';
import { HowToBuyModal } from '../../../../components/HowToBuyModal';

import { useAuctionsList } from './hooks/useAuctionsList';
import { AuctionRenderCard } from '../../../../components/AuctionRenderCard';

const { TabPane } = Tabs;
const { Content } = Layout;

export enum LiveAuctionViewState {
  All = '0',
  Participated = '1',
  Ended = '2',
  Resale = '3',
  Own = '4',
}

export const SalesListView = props => {
  const [activeKey, setActiveKey] = useState(LiveAuctionViewState.All);
  const { isLoading } = useMeta();
  const { connected } = useWallet();
  const { auctions, hasResaleAuctions } = useAuctionsList(activeKey);
  const { prismicContent } = props || [];
  return (
    <>
      <div className="hero-slider">
        <input type="radio" id="trigger1" name="slider" checked />
        <label htmlFor="trigger1"></label>
        <div className="slide">
          <Banner
            src="/RectangleBanner.jpg"
            headingText="Name of Collection 1"
            byText="By Lorem Ipsum"
            subHeadingText="Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the 
              industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and 
              scrambled it to make a type specimen book."
            actionComponent={
              <HowToBuyModal buttonClassName="Explore Collection" />
            }
            useBannerBg
          />
        </div>

        <input type="radio" id="trigger2" name="slider" />
        <label htmlFor="trigger2"></label>
        <div className="slide">
          <Banner
            src="/RectangleBanner.jpg"
            headingText="Name of Collection 2"
            byText="By Lorem Ipsum"
            subHeadingText="Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book."
            actionComponent={
              <HowToBuyModal buttonClassName="Explore Collection" />
            }
            useBannerBg
          />
        </div>

        <input type="radio" id="trigger3" name="slider" />
        <label htmlFor="trigger3"></label>
        <div className="slide">
          <Banner
            src="/RectangleBanner.jpg"
            headingText="Name of Collection 3"
            byText="By Lorem Ipsum"
            subHeadingText="Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book."
            actionComponent={
              <HowToBuyModal buttonClassName="Explore Collection" />
            }
            useBannerBg
          />
        </div>
      </div>

      <Layout>
        <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Col style={{ width: '100%' }}>
            {prismicContent && prismicContent.length > 0 && (
              <div className="featured-creators">
                <h2>Featured Creators</h2>
                <ul>
                {(prismicContent[0]?.data?.image?.url && prismicContent[0]?.data?.title_1[0]?.text) ?
                  <li>
                    <Link to={'#0'}>
                      <div className="featuere-img">
                        <img src={prismicContent[0]?.data?.image?.url} />
                      </div>
                      <div className="feature-content">
                        <h5>{prismicContent[0]?.data?.title_1[0]?.text}</h5>
                      </div>
                    </Link>
                  </li>: null}
                  {(prismicContent[0]?.data?.image_2?.url && prismicContent[0]?.data?.title_2[0]?.text) ?
                  <li>
                    <Link to={'#0'}>
                      <div className="featuere-img">
                        <img src={prismicContent[0]?.data?.image_2?.url} />
                      </div>
                      <div className="feature-content">
                        <h5>{prismicContent[0]?.data?.title_2[0]?.text}</h5>
                      </div>
                    </Link>
                  </li>: null}
                  {(prismicContent[0]?.data?.image_3?.url && prismicContent[0]?.data?.title_3[0]?.text) ?
                  <li>
                    <Link to={'#0'}>
                      <div className="featuere-img">
                        <img src={prismicContent[0]?.data?.image_3?.url} />
                      </div>
                      <div className="feature-content">
                        <h5>{prismicContent[0]?.data?.title_3[0]?.text}</h5>
                      </div>
                    </Link>
                  </li>: null}
                  {(prismicContent[0]?.data?.image_4?.url && prismicContent[0]?.data?.title_4[0]?.text) ?
                  <li>
                    <Link to={'#0'}>
                      <div className="featuere-img">
                        <img src={prismicContent[0]?.data?.image_4?.url} />
                      </div>
                      <div className="feature-content">
                        <h5>{prismicContent[0]?.data?.title_4[0]?.text}</h5>
                      </div>
                    </Link>
                  </li>: null}
                  {(prismicContent[0]?.data?.image_5?.url && prismicContent[0]?.data?.title_5[0]?.text) ?
                  <li>
                    <Link to={'#0'}>
                      <div className="featuere-img">
                        <img src={prismicContent[0]?.data?.image_5?.url} />
                      </div>
                      <div className="feature-content">
                        <h5>{prismicContent[0]?.data?.title_5[0]?.text}</h5>
                      </div>
                    </Link>
                  </li>: null}
                  {(prismicContent[0]?.data?.image_6?.url && prismicContent[0]?.data?.title_6[0]?.text) ?
                  <li>
                    <Link to={'#0'}>
                      <div className="featuere-img">
                        <img src={prismicContent[0]?.data?.image_6?.url} />
                      </div>
                      <div className="feature-content">
                        <h5>{prismicContent[0]?.data?.title_6[0]?.text}</h5>
                      </div>
                    </Link>
                  </li>: null}
                  {(prismicContent[0]?.data?.image_7?.url && prismicContent[0]?.data?.title_7[0]?.text) ?
                  <li>
                    <Link to={'#0'}>
                      <div className="featuere-img">
                        <img src={prismicContent[0]?.data?.image_7?.url} />
                      </div>
                      <div className="feature-content">
                        <h5>{prismicContent[0]?.data?.title_7[0]?.text}</h5>
                      </div>
                    </Link>
                  </li>: null}
                  {(prismicContent[0]?.data?.image_8?.url && prismicContent[0]?.data?.title_8[0]?.text) ?
                  <li>
                    <Link to={'#0'}>
                      <div className="featuere-img">
                        <img src={prismicContent[0]?.data?.image_8?.url} />
                      </div>
                      <div className="feature-content">
                        <h5>{prismicContent[0]?.data?.title_8[0]?.text}</h5>
                      </div>
                    </Link>
                  </li>: null}
                  {(prismicContent[0]?.data?.image_9?.url && prismicContent[0]?.data?.title_9[0]?.text) ?
                  <li>
                    <Link to={'#0'}>
                      <div className="featuere-img">
                        <img src={prismicContent[0]?.data?.image_9?.url} />
                      </div>
                      <div className="feature-content">
                        <h5>{prismicContent[0]?.data?.title_9[0]?.text}</h5>
                      </div>
                    </Link>
                  </li>: null}
                  {(prismicContent[0]?.data?.image_10?.url && prismicContent[0]?.data?.title_10[0]?.text) ? <li>
                    <Link to={'#0'}>
                      <div className="featuere-img">
                        <img src={prismicContent[0]?.data?.image_10?.url} />
                      </div>
                      <div className="feature-content">
                        <h5>{prismicContent[0]?.data?.title_10[0]?.text}</h5>
                      </div>
                    </Link>
                  </li> : null}
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
                        <AuctionRenderCard auctionView={auction} />
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
