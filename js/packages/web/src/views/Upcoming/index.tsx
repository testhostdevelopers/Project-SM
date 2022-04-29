import React from 'react';
import { Link } from 'react-router-dom';
import {
  // Row,
  Col,
  // Divider,
  Layout,
  // Tag,
  Button,
  // Skeleton,
  // List,
  // Card,
} from 'antd';
import { UpcomingCard } from '../../components/UpcomingCard';
const { Content } = Layout;

export const UpcomingView = props => {
  const { prismicContent } = props || [];
  return (
    <>
      <Layout>
        <div className="title">
          <h1>Live</h1>
        </div>
        {prismicContent && prismicContent.length > 0 && (
          <div className="upcoming-list">
            {prismicContent[0]?.data.live_collection &&
              prismicContent[0]?.data.live_collection.length > 0 &&
              prismicContent[0]?.data.live_collection.map((x, key) => (
                <UpcomingCard
                  key={key}
                  src={x.live_collection_image?.url}
                  headingText={x.live_collection_name[0]?.text}
                  byText={x.live_collection_by[0]?.text}
                  subHeadingText={x.live_collection_description[0]?.text}
                  evendate=""
                  actionComponent={
                    <Link
                      to={x.live_collection_btn_url[0]?.text}
                      target="_blank"
                    >
                      <Button type="primary">
                        {x.live_collection_btn_text[0].text}
                      </Button>
                    </Link>
                  }
                  useBannerBg
                />
              ))}
          </div>
        )}
      </Layout>
      <Layout>
        <Content style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Col style={{ width: '100%' }}>
            {prismicContent && prismicContent.length > 0 && (
              <div className="featured-creators">
                <ul>
                  {prismicContent[0]?.data?.upcoming_creator &&
                    prismicContent[0]?.data?.upcoming_creator.length > 0 &&
                    prismicContent[0]?.data?.upcoming_creator.map((x, key) => (
                      <li key={key}>
                        <Link
                          to={x?.upcoming_creator_link[0]?.text}
                          target="_blank"
                        >
                          <div className="featuere-img">
                            <img src={x.upcoming_creator_image?.url} />
                          </div>
                          <div className="feature-content">
                            <h5>{x.upcoming_creator_name[0]?.text}</h5>
                          </div>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </Col>
        </Content>
      </Layout>
      <Layout style={{ margin: 0, marginTop: 30 }}>
        <div className="title">
          <h1>Upcoming Collections</h1>
        </div>
        {prismicContent && prismicContent.length > 0 && (
          <div className="upcoming-list">
            {prismicContent[0]?.data?.upcoming_collection &&
              prismicContent[0]?.data?.upcoming_collection.length > 0 &&
              prismicContent[0]?.data?.upcoming_collection.map((x, key) => (
                <UpcomingCard
                  key={key}
                  src={x.upcoming_collection_image?.url}
                  headingText={x.upcoming_collection_name[0]?.text}
                  byText={x.upcoming_collection_by[0]?.text}
                  subHeadingText={x.upcoming_collection_description[0]?.text}
                  evendate={x.date[0]?.text}
                  actionComponent={
                    <a
                      href={`${x.ics_file_link?.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button type="primary">
                        {x.upcoming_collection_btn_text[0]?.text}
                      </Button>
                    </a>
                  }
                  useBannerBg
                />
              ))}
          </div>
        )}
      </Layout>
    </>
  );
};
