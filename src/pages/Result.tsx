import React from 'react';
import Integration from '../components/Home/homeIntegration/Integration';
import ResultHeader from '../components/result/ResultHeader';
import Updates from '../components/Home/update/Updates';

const Result = () => {
  return (
    <>
    <ResultHeader />
    <Integration />
    <Updates />
    </>
  )
};

export default Result;