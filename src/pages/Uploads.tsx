import React from 'react';
import Integration from '../components/Home/homeIntegration/Integration';
import Updates from '../components/Home/update/Updates';
import UploadHeader from '../components/uploads/uploadHeader/UploadHeader';

const Uploads = () => {
  return (
    <>
    <UploadHeader />
    <Integration />
    <Updates />
    </>
  )
};

export default Uploads;