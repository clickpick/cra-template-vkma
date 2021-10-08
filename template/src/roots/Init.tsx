import type { FC } from 'react';
import { options } from '@mntm/graphql';
import { isProd } from '@clickpick/shared';
import config from '../config';
import { BridgePlus } from '@happysanta/bridge-plus';
import { RouterContext } from '@happysanta/router';
import { router } from '../router';
import { RecoilRoot } from 'recoil';
import { ConfigProvider } from '@vkontakte/vkui';

options.url = config.apiEndpoint;
options.headers['Authorization'] = `VK ${isProd ? btoa(window.location.search.slice(1)) : config.sign}`;

router.start();
BridgePlus.init();

export const Init: FC = (props) => {
  return (
    <RouterContext.Provider value={router}>
      <RecoilRoot>
        <ConfigProvider scheme="inherit" isWebView>
          {props.children}
        </ConfigProvider>
      </RecoilRoot>
    </RouterContext.Provider>
  );
};
