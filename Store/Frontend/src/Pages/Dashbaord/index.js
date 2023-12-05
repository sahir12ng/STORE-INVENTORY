import React, { useState } from 'react';
import { Space, Card, Statistic, Button, Switch } from 'antd';
import { DollarCircleOutlined, SettingOutlined } from "@ant-design/icons";

import PageContent from '../../Components/PageContent';
import AppFooter from '../../Components/AppFooter';
import AppHeader from '../../Components/AppHeader';
import SideMenu from '../../Components/SideMenu';

function Dashboard() {
  const [isTwoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [additionalSetting, setAdditionalSetting] = useState(false);

const toggleTwoFactor = () => {
  setTwoFactorEnabled((prev) => !prev);
};

const toggleAdditionalSetting = () => {
  setAdditionalSetting((prev) => !prev);
};

return (
  <>
    <div className="App">
    <AppHeader></AppHeader>
    <div className="SideMenuAndPageContent">
      <SideMenu></SideMenu>
      <PageContent/><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
      <Space size={15} direction="vertical">
        <Card>
          <Space direction="horizontal">
            <DollarCircleOutlined
              style={{
                color: isTwoFactorEnabled ? 'green' : 'red',
                backgroundColor: isTwoFactorEnabled ? 'rgba(0,255,0,0.25)' : 'rgba(255,0,0,0.25)',
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
            <Statistic title={'Two-Factor Authentication'} value={isTwoFactorEnabled ? 'Enabled' : 'Disabled'} />
          </Space>
          <Button onClick={toggleTwoFactor}>
            {isTwoFactorEnabled ? 'Disable' : 'Enable'} Two-Factor Authentication
          </Button>
        </Card>

        <Card>
          <Space direction="horizontal">
            <SettingOutlined
              style={{
                color: additionalSetting ? 'blue' : 'gray',
                fontSize: 24,
                padding: 8,
              }}
            />
            <Statistic title={'Additional Setting'} value={additionalSetting ? 'Enabled' : 'Disabled'} />
          </Space>
          <Button onClick={toggleAdditionalSetting}>
            {additionalSetting ? 'Disable' : 'Enable'} Additional Setting
          </Button>
        </Card>
      </Space>
    </div>
    </div>
    <AppFooter />
  </div>

    
  </>
    
  );
}

export default Dashboard;
