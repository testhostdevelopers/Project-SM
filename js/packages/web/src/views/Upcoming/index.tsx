import React, { useState } from 'react';
import {
  Row,
  Col,
  Divider,
  Layout,
  Tag,
  Button,
  Skeleton,
  List,
  Card,
} from 'antd';
import { UpcomingCard } from '../../components/UpcomingCard';


export const UpcomingView= () => {
  
  return (
    <>
      <Layout>
        <div className='title'>
          <h1>Live</h1>
        </div>
          <div className='upcoming-list'>
            <UpcomingCard
              src="/RectangleBanner.jpg"
              headingText="Name of Collection"
              byText="By Lorem Ipsum"
              subHeadingText="Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the 
              industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and 
              scrambled it to make a type specimen book."
              evendate=""
              actionComponent={
                <Button type="primary">Explore Collection</Button>
              }
              useBannerBg
            />
          </div>
      </Layout>

      <Layout style={{ margin: 0, marginTop: 30}}>
        <div className='title'>
          <h1>Upcoming Collections</h1>
        </div>
          <div className='upcoming-list'>
          <UpcomingCard
            src="/RectangleBanner.jpg"
            headingText="Name of Collection"
            byText="By Lorem Ipsum"
            subHeadingText="Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book."
            evendate="1 January 2022, 9am GMT"
            actionComponent={
              <Button type="primary">Save the Date</Button>
            }
            useBannerBg
          />

          <UpcomingCard
            src="/RectangleBanner.jpg"
            headingText="Name of Collection"
            byText="By Lorem Ipsum"
            subHeadingText="Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book."
            evendate="1 January 2022, 9am GMT"
            actionComponent={
              <Button type="primary">Save the Date</Button>
            }
            useBannerBg
          />

          <UpcomingCard
            src="/RectangleBanner.jpg"
            headingText="Name of Collection"
            byText="By Lorem Ipsum"
            subHeadingText="Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book."
            evendate="1 January 2022, 9am GMT"
            actionComponent={
              <Button type="primary">Save the Date</Button>
            }
            useBannerBg
          />
      </div>
    </Layout>
    </>
  );
};
