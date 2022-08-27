/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState } from 'react';
import useSWR from 'swr';

import { DashBoard } from '@/base/Dashboard';
import { Meta } from '@/layouts/Meta';
import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';

import EmptyCard from '../entrepreneur/components/emptycard';
import FeedCard from '../entrepreneur/components/feedcard';
import { Side } from '../entrepreneur/components/side';
import AddSkills from './components/AddSkills';
import { Modal } from './components/modal';

export default function Index() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState({});
  const { user } = useAuth();
  const getId = (idDetails: string) => {
    setId(idDetails);
  };
  const [enterId, setEnterId] = useState({});
  const getEnterId = (idDetails: string) => {
    setEnterId(idDetails);
  };

  // changables
  const where = 'student';
  const { data: feedData } = useSWR('/api/feed', fetcher);
  const { data: feedDetails } = useSWR(`/api/feeds/${id}`, fetcher);
  const { data: userAbout } = useSWR(`/api/skills/${user.uid}`, fetcher);
  const { data: userWho } = useSWR(`/api/profile/${enterId}`, fetcher);
  const feeds = feedData?.feeds;
  const userW = userWho?.userWho;
  const feedDetail = feedDetails?.feedD;
  const userA = userAbout?.userAbout;
  const userB = userA?.length;
  return (
    <>
      <DashBoard
        metaDashboard={
          <Meta
            title="Projects | TransCIIT Project"
            description="Welcome to TransCIIT"
          />
        }
        nameDashboard={where}
      >
        <div className="block md:grid md:grid-flow-row-dense md:grid-cols-4">
          <div className="col-span-3 py-5">
            <div className="top-6">{userB?.length ? <></> : <AddSkills />}</div>
            {feeds?.length ? (
              <FeedCard
                feeds={feeds}
                setOpen={setOpen}
                getId={getId}
                from={where}
              />
            ) : (
              <EmptyCard />
            )}
          </div>
          <div className="sticky top-6 hidden py-5 md:block lg:block">
            <Side />
          </div>
        </div>
      </DashBoard>
      <Modal
        feedDetails={feedDetail}
        from={where}
        open={open}
        setOpen={setOpen}
        getEnterId={getEnterId}
        userE={userW}
      />
    </>
  );
}
