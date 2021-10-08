import amplitude from 'amplitude-js';
import config from '../config';
import { BridgePlus } from '@happysanta/bridge-plus';

const am = amplitude.getInstance();
am.init(config.amplitudeApiKey);
am.setUserId(BridgePlus.getStartParams().userId.toString());

export type EventMap = '';

export const stats = {
  log(event: EventMap, data?: any) {
    try {
      console.log('new stats event:', event, data);
      am.logEvent(event, data);
    } catch {
      // ignore
    }
  },
};
